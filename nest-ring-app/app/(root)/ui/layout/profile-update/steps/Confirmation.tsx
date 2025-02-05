import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { ProfileUpdateContext } from "../ProfileUpdateContext";
import { Input } from "@/components/ui/input";
import {
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

const Confirmation = () => {
  const {
    isUploading,
    password,
    updatePassword,
    activeStep,
    updateActiveStep,
    uploadData,
  } = useContext(ProfileUpdateContext);

  return (
    <section className="w-full">
      <form className="w-full space-y-3">
        <DialogHeader>
          <DialogDescription>
            To complete your Profile Update, please confirm it&apos;s you. Thank
            you.
          </DialogDescription>
        </DialogHeader>
        <div className=" flex flex-col gap-2">
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
          >
            Password
          </label>
          <Input
            disabled={isUploading}
            placeholder="Enter Password"
            name="password"
            value={password}
            type="password"
            className="text-xs"
            onChange={(e) => {
              const value = e.currentTarget.value;
              updatePassword(value);
            }}
          />
        </div>

        {/* Tab navigation buttons */}
        <div className=" flex flex-row gap-2 pt-5">
          <Button
            disabled={isUploading}
            type="button"
            onClick={() => {
              updateActiveStep(activeStep - 1);
            }}
            className=" border-2 border-interactive-green bg-transparent hover:bg-transparent text-interactive-green hover:scale-95"
          >
            Back
          </Button>
          <Button
            disabled={isUploading}
            type="button"
            onClick={uploadData}
            className=" bg-interactive-green hover:bg-interactive-green hover:scale-110"
          >
            {isUploading ? (
              <Image
                src={"/random-images/dots-loader.svg"}
                alt=""
                width={20}
                height={20}
              />
            ) : (
              <span>Complete</span>
            )}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Confirmation;
