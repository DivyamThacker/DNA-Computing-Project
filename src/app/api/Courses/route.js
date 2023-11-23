import { NextResponse } from "next/server";
import dbConnect from "../../../../backend/config/dbConnect";
import { Course } from "../../../../backend/models/course.model";

export async function GET(){
    await dbConnect();
    const data = await Course.find();
    return NextResponse.json({msg: "success",result:data});
}

export async function POST(req, res) {
    const payload = await req.json();
    await dbConnect();
    try {
      const newCourse = new Course(payload);
      const result = await newCourse.save();    
      return NextResponse.json({ msg: "success", result: result, data: newCourse });
    } catch (err) {
      return NextResponse.json({ msg: "failure", error: err.message });
    }
  }