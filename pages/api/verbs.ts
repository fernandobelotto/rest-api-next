import {
  NextApiRequest,
  NextApiResponse,
} from "../../node_modules/next/dist/shared/lib/utils";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method === "GET") {
    return res.status(200).json({ hello: "world!" });
  }
  if (method === "POST") {
    res.status(200).json({ message: "post!!" });
  }
  if (method === "PATCH") {
    res.status(200).json({ message: "patch!!" });
  }
  if (method === "DELETE") {
    res.status(200).json({ message: "delete!!" });
  }
  if (method === "PUT") {
    res.status(200).json({ message: "put!!" });
  }

  res.status(404).json({ message: "not found" });
}
