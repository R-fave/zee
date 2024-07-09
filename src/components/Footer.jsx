import React from "react";
import { bag, logo, love, search, social, sort } from "../assets/img";

const Footer = () => {
  return (
    <div class=" bg-[#171717] text-white px-28 py-14 max-sm:px-5">
      <div class=" flex flex-col justify-center items-center gap-5 mb-14">
        <p class=" font-bold text-2xl max-sm:text-lg">JOIN OUR EMAIL LIST</p>
        <p class=" text-sm font-extralight">
          Receive products news and updates in your inbox
        </p>
        <input
          type="text"
          placeholder="Enter your email address"
          class=" w-[400px] py-2 px-2 max-sm:w-[250px]"
        />
        <div class=" flex justify-start items-start gap-3">
          <input type="checkbox" name="check" id="check" class="text-black" />
          <label htmlFor="check">
            <p class=" max-w-[320px] text-center text-[11px] font-extralight ">
              I acknowledge i have read and understood Privacy Policy and i
              consent to the process ing of my personal data for marketing and
              profiling purposes
            </p>
          </label>
        </div>
        <button class=" bg-white py-1 px-6 text-blue-500 text-sm hover:bg-blue-500 hover:text-white">
          SIGN UP
        </button>
      </div>
      <hr />
      <div class=" flex justify-evenly mt-20 text-[12px] font-extralight max-sm:hidden">
        <div class="flex flex-col gap-4 ">
          <p class=" text-lg font-bold">SHOP</p>
          <p>Men</p>
          <p>Women</p>
          <p>Kids</p>
          <p>Accessories</p>
          <p>Discounts & Promotions</p>
        </div>

        <div class="flex flex-col gap-4 ">
          <p class=" text-lg font-bold">SUPPORT</p>
          <p>Order Status</p>
          <p>Returns</p>
          <p>Track Order</p>
          <p>Unsubscribe</p>
          <p>Contact Us</p>
        </div>

        <div class="flex flex-col gap-4 ">
          <p class=" text-lg font-bold">MY ACCOUNT</p>
          <p>Sign In</p>
          <p>Contact Us</p>
          <p>Track Order</p>
          <p>Subscribe/Unsubscribe</p>
          <p>Discounts & Promotions</p>
        </div>

        <div class="flex flex-col gap-4 ">
          <p class=" text-lg font-bold">COMPANY</p>
          <p>About Us</p>
          <p>Our Values</p>
          <p>Affiliate Program</p>
          <p>Careers</p>
        </div>
      </div>

      <div class=" flex justify-between mt-14 max-sm:flex-col max-sm:gap-2">
        <div class=" flex gap-5 text-sm font-extralight max-sm:flex-col">
          <button class=" border border-[#FF9F3D] px-3 py-1 text-[#FF9F3D] max-sm:inline max-sm:w-[130px] max-sm:text-[11px]">
            Cookie Preference
          </button>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>{new Date().getFullYear()} Zee</p>
        </div>
        <img
          src={social}
          alt="Social Media"
          class=" h-[20px] max-sm:w-[100px]"
        />
      </div>
    </div>
  );
};

export default Footer;
