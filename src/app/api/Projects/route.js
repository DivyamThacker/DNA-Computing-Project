import { NextResponse } from "next/server";
import dbConnect from "../../../../backend/config/dbConnect";
import { Project } from "../../../../backend/models/project.model";

export async function GET(){
    await dbConnect();
    const data = await Project.find();
    return NextResponse.json({msg: "success",result:data});
}

export async function POST(req, res) {
    const payload = await req.json();
    await dbConnect();
    try {
      const newProject = new Project(payload);
      const result = await newProject.save();    
      return NextResponse.json({ msg: "success", result: result, data: newProject });
    } catch (err) {
      return NextResponse.json({ msg: "failure", error: err.message });
    }
  }