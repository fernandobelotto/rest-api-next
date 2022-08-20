export default function handler(req: NextRequest, res: NextResponse) {
  const { slug } = req.query;

  res.json({ slug });
}