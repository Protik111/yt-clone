import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import logo from "../assets/logo.png";
import Button from "../components/Button";
import { useState } from "react";

const PageHeader = () => {
  const [showFullWidth, setShowFullWidth] = useState(false);
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div
        className={`gap-4 items-center flex-shrink-0 ${
          showFullWidth ? "hidden" : "flex"
        }`}
      >
        <Button variant="ghost" size="icon">
          <Menu></Menu>
        </Button>
        <a href="/">
          <img className="h-8" src={logo} alt="logo" />
        </a>
      </div>

      <form
        className={`flex-grow gap-4 justify-center ${
          showFullWidth ? "flex" : "hidden md:flex"
        }`}
      >
        {showFullWidth && (
          <Button
            onClick={() => setShowFullWidth(false)}
            type="button"
            size="icon"
            variant="ghost"
            className="flex-shrink-0"
          >
            <ArrowLeft />
          </Button>
        )}

        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary px-4 py-1 w-full focus:border-blue-500 outline-none"
          />
          <Button className="rounded-r-full border-secondary-border border border-l-0 px-4 py-1 flex-shrink-0">
            <Search></Search>
          </Button>
        </div>
        <Button type="button" size="icon" className="flex-shrink-0">
          <Mic></Mic>
        </Button>
      </form>
      <div
        className={`flex-shrink-0 md:gap-2 ${
          showFullWidth ? "hidden" : "flex"
        }`}
      >
        <Button
          onClick={() => setShowFullWidth(true)}
          size="icon"
          variant="ghost"
          className="md:hidden"
        >
          <Search />
        </Button>

        <Button size="icon" variant="ghost" className="md:hidden">
          <Mic />
        </Button>

        <Button size="icon" variant="ghost">
          <Upload />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell />
        </Button>
        <Button size="icon" variant="ghost">
          <User />
        </Button>
      </div>
    </div>
  );
};

export default PageHeader;
