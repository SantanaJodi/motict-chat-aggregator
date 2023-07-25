import { BASEURL } from "@/src/constant/config-api";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const conversation_id = req.cookies["token"];
    const token = req.headers.cookie?.substring(6);

    return await axios
      .post(`${BASEURL}/conversations/${conversation_id}/notes`, req.body, {
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
        console.log(status);
        throw res.status(status).json(data);
      });
  } else {
    throw res.status(403).json({ message: "Forbidden to access." });
  }
}
