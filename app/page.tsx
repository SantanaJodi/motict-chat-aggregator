import { Messages } from "../src/components/organism";
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
  return (
    <div className="w-full h-full flex flex-row">
      <Messages />
    </div>
  );
}
