import { NextResponse } from "next/server";
import dbConnect from "../../../../backend/config/dbConnect";
import { Event } from "../../../../backend/models/event.model";

export async function GET(){
    await dbConnect();
    const data = await Event.find();
    return NextResponse.json({msg: "success",result:data});
}

export async function POST(req, res) {
    const payload = await req.json();
    await dbConnect();
    try {
      const newEvent = new Event(payload);
      const result = await newEvent.save();    
      return NextResponse.json({ msg: "success", result: result, data: newEvent });
    } catch (err) {
      return NextResponse.json({ msg: "failure", error: err.message });
    }
  }