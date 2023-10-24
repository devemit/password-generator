import Form from './generator-form';
import Header from './header';

export default function Generator() {
  return (
    <main className='bg-slate-200 rounded-md p-4 flex flex-col gap-10 items-center'>
      <Header />
      <Form />
    </main>
  );
}
