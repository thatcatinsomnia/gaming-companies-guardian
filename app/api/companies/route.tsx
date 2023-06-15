import { NextResponse, type NextRequest } from "next/server";

export function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  const { query } = searchParams;
  return NextResponse.json({
    message: 'hello'
  });
}
