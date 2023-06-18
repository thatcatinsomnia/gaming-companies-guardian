import { NextResponse, NextRequest } from "next/server";
import pb from '#/lib/pocketbase';
import { ClientResponseError } from "pocketbase";

type Payload = {
  name: string;
  taxIdNumber?: string;
};

export async function POST(req: NextRequest) {
  const { data } = await req.json();
  const { name, taxIdNumber } = data;

  if (!name) {
    return NextResponse.json({
      message: 'company name must be filled.'
    }, {
      status: 422
    });
  }

  const taxIdNumberRule = /^[0-9]{8}$/;
  if (!taxIdNumberRule.test(taxIdNumber) && taxIdNumber.length !== 0) {
    return NextResponse.json({
      message: 'company tax id number syntax error.'
    }, {
      status: 422
    });
  }
  
  const payload: Payload = { name };

  if (taxIdNumber.length > 0) {
    payload['taxIdNumber'] = taxIdNumber;
  }
  
  try {
    const createdCompany = await pb.collection('company').create(payload);
    
    return NextResponse.json({ id: createdCompany.id }, { status: 201 });
  } catch (error) {
    if (error instanceof ClientResponseError) {
      return NextResponse.json({
        error: error,
        message: error.message
      }, { status: 422 });
    }

    return NextResponse.json({
      error: error,
      message: 'Oops, something is error !!!'
    }, { status: 422 });
  }
}