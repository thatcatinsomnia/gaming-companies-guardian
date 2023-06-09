import SearchCompany from '#/components/SearchCompany';

export default function Home() {  
  return (
    <div className="pt-14 mx-auto max-w-md">
      <h1 className="mb-4 py-4 text-center text-5xl font-bold tracking-widest">博奕守護者</h1>

      <SearchCompany />
    </div>
  );
}
