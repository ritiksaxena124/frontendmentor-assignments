import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-2 md:px-8 lg:px-16 py-16">
        <h1 className="text-3xl font-semibold text-center text-zinc-800">
          Frontend Mentor Assignments
        </h1>
        <ul className="list-decimal pt-16 flex flex-col gap-4">
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
          <Link href="/assignments/assignment-4">
            <li className="text-2xl px-4 py-2 rounded-md cursor-pointer bg-slate-100 hover:bg-slate-200">
              Assignment - 4: Age Calculator App
            </li>
          </Link>
          <Link href="/assignments/assignment-5">
            <li className="text-2xl px-4 py-2 rounded-md cursor-pointer bg-slate-100 hover:bg-slate-200">
              Assignment - 5: News Homepage
            </li>
          </Link>
          <Link href="/assignments/assignment-6">
            <li className="text-2xl px-4 py-2 rounded-md cursor-pointer bg-slate-100 hover:bg-slate-200">
              Assignment - 6: Notifications page
            </li>
          </Link>
          <Link href="/assignments/assignment-7">
            <li className="text-2xl px-4 py-2 rounded-md cursor-pointer bg-slate-100 hover:bg-slate-200">
              Assignment - 7: Interactive card details form
            </li>
          </Link>
          <Link href="/assignments/assignment-8">
            <li className="text-2xl px-4 py-2 rounded-md cursor-pointer bg-slate-100 hover:bg-slate-200">
              Assignment - 8: Expenses chart component
            </li>
          </Link>
          <Link href="/assignments/assignment-9">
            <li className="text-2xl px-4 py-2 rounded-md cursor-pointer bg-slate-100 hover:bg-slate-200">
              Assignment - 9: Intro section with dropdown navigation
            </li>
          </Link>
          <Link href="/assignments/assignment-10">
            <li className="text-2xl px-4 py-2 rounded-md cursor-pointer bg-slate-100 hover:bg-slate-200">
              Assignment - 10
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}
