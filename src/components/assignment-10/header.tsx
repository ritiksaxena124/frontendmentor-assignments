import { Button } from "@/components/ui/button";
import { SunIcon } from "../../app/assignments/assignment-10/img/sun-icon";
import { Logo } from "../../app/assignments/assignment-10/img/logo";

const Header = () => {
  return (
    <header className="flex gap-2 justify-between items-center border border-zinc-200 rounded-xl px-4 py-2 shadow-sm">
      <Logo width={120} height={32} fill="#091540" />
      <Button variant={"outline"} className="shadow-sm">
        <SunIcon />
      </Button>
    </header>
  );
};

export default Header;
