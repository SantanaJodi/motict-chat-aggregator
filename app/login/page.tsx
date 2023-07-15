import { LoginView } from "@/src/modules/login/view/LoginView";

import { redirect } from "next/navigation";

import { cookies } from "next/headers";

const LoginPage = async () => {
  const token = cookies().get("token");

  if (token) {
    return redirect("/");
  }

  return <LoginView />;
};

export default LoginPage;
