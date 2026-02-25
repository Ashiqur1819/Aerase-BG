import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();

  return (
    <div className="flex items-center justify-between mx-4 py-5 lg:mx-60">
      <Link to={"/"}>
        <img className="w-40 md:w-48" src={assets.logo} alt="" />
      </Link>

      {isSignedIn ? (
        <div>
          <UserButton></UserButton>
        </div>
      ) : (
        <button
          onClick={() => openSignIn({})}
          className="bg-zinc-800 flex items-center justify-between gap-4 py-2 px-4 sm:px-8 sm:py-3 cursor-pointer rounded-full text-white hover:bg-zinc-900"
        >
          Get Started{" "}
          <img className="w-3 sm:w-4" src={assets.arrow_icon} alt="" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
