"use client";

import Link from "next/link";
import { assignments } from "./assignments";

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full relative">
        {/* Dashed Grid */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e7e5e4 1px, transparent 1px),
              linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 0",
            maskImage: `
              repeating-linear-gradient(
                to right,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              ),
              repeating-linear-gradient(
                to bottom,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              )
            `,
            WebkitMaskImage: `
              repeating-linear-gradient(
                to right,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              ),
              repeating-linear-gradient(
                to bottom,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              )
            `,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />
        {/* Your Content/Components */}
        <div className="mx-auto max-w-screen-xl px-2 md:px-8 lg:px-16 py-16 relative z-1">
          <h1 className="text-3xl font-semibold text-center text-zinc-800">
            Frontend Mentor Assignments
          </h1>
          <ul className="list-decimal pt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
            {assignments.map((assigment, index) => (
              <Link
                key={`${assigment.id}`}
                href={`/assignments/assignment-${index + 1}`}
              >
                <li className="text-base list-inside px-4 py-2 rounded-md cursor-pointer bg-slate-100 hover:bg-slate-200">
                  {`Assignment - ${index + 1}: ${assigment.title}`}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
