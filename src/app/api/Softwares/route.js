import { NextResponse, NextRequest } from "next/server";
import dbConnect from "../../../../backend/config/dbConnect";
import { Software } from "../../../../backend/models/software.model";

export async function GET() {
  await dbConnect();
  const data = await Software.find();
  return NextResponse.json({ msg: "success", result: data });
}

export async function POST(req, res) {
  const payload = await req.json();
  await dbConnect();
  try {
    const newSoftware = new Software(payload);
    const result = await newSoftware.save();    
    return NextResponse.json({ msg: "success", result: result, data: newSoftware });
  } catch (err) {
    return NextResponse.json({ msg: "failure", error: err.message });
  }
}
