import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-2 md:px-8 lg:px-16 pt-16 min-h-screen">
        <h1 className="text-3xl font-semibold text-center text-zinc-800">
          Frontend Mentor Assignments
        </h1>
        <ul className="list-decimal pt-16">
          <Link href="/assignments/assignment-1">
            <li className="text-2xl px-4 py-2 rounded-md cursor-pointer bg-slate-100 hover:bg-slate-200">
              Assignment - 1
            </li>
          </Link>
          <Link href="/assignments/assignment-2">
            <li className="text-2xl px-4 py-2 rounded-md cursor-pointer bg-slate-100 hover:bg-slate-200">
              Assignment - 2: Mortgage repayment calculator
            </li>
          </Link>
          <Link href="/assignments/assignment-3">
            <li className="text-2xl px-4 py-2 rounded-md cursor-pointer bg-slate-100 hover:bg-slate-200">
              Assignment - 3: Newsletter sign-up form
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}
