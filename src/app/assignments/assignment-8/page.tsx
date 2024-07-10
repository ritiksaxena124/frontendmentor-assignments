import Logo from "@/assets/assignment-8/logo.svg";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="bg-[#F7E9DC] w-full min-h-screen flex items-center justify-center py-8 px-4 sm:px-8">
        <div className="w-full max-w-xl space-y-10">
          {/* Header */}
          <div className="bg-[#EC755D] rounded-3xl px-8 py-6 w-full flex justify-between">
            <div className="space-y-2">
              <p className="text-slate-100 font-medium">My balance</p>
              <h2 className="text-3xl font-bold text-white">$921.48</h2>
            </div>
            <Image src={Logo?.src} alt="logo" width={64} height={64} />
          </div>
          {/* contents */}
          <div className="w-full bg-[#FFFCF7] rounded-3xl p-8">
            <h2 className="text-3xl text-[#392315] font-bold">
              Spending - Last 7 days
            </h2>
            <div className="w-full h-64">

            </div>
            <div className="w-full flex items-end justify-between  mb-6">
              <div className=" space-y-2">
                <p className="text-[#989189] font-medium">My balance</p>
                <h2 className="text-[2.75rem] font-bold text-[#392315] leading-none">$921.48</h2>
              </div>
              <div className="space-y-2">
                <p className="text-[#392315] font-semibold">+24%</p>
                <p className="font-medium text-[#989189] leading-none">from last month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
