import { star, heart } from "../../assets/img";
import { useContext, useEffect } from "react";
import { WebContext } from "../../helper/Context";
import { product } from "../../assets/data";

const ProductCard = ({ name, img, cat, price, handleC, index }) => {
  const { cart, setCart } = useContext(WebContext);
  //   console.log(cart);

  const handelCart = (i) => {
    setCart([...cart, product[i]]);
  };

  return (
    <div class="rounded-xl flex flex-col gap-2 pb-3">
      <img
        src={img}
        alt="product image"
        class=" w-[250px] h-[200px] object-cover rounded-tr-xl rounded-tl-xl md:max-lg:w-[200px] md:max-lg:h-[150px] max-sm:w-[150px] max-sm:h-[100px]"
      />
      <div class=" px-2">
        <p class=" font-bold text-gray-700">{name}</p>
        <p class=" font-light text-slate-400">{cat}</p>
        <p class=" text-blue-500 font-semibold">${price}</p>
      </div>
      <div class=" flex justify-between px-2">
        <img src={star} alt="rating" /> <img src={heart} alt="like emoji" />
      </div>
      <button
        class=" text-orange-600 font-medium bg-[#FFFCFB] py-1 px-6 block max-sm:text-[13px] max-sm:px-2 mx-auto rounded-md hover:bg-red-400 hover:text-white my-3 transition delay-75 duration-200"
        onClick={() => {
          handelCart(index);
        }}
      >
        + Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
