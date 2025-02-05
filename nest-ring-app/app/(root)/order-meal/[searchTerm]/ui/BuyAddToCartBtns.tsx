"use client";

import { Button } from "@/components/ui/button";
import { DeliveryFoodType } from "../../lib/interface";
import { useContext, useEffect, useState } from "react";
import { OrderMealContext } from "@/app/(root)/ui/OrderMealContext";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/navigation";
import { NextURL } from "next/dist/server/web/next-url";

const BuyAddToCartBtns = ({
  foodObj,
}: Readonly<{ foodObj: DeliveryFoodType }>) => {
  const router = useRouter();
  const { cartItems, updateCartItems, handleOpenCart } =
    useContext(OrderMealContext);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  useEffect(() => {
    const itemFound = cartItems.find((item) => item.slug === foodObj.slug);
    if (itemFound) {
      setIsAddedToCart(true);
    }
  }, [cartItems, foodObj]);

  const handleOrderNow = () => {
    // 1. Add this specific food item to cart
    updateCartItems([...cartItems, foodObj]);
    // 2. reroute user to the checkout tab
    router.push("/order-meal/checkout");
  };

  return (
    <section className=" w-full flex flex-row gap-5">
      <Button
        onClick={() => {
          updateCartItems([...cartItems, foodObj]);
          toast({
            title: "Cart",
            description: `${foodObj.name} has been added to cart`,
            action: (
              <ToastAction
                altText="checkout"
                onClick={() => {
                  handleOpenCart();
                  router.back();
                }}
                className="bg-interactive-green hover:bg-interactive-green hover:bg-opacity-80 text-white"
              >
                Checkout Cart
              </ToastAction>
            ),
            duration: 5000,
          });
        }}
        disabled={isAddedToCart}
        className={` border-2 border-interactive-green text-interactive-green bg-transparent hover:bg-transparent hover:scale-105 transition-transform duration-700 `}
      >
        {isAddedToCart ? "Added to cart" : "Add To Cart"}
      </Button>
      <Button
        onClick={handleOrderNow}
        className={` bg-interactive-green hover:bg-interactive-green text-white hover:scale-105`}
      >
        Order Now
      </Button>
    </section>
  );
};

export default BuyAddToCartBtns;
