import MarkWebberAvatar from "@/assets/assignment-6/avatar-mark-webber.webp";
import AngelaGrayAvatar from "@/assets/assignment-6/avatar-angela-gray.webp";
import JacobThompsonAvatar from "@/assets/assignment-6/avatar-jacob-thompson.webp";
import RizkyHasanuddinAvatar from "@/assets/assignment-6/avatar-rizky-hasanuddin.webp";
import KimberlySmithAvatar from "@/assets/assignment-6/avatar-kimberly-smith.webp";
import NathanPetersonAvatar from "@/assets/assignment-6/avatar-nathan-peterson.webp";
import AnnaKimAvatar from "@/assets/assignment-6/avatar-anna-kim.webp";
import Picture from "@/assets/assignment-6/image-chess.webp";

export default function Page() {
  return (
    <>
      <div className="w-full min-h-screen px-4 py-8 sm:px-8 lg:py-12 bg-[#F9FAFE]">
        <div className="max-w-screen-md h-full border mx-auto bg-white px-4 lg:px-8 py-10 rounded-xl text-zinc-800">
          {/* Top header */}
          <div className="flex gap-4 items-center justify-between mb-10">
            <div className="flex gap-3 items-center">
              <h1 className="text-2xl font-semibold">Notifications</h1>
              <span className="px-3 py-1 cursor-pointer font-semibold bg-[#0B327F] text-sm text-white rounded-md">
                5
              </span>
            </div>
            <button className="text-lg font-medium text-zinc-500 hover:text-zinc-800">
              Mark all as read
            </button>
          </div>
          {/* Notifications list */}
          <div className="space-y-4">
            <div className="bg-[#F6FAFD] p-4 rounded-md flex gap-4">
              <div className="w-16">
                <img src={MarkWebberAvatar?.src} alt="avatar" width={56} />
              </div>
              <div className="text-zinc-600 w-full">
                <p className="text-lg">
                  <span className="font-semibold mr-2 text-zinc-700">
                    Mark Webber
                  </span>
                  reacted to your recent post
                  <span className="font-semibold text-zinc-500 mx-2">
                    My first tournament today!
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#FF4B46] inline-block"></span>
                </p>
                <p className="te`xt-zinc-500 text-base">1m ago</p>
              </div>
            </div>

            <div className="bg-[#F6FAFD] p-4 rounded-md flex gap-4">
              <div className="w-16">
                <img src={AngelaGrayAvatar?.src} alt="avatar" width={56} />
              </div>
              <div className="text-zinc-600 w-full">
                <p className="text-lg">
                  <span className="font-semibold mr-2 text-zinc-700">
                    Angela Gray
                  </span>
                  folowed you
                  <span className="w-2 h-2 rounded-full bg-[#FF4B46] inline-block ml-2"></span>
                </p>
                <p className="text-zinc-500 text-base">1m ago</p>
              </div>
            </div>

            <div className="bg-[#F6FAFD] p-4 rounded-md flex gap-4">
              <div className="w-16">
                <img src={JacobThompsonAvatar?.src} alt="avatar" width={56} />
              </div>
              <div className="text-zinc-600 w-full">
                <p className="text-lg">
                  <span className="font-semibold mr-2 text-zinc-700">
                    Jacob Thompson
                  </span>
                  has joined your group
                  <a className="font-semibold text-[#0B327F] text- mx-2">
                    Chess Club
                  </a>
                  <span className="w-2 h-2 rounded-full bg-[#FF4B46] inline-block"></span>
                </p>
                <p className="text-zinc-500 text-base">1day ago</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-md flex gap-4">
              <div className="w-16">
                <img src={RizkyHasanuddinAvatar?.src} alt="avatar" width={56} />
              </div>
              <div className="text-zinc-600 w-full">
                <p className="text-lg">
                  <span className="font-semibold mr-2 text-zinc-700">
                    Rizky Hasanuddin
                  </span>
                  sent you a private message
                  {/* <span className="w-2 h-2 rounded-full bg-[#FF4B46] inline-block"></span> */}
                </p>
                <p className="text-zinc-500 text-base">5days ago</p>
                <p className="p-4 outline outline-1 outline-zinc-200 mt-4 rounded-md text-lg">
                  Hello, thanks for setting up the Chess Club. I've been a
                  member for a few weeks now and I'm already having lots of fun
                  and improving my game.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-md flex gap-4">
              <div className="w-16">
                <img src={KimberlySmithAvatar?.src} alt="avatar" width={56} />
              </div>
              <div className="text-zinc-600 w-full flex justify-between space-x-2">
                <div className="w-full">
                  <p className="text-lg">
                    <span className="font-semibold mr-2 text-zinc-700">
                      Kimberly Smith
                    </span>
                    commented on your picture
                    {/* <span className="w-2 h-2 rounded-full bg-[#FF4B46] inline-block"></span> */}
                  </p>

                  <p className="text-zinc-500 text-base">1week ago</p>
                </div>
                <div className="w-16">
                  <img src={Picture?.src} alt="image" width={56} className="w-full object-contain" />
                </div>
              </div>
            </div>

            <div className="bg-[#F6FAFD] p-4 rounded-md flex gap-4">
              <div className="w-16">
                <img src={NathanPetersonAvatar?.src} alt="avatar" width={56} />
              </div>
              <div className="text-zinc-600 w-full">
                <p className="text-lg">
                  <span className="font-semibold mr-2 text-zinc-700">
                    Nathan Peterson
                  </span>
                  reacted to your recent post
                  <span className="font-semibold text-zinc-500 mx-2">
                    5 end-game strategies to increase your win rate
                  </span>
                  {/* <span className="w-2 h-2 rounded-full bg-[#FF4B46] inline-block"></span> */}
                </p>
                <p className="te`xt-zinc-500 text-base">2weeks ago</p>
              </div>
            </div>

            <div className="bg-[#F6FAFD] p-4 rounded-md flex gap-4">
              <div className="w-16">
                <img src={AnnaKimAvatar?.src} alt="avatar" width={56} />
              </div>
              <div className="text-zinc-600 w-full">
                <p className="text-lg">
                  <span className="font-semibold mr-2 text-zinc-700">
                    Anna Kim
                  </span>
                  left the group
                  <a className="font-semibold text-[#0B327F] text- mx-2">
                    Chess Club
                  </a>
                  {/* <span className="w-2 h-2 rounded-full bg-[#FF4B46] inline-block"></span> */}
                </p>
                <p className="text-zinc-500 text-base">1day ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
