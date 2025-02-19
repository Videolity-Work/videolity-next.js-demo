import Link from "next/link";
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import Navlinks from "./Navlinks";
import { themeChange } from "theme-change";
import { useEffect, useState } from "react";
import MoonIcon from "@heroicons/react/24/outline/MoonIcon";
import SunIcon from "@heroicons/react/24/outline/SunIcon";

function Navbar() {
  const [currentTheme, setCurrentTheme] = useState(null);

  useEffect(() => {
    themeChange(false);
    console.log(currentTheme);
    if (currentTheme === null) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setCurrentTheme("dark");
      } else {
        setCurrentTheme("light");
      }
    }
  }, []);

  return (
    <div className="w-full flex justify-center  shadow-md  text-primary-content bg-primary">
      <div className="navbar  max-w-5xl">
        <div className="flex-none lg:hidden">
          <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
            <Bars3Icon className="h-5 inline-block w-5" />
          </label>
        </div>

        <div className="flex-1 px-2 mx-2">
          <Link href="/">
            <span className="font-bold text-xl">
              <img
                className="mask inline-block mr-2 mask-circle w-10"
                src="/android-chrome-192x192.png"
              />{" "}
              Landing Page
            </span>
          </Link>
        </div>
        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal">
            <Navlinks />
          </ul>

          <label className="swap ">
            <input type="checkbox" />
            <SunIcon
              data-set-theme="light"
              data-act-class="ACTIVECLASS"
              className={
                "fill-current w-5 h-5 " +
                (currentTheme === "dark" ? "swap-on" : "swap-off")
              }
            />
            <MoonIcon
              data-set-theme="dark"
              data-act-class="ACTIVECLASS"
              className={
                "fill-current w-5 h-5 " +
                (currentTheme === "light" ? "swap-on" : "swap-off")
              }
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
