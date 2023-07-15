"use client";
import { FormProvider } from "react-hook-form";
import { LoginViewModel } from "../view-model/login-view-model";

export const LoginView: React.FC = () => {
  const { formModule, handleLogin } = LoginViewModel();

  const { register } = formModule;
  return (
    <>
      <FormProvider {...formModule}>
        <form onSubmit={formModule.handleSubmit(handleLogin)}>
          <label>USERNAME</label>
          <br />
          <input type="text" {...register("email")} />
          <br />

          <label>PASSWORD</label>
          <br />
          <input type="password" {...register("password")} />
          <br />

          <button type="submit">Login</button>
        </form>
      </FormProvider>
    </>
  );
};
