import SearchCompany from '#/components/SearchCompany';

export default function Home() {  
  return (
    <div className="mx-auto max-w-md">
      <h1 className="mb-6 py-4 text-center text-5xl font-bold tracking-widest">博奕守護者</h1>

      <SearchCompany />
    </div>
  );
}
