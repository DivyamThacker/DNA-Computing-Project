import { NextResponse } from "next/server";
import dbConnect from "../../../../backend/config/dbConnect";
import { Patent } from "../../../../backend/models/patent.model";

export async function GET(){
    await dbConnect();
    const data = await Patent.find();
    return NextResponse.json({msg: "success",result:data});
}

export async function POST(req, res) {
    const payload = await req.json();
    await dbConnect();
    try {
      const newPatent = new Patent(payload);
      const result = await newPatent.save();    
      return NextResponse.json({ msg: "success", result: result, data: newPatent });
    } catch (err) {
      return NextResponse.json({ msg: "failure", error: err.message });
    }
  }