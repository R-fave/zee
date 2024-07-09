import React from "react";
import { bag, logo, love, search, social, sort } from "../../assets/img";
import { product } from "../../assets/data";
import ProductCard from "./ProductCard";
import { useContext } from "react";
import { WebContext } from "../../helper/Context";
import Footer from "../Footer";

const GeneralShop = () => {
  const { cart, setCart, state, setState } = useContext(WebContext);

  return (
    <div class=" bg-gradient-to-b from-[#FFFCFB] to-[#FBCDBD]">
      <div class=" my-6 px-28">
        <p>
          Home /<span class=" font-bold"> Shop</span>
        </p>
      </div>

      <div class=" px-28">
        <div class=" flex border border-black w-[15rem] px-2 py-1 justify-center items-center font-bold">
          <div class=" flex gap-3">
            <img src={sort} alt="" />
            <p>Sort</p>
            <p>
              | <span class="ml-2">Recomended</span>
            </p>
          </div>
          <label htmlFor="sort"></label>
          <select name="sort" id="sort" class="w-5">
            <option></option>
            <option value="">hap</option>
            <option value="">hap</option>
            <option value="">hap</option>
            <option value="">hap</option>
          </select>
        </div>
      </div>

      <div class=" justify-center flex items-center mt-10">
        <p class=" bg-blue-500 inline-block px-2 py-1 rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl text-white text-2xl font-extrabold">
          New Arrival
        </p>
      </div>

      <div class=" bg-bg-desk bg-cover text-white text-center flex justify-end items-center gap-5 flex-col h-[600px] mt-10">
        <p class=" text-3xl font-extrabold text-center">
          GET 50% OFF YOUR FIRST ORDER <br /> WHEN YOU ORDER MORE THAN SEVEN
          ITEMS
        </p>
        <p class="font-bold">
          Save from the comfort of your home, any day, <br />
          everywhere. Online only. Prices are marked.
        </p>

        <button class=" border bg-white text-black px-5 py-2 font-bold mb-24">
          SHOP NOW
        </button>
      </div>

      <div class=" flex flex-wrap gap-x-48 gap-y-14 justify-center my-20 px-24">
        {product.map((pro, index) => {
          return (
            <ProductCard
              name={pro.name}
              cat={pro.category}
              price={pro.price}
              img={pro.img}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GeneralShop;
