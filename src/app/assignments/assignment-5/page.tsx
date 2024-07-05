import Web3ImageDesktop from "@/assets/assignment-5/image-web-3-desktop.jpg";
import RetroPCIMG from "@/assets/assignment-5/image-retro-pcs.jpg";
import GamingGrowthIMG from "@/assets/assignment-5/image-gaming-growth.jpg";
import TopLaptopsIMG from "@/assets/assignment-5/image-top-laptops.jpg";
import Navbar from "@/components/assignment-5/Navbar";

export default function Page() {
  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center px-4 py-8 sm:px-8 lg:py-12">
        <div className="max-w-screen-xl mx-auto space-y-8 pb-20">
          {/* Navbar */}
          <Navbar />
          {/* content */}
          <div className="space-y-16 lg:space-y-24">
            <div className="flex flex-col w-full lg:flex-row gap-16 lg:gap-8 h-fit">
              {/* left section */}
              <div className="w-full lg:w-5/6">
                <div>
                  <img src={Web3ImageDesktop?.src} alt="" />
                </div>
                <div className="flex flex-col lg:flex-row gap-4 pt-8 justify-between">
                  {/* column 1 */}
                  <div className="basis-1/3">
                    <h1 className="text-[2.75rem] lg:text-[3.25rem] leading-tight font-extrabold text-slate-900">
                      The Bright Future of Web 3.0?
                    </h1>
                  </div>
                  {/* cloumn 2 */}
                  <div className="relative basis-2/3 flex flex-col justify-between lg:pl-6">
                    <p className="text-xl leading-relaxed text-slate-600">
                      We dive into the next evolution of the web that claims to
                      put the power of the platforms back into the hands of the
                      eople, But is it really fulfilling its promise?
                    </p>
                    <button className="bg-[#F15D52] cursor-pointer font-semibold px-8 py-3 uppercase tracking-wider hover:bg-slate-900 hover:text-white mt-5 w-fit">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
              {/* right section */}
              <div className="w-full lg:w-2/5 bg-slate-900 px-6 py-8">
                <h2 className="text-[#ECA856] text-[2.5rem] leading-none font-semibold">
                  New
                </h2>
                <div className="py-8 space-y-2 border-b border-slate-600">
                  <h3 className="text-white text-xl font-semibold">
                    Hydrogen VS Electric Cars
                  </h3>
                  <p className="text-slate-400">
                    Will hydrogen-fueled cars ever catch up to EVs?
                  </p>
                </div>
                <div className="py-8 space-y-2 border-b border-slate-600">
                  <h3 className="text-white text-xl font-semibold">
                    The Downsides of AI Artistry
                  </h3>
                  <p className="text-slate-400">
                    What are the possible adverse effects of on-demand AI image
                    generation?
                  </p>
                </div>
                <div className="py-8 space-y-2">
                  <h3 className="text-white text-xl font-semibold">
                    Is VC Funding Drying Up?
                  </h3>
                  <p className="text-slate-400">
                    Private funding by VC firms is down 50% YOY. We take a look
                    at what that means.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full lg:flex-row gap-4">
              <div className="flex gap-4 items-center justify-between">
                <div className="h-full w-1/3">
                  <img
                    src={RetroPCIMG?.src}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1 lg:space-y-2 w-2/3">
                  <h3 className="text-3xl font-semibold text-[#F15D52]">01</h3>
                  <h4 className="font-semibold text-zinc-900 text-xl hover:text-[#F15D52] cursor-pointer">
                    Reviving Retro PCs
                  </h4>
                  <p className="text-zinc-500 text-lg">
                    What happens when old PCs are given modern upgrades?
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-center justify-between">
                <div className="h-full w-1/3">
                  <img
                    src={TopLaptopsIMG?.src}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1 lg:space-y-2 w-2/3">
                  <h3 className="text-3xl font-semibold text-[#F15D52]">02</h3>
                  <h4 className="font-semibold text-zinc-900 text-xl hover:text-[#F15D52] cursor-pointer">
                    Top 10 Laptops of 2022
                  </h4>
                  <p className="text-zinc-500 text-lg">
                    Our best picks for various needs and budgets.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-center justify-between">
                <div className="h-full w-1/3">
                  <img
                    src={GamingGrowthIMG?.src}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1 lg:space-y-2 w-2/3">
                  <h3 className="text-3xl font-semibold text-[#F15D52]">03</h3>
                  <h4 className="font-semibold text-zinc-900 text-xl hover:text-[#F15D52] cursor-pointer">
                    The Growth of Gaming
                  </h4>
                  <p className="text-zinc-500 text-lg">
                    How the pandemic has sparked fresh opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
