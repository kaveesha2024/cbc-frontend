import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router";
import { MdSpaceDashboard } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-primary shadow-lg rounded-b-2xl">
      <div className="max-w-7xl mx-auto px-1 h-[120px] flex items-center justify-between">
        <Link
          to="/"
          className="text-accent text-3xl font-extrabold tracking-tight flex justify-center items-center hover:text-pink-600 transition-colors duration-200"
        >
          <span>
            <img src="/logo.png" alt="" className="w-20 h-20" />
          </span>
        </Link>
        <div className="flex items-end transition flex-col duration-300 gap-5">
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold">Customer Service 074-085 9676</span>
            <input
              type="text"
              className="bg-white text-secondary outline-none py-1 px-2 rounded-sm border-2 border-accent"
              placeholder="search"
            />
            <span className="cursor-pointer  transition duration-200"><AiOutlineSearch /></span>
          </div>
          <div className="flex items-center gap-8">
            <Link
              to="/cart"
              className="flex items-center hover:text-accent gap-1 p-2 transition font-semibold cursor-pointer"
            >
              <span className="  bg-accent text-primary rounded-full w-5 h-5 flex items-center justify-center !text-[10px]  p-2">
                1
              </span>
              <span>Cart</span>
              <HiShoppingCart className="text-xl " />
            </Link>
            <Link className="flex gap-1 items-center hover:text-accent transition  font-semibold cursor-pointer p-2">
              <span className="  bg-accent text-primary rounded-full w-5 h-5 flex items-center justify-center !text-[10px]  p-2">1</span>
              Whish List
              <span>
                <FaHeart />
              </span>
            </Link>
            {localStorage.getItem("token") ? (
              <div>
                {localStorage.getItem("isAdmin") === "true" ? (
                  <Link
                    className="flex items-center gap-1  transition hover:text-accent font-semibold cursor-pointer p-2"
                    to="/dashboard"
                  >
                    Dashboard
                    <span>
                      <MdSpaceDashboard className="text-xl" />
                    </span>
                  </Link>
                ) : (
                  localStorage.getItem("email")
                )}
              </div>
            ) : (
              <Link
                to="/authentication/signin"
                className="font-semibold hover:underline cursor-pointer"
              >
                <span className="flex justify-center items-center  gap-2">Sign In or Create Acount <span><FaUserAlt /></span></span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
