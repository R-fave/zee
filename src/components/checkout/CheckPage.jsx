import React from "react";
import { useContext, useEffect, useState } from "react";
import { WebContext } from "../../helper/Context";

const CheckPage = () => {
  const { cart, setState, sum, setSum } = useContext(WebContext);
  return (
    <div class=" bg-gradient-to-b from-[#FFFCFB] to-[#FBCDBD]">
      <div class=" text-2xl font-bold flex justify-center mt-20 mb-5">
        <p>Review Your Item</p>
      </div>

      <hr />
      <div class=" flex mt-8">
        <div class=" flex-1 px-10">
          <p class=" font-bold text-lg">Order Summary</p>

          <div class="gap-2 flex flex-col py-5">
            <div class=" flex justify-between text-sm font-extralight">
              <p>Items</p>
              <p>${sum}</p>
            </div>

            <div class=" flex justify-between text-sm font-extralight">
              <p class="m-0 p-0">
                Discount
                <span class=" text-[#21AF5A] text-[10px] block m-0 p-0">
                  50% off
                </span>
              </p>
              <p>
                ${(sum * 50) / 100}
                <span class=" text-[#21AF5A] text-[10px] block m-0 p-0 text-left">
                  -${sum - (sum * 50) / 100}
                </span>
              </p>
            </div>

            <div class=" flex justify-between text-sm font-extralight mb-1">
              <p>Shipping Fee</p>
              <p>${50.0}</p>
            </div>
          </div>

          <div className=" bg-[#B1EAC8] text-current text-sm flex justify-center w-[70%] mx-auto py-2 ">
            <p>50% off. Auto Applied at checkout.</p>
          </div>

          <div class=" flex justify-between font-bold text-lg px-14 my-5 border border-transparent border-t-black border-b-black py-4">
            <p>Total</p>
            <p>${sum + 50.0}</p>
          </div>

          <div class=" px-9">
            <table class=" flex justify-evenly items-center flex-col text-sm font-bold py-5 border border-transparent border-t-gray-300">
              <tr class="flex justify-end gap-9 text-[10px] border w-full ">
                <th> </th>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
              {cart.map((item) => {
                return (
                  <tr class="flex justify-evenly border border-transparent border-t-gray-300 w-full items-center ">
                    <th>
                      <img
                        src={item.img}
                        alt=""
                        class=" w-[40px] h-[40px] object-cover rounded-lg"
                      />
                    </th>
                    <th class=" text-[10px] font-extralight">
                      {item.name}
                      <span class="block">{item.category}</span>
                    </th>

                    <th class=" text-[10px] font-bold">${item.price}</th>

                    <th class=" text-[10px] font-extralight">1</th>

                    <th class=" text-[10px] font-bold">${item.price}</th>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>

        <div class="flex-1">
          <p>vkhc</p>
        </div>
      </div>
    </div>
  );
};

export default CheckPage;
