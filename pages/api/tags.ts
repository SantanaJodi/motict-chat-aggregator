import { BASEURL } from "@/src/constant/config-api";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const token = req.cookies["token"];

    return await axios
      .get(`${BASEURL}/tags`, {
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
  } else {
    return res.status(403).json({ message: "Forbidden to access." });
  }
}
