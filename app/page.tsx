import ChatroomClient from "./ChatroomClient";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function checkToken() {
  const token = cookies().get("token");

  if (!token) {
    redirect("/login");
  }
}

export default async function Home() {
  await checkToken();
  return <ChatroomClient />;
}
