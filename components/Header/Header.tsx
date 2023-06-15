import RequestButton from '#/components/RequestButton';

export default function Header() {
  return (
    <header className="px-8 py-4 h-[80px] flex items-center justify-end">
      <RequestButton />
    </header>
  );
}