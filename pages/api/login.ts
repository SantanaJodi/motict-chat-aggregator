import { BASEURL } from "@/src/constant/config-api";
import axios from "axios";

export default async function handler(req: Request, res: any) {
  await axios
    .post(`${BASEURL}/login`, req.body)
    .then((r) => {
      const { status, data } = r;
      return res.status(status).json(data);
    })
    .catch((err) => {
      const { status, data } = err.response;
      return res.status(status).json(data);
    });
}
