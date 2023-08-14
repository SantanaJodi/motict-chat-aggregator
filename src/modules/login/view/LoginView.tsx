"use client";
import { BrandLogoType } from "@/public/icons/logo";
import { Button } from "@/src/components";
import { FieldInput, FieldInputPassword } from "@/src/components/atoms/fields";
import Image from "next/image";
import { FormProvider } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { LoginViewModel } from "../view-model/login-view-model";

export const LoginView: React.FC = () => {
  const { formModule, isLoading, handleLogin } = LoginViewModel();

  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <Image
        fill
        src="/images/svg/big-logo.svg"
        alt="background image"
        className="absolute top-0 !-left-80"
      />
      <div className="w-[400px] p-6 rounded-lg bg-white border border-[#EEF5FF] z-10">
        <FormProvider {...formModule}>
          <form onSubmit={formModule.handleSubmit(handleLogin)}>
            <div className="flex flex-col gap-10">
              <BrandLogoType />
              <div className="flex flex-col gap-6">
                <FieldInput
                  name="email"
                  label="Email"
                  placeholder="Masukkan email disini.."
                  disableClear
                />
                <FieldInputPassword
                  label="Password"
                  name="password"
                  placeholder="Masukkan password disini.."
                />
              </div>
              {isLoading ? (
                <div className="flex gap-2 items-center justify-center">
                  <ClipLoader color="#C02716" size={20} />
                  <p className="text-[#8B9EB7] text-center">Logging In</p>
                </div>
              ) : (
                <Button
                  type="submit"
                  label="Login"
                  variant="primary"
                  color="#323944"
                  className="!w-full cursor-pointer"
                />
              )}
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};
