import { NextResponse, NextRequest } from "next/server";
import dbConnect from "../../../../backend/config/dbConnect";
import { Youtube } from "../../../../backend/models/youtubeContent.model";

export async function GET() {
  await dbConnect();
  const data = await Youtube.find();
  return NextResponse.json({ msg: "success", result: data });
}

export async function POST(req, res) {
  const payload = await req.json();
  await dbConnect();
  try {
    const newYoutube = new Youtube(payload);
    const result = await newYoutube.save();    
    return NextResponse.json({ msg: "success", result: result, data: newYoutube });
  } catch (err) {
    return NextResponse.json({ msg: "failure", error: err.message });
  }
}
