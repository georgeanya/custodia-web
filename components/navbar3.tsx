import custodia from "../public/assets/custodia.svg";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Link from "next/link";

const Navbar3 = () => {
  return (
    <div>
      <div className="px-5 md:px-32 py-6 md:py-[27px] shadow-sm">
        <nav>
          <div className="container flex flex-wrap justify-center items-center mx-auto">
            <Link href="/">
             
                <img
                  src={custodia.src}
                  className="mr-3 cursor-pointer self-center"
                  alt="Custodia Logo"
                />
            
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar3;
