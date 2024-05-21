"use client";
import clsx from "clsx";
import { useRouter, usePathname } from "next/navigation";
import ProfileCard from "./ProfileCard";
import ManageNotifCard from "./ManageNotifCard";
import Link from "next/link";

const NewPostButton = () => {
  const router = useRouter();
  return (
    <button
      //   href="/community/new-post"
      onClick={() => {
        router.replace("/community/new-post");
      }}
      className=" w-full p-3 text-white bg-interactive-green rounded-lg mt-5"
    >
      New Post
    </button>
  );
};

const NewRecipeButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.replace("/recipe/new-recipe");
      }}
      className=" w-full p-3 text-white bg-interactive-green rounded-lg mt-5"
    >
      Create Recipe
    </button>
  );
};

const LeftLayout = () => {
  const pathname = usePathname();

  return (
    <div
      className={clsx(" max-md:hidden xl:w-[20%] md:w-[25%] h-full mt-[14px]", {
        hidden:
          pathname.startsWith("/events") ||
          pathname.startsWith("/order-meal") ||
          pathname.startsWith("/profile"),
      })}
    >
      {(pathname.startsWith("/community") ||
        pathname.startsWith("/recipes")) && <ProfileCard />}
      {pathname.startsWith("/notifications") && <ManageNotifCard />}
      {pathname.startsWith("/community") && <NewPostButton />}
      {pathname.startsWith("/recipes") && <NewRecipeButton />}
    </div>
  );
};

export default LeftLayout;
