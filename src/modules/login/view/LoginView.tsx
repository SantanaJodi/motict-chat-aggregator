"use client";
import { EmojiIcon } from "@/public/icons/outline";
import { Button } from "@/src/components";
import { FieldInput } from "@/src/components/atoms/fields";
import { useState } from "react";
import { FormProvider } from "react-hook-form";
import { LoginViewModel } from "../view-model/login-view-model";

export const LoginView: React.FC = () => {
  const { formModule, handleLogin } = LoginViewModel();
  const [visible, setVisible] = useState(false);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className=" w-[400px] p-6 rounded-lg bg-white border border-[#EEF5FF]"
        style={{ boxShadow: "0px 0px 16px 0px rgba(0, 0, 0, 0.16)" }}
      >
        <h1 className="font-bold mb-8 text-center">MOTICT - Chat Agregator</h1>
        <FormProvider {...formModule}>
          <form onSubmit={formModule.handleSubmit(handleLogin)}>
            <div className="flex flex-col gap-6">
              <FieldInput
                name="email"
                placeholder="Masukkan email disini.."
                disableClear
              />
              <FieldInput
                name="password"
                placeholder="Masukkan password disini.."
                type={visible ? "text" : "password"}
                rightElement={
                  <EmojiIcon
                    fill={visible ? "#C02716" : "#0D0F12"}
                    onClick={() => setVisible((prev) => !prev)}
                  />
                }
              />
              <Button
                type="submit"
                label="Login"
                variant="primary"
                color="#323944"
                className="!w-full cursor-pointer"
              />
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};
