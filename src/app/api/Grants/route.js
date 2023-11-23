import { NextResponse } from "next/server";
import dbConnect from "../../../../backend/config/dbConnect";
import { Grant } from "../../../../backend/models/grant.model";

export async function GET(){
    await dbConnect();
    const data = await Grant.find();
    return NextResponse.json({msg: "success",result:data});
}

export async function POST(req, res) {
    const payload = await req.json();
    await dbConnect();
    try {
      const newGrant = new Grant(payload);
      const result = await newGrant.save();    
      return NextResponse.json({ msg: "success", result: result, data: newGrant });
    } catch (err) {
      return NextResponse.json({ msg: "failure", error: err.message });
    }
  }