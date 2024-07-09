import React from "react";
import { useContext, useEffect, useState } from "react";
import { WebContext } from "../../helper/Context";

const CheckPage = () => {
  const { cart, setState, sum, setSum } = useContext(WebContext);
  return (
    <div class=" bg-gradient-to-b from-[#FFFCFB] to-[#FBCDBD] py-10 max-md:">
      <div class=" text-2xl font-bold flex justify-center mt-20 mb-5 max-sm:mt-0">
        <p>Review Your Item</p>
      </div>

      <hr class=" max-sm:hidden" />
      <div class=" flex mt-8 md:max-lg:flex-col max-sm:flex-col">
        <div class=" flex-1 px-10">
          <div class=" md:max-lg:flex max-sm:flex max-sm:flex-col-reverse">
            <div class=" flex-1">
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

              <div className=" bg-[#B1EAC8] text-current text-sm flex justify-center w-[70%] mx-auto py-2 max-sm:w-[90%] ">
                <p>50% off. Auto Applied at checkout.</p>
              </div>

              <div class=" flex justify-between font-bold text-lg px-14 my-5 border border-transparent border-t-black border-b-black py-4">
                <p>Total</p>
                <p>${sum + 50.0}</p>
              </div>
            </div>
            <div class=" px-9">
              <table class=" flex justify-evenly items-center flex-col text-sm font-bold py-5 border border-transparent border-t-gray-300 max-sm:border-t-transparent">
                <tr class="flex justify-end gap-9 text-[10px] w-full ">
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
        </div>

        <div class="flex-1 flex flex-col gap-3 px-8">
          <div class=" bg-white px-14 py-5 max-sm:hidden">
            <p class=" text-lg font-bold py-3">Shipping Address</p>
            <div class=" flex gap-7 pb-5">
              <div class="flex flex-col flex-1 gap-3 ">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  class="px-4 py-2 border border-transparent border-b-gray-400 "
                />
                <input
                  type="text"
                  placeholder="Enter Your Address"
                  class="px-4 py-2 border border-transparent border-b-gray-400 "
                />
                <select class="px-4 py-2 border border-transparent border-b-gray-400 ">
                  <option class="text-[##D7CECE]">State</option>
                  <option>State 1</option>
                  <option>State 1</option>
                  <option>State 1</option>
                </select>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  class="px-4 py-2 border border-transparent border-b-gray-400 "
                />
              </div>

              <div class="flex flex-col flex-1 gap-3">
                <input
                  type="text"
                  placeholder="Enter Your Last Name"
                  class="px-4 py-2 border border-transparent border-b-gray-400 "
                />
                <select class="px-4 py-2 border border-transparent border-b-gray-400 ">
                  <option>Country</option>
                  <option>State 1</option>
                  <option>State 1</option>
                  <option>State 1</option>
                </select>
                <input
                  type="number"
                  placeholder="Enter Your Postal Code"
                  class="px-4 py-2 border border-transparent border-b-gray-400 "
                />
                <input
                  type="contact"
                  placeholder="Enter Your Phone Number"
                  class="px-4 py-2 border border-transparent border-b-gray-400 "
                />
              </div>
            </div>

            <div class=" flex justify-center">
              <p class=" text-[11px] font-semibold w-[70%]">
                By Signing up, I agree that the company mail email me news and
                offers. I can unsubscribe at any time. I have read the Zee
                Privacy Policy. Offer deails, finanical incentivies avaliable
                here.
              </p>
            </div>
            <div class=" flex justify-center py-2">
              <input type="checkbox" name="" id="agreement" />
              <label htmlFor="agreement" class=" text-[10px] font-medium">
                Use Shipping address as billing address
              </label>
            </div>
          </div>

          <div class=" bg-white px-14 py-2 hidden max-sm:block">
            <p class=" text-lg font-bold py-3">Shipping Address</p>
          </div>

          <div class=" bg-white px-14 py-2">
            <p class=" text-lg font-bold py-3">Delivery</p>
          </div>

          <div class=" bg-white px-14 py-2">
            <p class=" text-lg font-bold py-3">Payment</p>
          </div>
        </div>
      </div>

      <div class=" flex justify-center mt-6">
        <button class=" py-2 px-28 bg-blue-500 text-xl font-bold text-white">
          Order
        </button>
      </div>
    </div>
  );
};

export default CheckPage;
