import { BASEURL } from "@/src/constant/config-api";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const conversation_id = req.query["id"];
    const token = req.cookies["token"];
    return await axios
      .get(`${BASEURL}/conversations/${conversation_id}/messages`, {
        params: req.query,
        headers: {
          Authorization: token,
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
  }

  if (req.method === "POST") {
    const conversation_id = req.query["id"];
    const token = req.cookies["token"];

    return await axios
      .post(`${BASEURL}/conversations/${conversation_id}/messages`, req, {
        headers: {
          "Content-Type": req.headers["content-type"],
          Authorization: token,
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
  }
  return res.status(407).json({ message: "Forbidden to access." });
}
