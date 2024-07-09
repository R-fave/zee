import { arrowL, arrowR, bag2, ham } from "../assets/img";
import { useContext } from "react";
import { WebContext } from "../helper/Context";
import { bag, logo, love, search, social, sort } from "../assets/img";

const Nav = () => {
  const { cart, state, setState } = useContext(WebContext);
  const handleCart = () => {
    setState("Cart");
  };
  return (
    <div>
      <div class=" bg-black py-10 justify-between items-center px-4 hidden max-sm:flex ">
        <img src={ham} alt="" class=" w-7 h-7" />
        <img
          src={logo}
          alt="store's Logo"
          class="w-28"
          onClick={() => {
            setState("Shop");
          }}
        />
        <div class=" relative mt-[-19px]">
          <div class=" bg-red-500 text-white rounded-full flex justify-center items-center text-[9px] py-1 relative top-3 left-3  ">
            <p>{cart.length}</p>
          </div>

          <img
            src={bag2}
            alt="shopping bag icon"
            class=" w-6 h-6"
            onClick={handleCart}
          />
        </div>
      </div>
      <div class=" bg-[#171717] text-white px-12 py-5 md:max-lg:px-3 max-sm:hidden">
        <div class=" flex gap-12 ">
          <div class=" flex flex-1 justify-end pr-[13rem] gap-20 text-sm items-center font-extralight md:max-lg:pr-[0] md:max-lg:pl-[2rem]">
            <img src={arrowL} alt="" />
            <p>Get 50% off for new members</p>
            <img src={arrowR} alt="" />
          </div>
          <div class=" flex gap-5 text-sm items-center font-extralight md:max-lg:gap-2">
            <button class=" border border-blue-400 py-2 px-5 hover:bg-blue-400 hover:text-black transition delay-75 duration-500 md:max-lg:px-3">
              Sign In{" "}
            </button>
            <button class=" border border-blue-400 py-2 px-5 hover:bg-blue-400 hover:text-black transition delay-75 duration-500 md:max-lg:px-3">
              Find stores
            </button>
          </div>
        </div>
      </div>

      <div class=" flex justify-between pt-5 px-28 md:max-lg:px-10 max-sm:hidden ">
        <div class=" flex items-center gap-16 text-sm font-extralight md:max-lg:gap-5">
          <img
            src={logo}
            alt="store's Logo"
            class="w-28"
            onClick={() => {
              setState("Shop");
            }}
          />
          <div>
            <p>MEN | WOMEN | CHILDREN</p>
          </div>
        </div>

        <div class=" flex gap-10 ">
          <div class=" flex justify-center items-center">
            <div class="bg-blue-500 p-1 px-3 flex justify-center items-center h-12">
              <img src={search} alt="search icon" width={"20px"} />
            </div>
            <input
              type="text"
              placeholder="What are you looking for"
              class=" border border-black h-12 px-5 border-l-transparent"
            />
          </div>
          <div class=" flex justify-center items-center gap-5">
            <div class=" relative mt-[-19px]">
              <div class=" bg-red-500 text-white rounded-full flex justify-center items-center text-[9px] py-1 relative top-3 left-3  ">
                <p>{cart.length}</p>
              </div>

              <img
                src={bag}
                alt="shopping bag icon"
                class=" w-6 h-6"
                onClick={handleCart}
              />
            </div>

            <img src={love} alt="heart icon" class=" w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
