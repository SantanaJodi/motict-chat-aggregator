import { BASEURL } from "@/src/constant/config-api";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

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
        return res.status(status).json(data);
      });
  }

  if (req.method === "POST") {
    const conversation_id = req.query["id"];
    const token = req.cookies["token"];
    const form = new FormData();

    form.append("text", req.body.text);
    form.append("type", req.body.type);
    form.append("file", req.body.file);

    return await axios({
      url: `${BASEURL}/conversations/${conversation_id}/messages`,
      method: "post",
      data: form,
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": `multipart/form-data;`,
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
