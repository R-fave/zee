import { useContext, useEffect, useState } from "react";
import { WebContext } from "../../helper/Context";

const Cartt = () => {
  const { cart, setState, sum, setSum } = useContext(WebContext);

  useEffect(() => {
    let sum = cart.reduce((a, v) => (a = a + v.price), 0);
    setSum(sum);
    console.log(sum);
  }, []);

  return (
    <div class=" px-28 bg-gradient-to-b from-[#FFFCFB] to-[#FBCDBD]">
      <div class=" mt-16 flex justify-evenly text-2xl font-bold mb-7">
        <div>
          <p>Cart</p>
        </div>
        <div>
          <p>{cart.length} Items</p>
        </div>
      </div>

      <hr />

      <div class=" mt-12 flex ">
        <div class=" flex flex-col gap-6 flex-1">
          {cart.map((items) => {
            return (
              <div class=" flex gap-6">
                <img
                  src={items.img}
                  alt=""
                  class=" w-[200px] h-[150px] object-cover rounded-lg"
                />
                <div>
                  <p class=" font-bold text-gray-700">{items.name}</p>
                  <p class=" font-light text-slate-400">{items.category}</p>
                  <p class=" text-blue-500 font-semibold">$ {items.price}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div class=" flex-1 px-10 border border-transparent border-l-black mb-10 ">
          <div class="flex flex-col gap-5">
            <p class=" text-xl font-bold ">Payment Summary</p>

            <div class=" flex justify-between">
              <p class="text-sm font-bold">Promotions</p>
              <p class=" text-sm font-extralight underline">Promo Details</p>
            </div>
            <div className=" bg-[#B1EAC8] text-current text-sm flex justify-center w-[70%] mx-auto py-2 ">
              <p>50% off. Auto Applied at checkout.</p>
            </div>
          </div>

          <div class=" flex flex-col gap-3 mt-10">
            <div class=" flex justify-between text-sm font-extralight mb-1">
              <p>Type in your Promo code</p>
              <p>Apply</p>
            </div>

            <div class=" border border-transparent border-t-black border-b-black gap-2 flex flex-col py-5">
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

            <div class=" flex justify-between text-sm font-extralight mb-1 px-20">
              <p>Estimated Tax</p>
              <p>Calculated in checkout</p>
            </div>
          </div>

          <div class=" flex justify-between font-bold text-lg px-14 my-5">
            <p>Total</p>
            <p>${sum + 50.0}</p>
          </div>

          <div class=" flex justify-center">
            {cart.length >= 1 && (
              <button
                class=" bg-blue-500 text-white font-bold text-md py-2 px-8"
                onClick={() => {
                  setState("Pay");
                }}
              >
                CHECKOUT
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartt;
