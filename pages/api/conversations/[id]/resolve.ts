import { BASEURL } from "@/src/constant/config-api";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const conversation_id = req.query["id"];
    const token = req.cookies["token"];

    return await axios
      .post(`${BASEURL}/conversations/${conversation_id}/resolve`, req.body, {
        params: req.query,
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((r) => {
        const { status, data } = r;

        return res.status(status).json(data);
      })
      .catch((err) => {
        const { status, data } = err.response;

        return res.status(status).json(data);
      });
  } else {
    return res.status(407).json({ message: "Forbidden to access." });
  }
}
