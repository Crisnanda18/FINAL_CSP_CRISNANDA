import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="max-w-xs text-xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            EMPLOYEE PORTAL
          </h1>

          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            The only way to do great work is to love what you do.
          </h1>

          <a href="/register" className="transition hover:scale-105 inline-flex items-center gap-2 rounded-lg  text-white shadow-lg ">
            Login →
          </a>

          <div className="mt-6 text-center text-sm text-slate-500">
            by Crisnanda C14220198
          </div>
        </div>

        

      </main>
    </div>
  );
}
