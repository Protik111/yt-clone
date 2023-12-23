import { Menu } from "lucide-react";
import logo from "../assets/logo.png";
import Button from "../components/Button";

const PageHeader = () => {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between">
      <div className="flex gap-4 items-center flex-shrink-0">
        <Button>
          <Menu></Menu>
        </Button>
        <a href="/">
          <img className="h-8" src={logo} alt="logo" />
        </a>
      </div>
      <div>Test</div>
      <div>Test</div>
    </div>
  );
};

export default PageHeader;
