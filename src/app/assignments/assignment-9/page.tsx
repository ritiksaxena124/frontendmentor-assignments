import HeroImgDesktop from "@/assets/assignment-9/image-hero-desktop.png";
import HeroImgMobile from "@/assets/assignment-9/image-hero-mobile.png";
import Client1 from "@/assets/assignment-9/client-databiz.svg";
import Client2 from "@/assets/assignment-9/client-audiophile.svg";
import Client3 from "@/assets/assignment-9/client-meet.svg";
import Client4 from "@/assets/assignment-9/client-maker.svg";
import Logo from "@/assets/assignment-9/logo.svg";
import DropDownIcon from "@/assets/assignment-9/icon-arrow-down.svg";

export default function Page() {
  return (
    <>
      <div className="w-full px-4 md:px-8 lg:px-16">
        <div className="w-full">
          {/* navigation bar */}
          {/* <nav className="py-6 flex justify-between items-center gap-8 max-w-7xl mx-auto">
            <div className="">
              <img src={Logo?.src} alt="logo" width={128} height={128} />
            </div>
            <div className="w-full flex gap-5">
              <div className="px-4 py-2 flex items-center gap-2 cursor-pointer text-zinc-600 hover:text-[#151515] font-medium">
                <span>Features</span>
                <span>
                  <img src={DropDownIcon?.src} alt="" />
                </span>
              </div>
              <div className="px-4 py-2 flex items-center gap-2 cursor-pointer text-zinc-600 hover:text-[#151515]">
                <span>Company</span>
                <span>
                  <img src={DropDownIcon?.src} alt="" />
                </span>
              </div>
              <div className="px-4 py-2 cursor-pointer text-zinc-600 hover:text-[#151515]">
                <span>Careers</span>
              </div>
              <div className="px-4 py-2 cursor-pointer text-zinc-600 hover:text-[#151515] font-medium">
                <span>About</span>
              </div>
            </div>
            <div className="flex gap-5">
              <button className="px-4 py-2 text-zinc6500 font-medium hover:text-[#151515]">
                Login
              </button>
              <button className=" border-2 border-zinc-500 text-zinc-600 hover:text-[#151515] hover:border-[#151515] hover:bg-zinc-50 px-4 py-2 rounded-xl font-medium tracking-wide">
                Register
              </button>
            </div>
          </nav> */}
          {/* main container */}
          <main className="w-full max-w-7xl mx-auto py-20 flex flex-col-reverse gap-16 md:gap-0 md:flex-row">
            {/* left section */}
            <section className="w-full flex content-stretch flex-col justify-between gap-20 md:gap-16 px-0 xl:px-24">
              <div className="space-y-6 md:space-y-10 lg:space-y-16 md:py-12 lg:py-16">
                <h1 className="font-bold text-[2.25rem] text-center md:text-left md:text-[3.125rem] lg:text-[4.75rem] xl:text-[6rem] leading-none text-[#151515]">
                  Make remote work
                </h1>
                <p className="text-center md:text-left md:text-base lg:text-xl text-zinc-500 font-medium">
                  Get your team in sync, no matter your location. Streamline
                  processes, create team rituals and watch productivity soar.
                </p>
                <button className="bg-[#151515] border-2 border-[#151515] mx-auto block md:inline-block md:mr-auto hover:bg-slate-50 hover:text-[#151515] px-8 py-4 rounded-2xl text-white font-semibold tracking-wide">
                  Learn more
                </button>
              </div>
              {/* clients logo */}
              <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center md:justify-between items-center w-full">
                <img
                  src={Client1?.src}
                  alt="client1"
                  className="w-24 object-contain"
                />

                <img
                  src={Client2?.src}
                  alt="client2"
                  className="w-24 object-contain"
                />

                <img
                  src={Client3?.src}
                  alt="client3"
                  className="w-24 object-contain"
                />

                <img
                  src={Client4?.src}
                  alt="client4"
                  className="w-24 object-contain"
                />
              </div>
            </section>
            {/* right section */}
            <section>
              <div className="w-full h-full hidden md:block md:pl-16">
                <img
                  src={HeroImgDesktop?.src}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-full h-full block md:hidden">
                <img
                  src={HeroImgMobile?.src}
                  alt="hero-image"
                  className="w-full h-full object-contain"
                />
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
