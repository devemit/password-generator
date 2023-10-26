import Generator from '@/components/generator-body';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center bg-slate-900 py-24 px-10 cursor-pointer'>
      <Generator />
    </main>
  );
}
