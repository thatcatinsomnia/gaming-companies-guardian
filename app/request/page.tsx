import RequestForm from '#/components/RequestForm';

export default function Page() {
  return (
    <div className="mx-auto max-w-2xl rounded p-8 ">
      <h2 className="mb-4 py-4 text-3xl">新增公司</h2>

      <RequestForm />
    </div>
  );
}