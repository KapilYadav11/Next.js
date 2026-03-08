import Link from "next/link";

export default function Home() {
  return (
    <div className="text-lg w-screen h-screen flex items-center justify-center">
      <div className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent ">
        <h1>TODO app</h1>
        <br />
        <Link
          className="text-sky-800 font-light inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-slate-900 rounded-full hover:bg-slate-800 hover:shadow-lg transform transition-all duration-200 active:scale-95"
          href={"/signin"}
        >
          Sign in{" "}
        </Link>
        <br />
        <Link
          className="text-sky-300 font-extralight px-6 py-2.5 text-sm font-bold text-white bg-indigo-600 rounded-lg 
               hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200 
               active:scale-95 transition-all duration-200 ease-in-out"
          href={"/sign up"}
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}
