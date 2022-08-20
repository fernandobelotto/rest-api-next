import { NextApiRequest, NextApiResponse } from "../../../node_modules/next/dist/shared/lib/utils";
import { NextRequest } from "../../../node_modules/next/server";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { slugs } =  req.query
    res.status(200).json({ slugs });
}