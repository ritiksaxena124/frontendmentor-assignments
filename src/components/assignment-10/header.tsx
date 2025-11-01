import { Button } from "@/components/ui/button";
import { SunIcon } from "../../app/assignments/assignment-10/img/sun-icon";
import { Logo } from "../../app/assignments/assignment-10/img/logo";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="flex gap-2 justify-between items-center border border-zinc-200 rounded-xl px-4 py-2 shadow-sm">
      <Logo width={120} height={32} fill={`${theme === "light" ? "#202020" : "#fff"}`} />
      <Button variant={"outline"} className="shadow-sm" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        <SunIcon fill={`${theme === "light" ? "#202020" : "#fff"}`} />
      </Button>
    </header>
  );
};

export default Header;
