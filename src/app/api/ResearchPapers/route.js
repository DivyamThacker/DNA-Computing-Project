import { NextResponse } from "next/server";
import dbConnect from "../../../../backend/config/dbConnect";
import { ResearchPaper } from "../../../../backend/models/researchPaper.model";

export async function GET(){
    await dbConnect();
    const data = await ResearchPaper.find();
    return NextResponse.json({msg: "success",result:data});
}

export async function POST(req, res) {
    const payload = await req.json();
    await dbConnect();
    try {
      const newResearchPaper = new ResearchPaper(payload);
      const result = await newResearchPaper.save();    
      return NextResponse.json({ msg: "success", result: result, data: newResearchPaper });
    } catch (err) {
      return NextResponse.json({ msg: "failure", error: err.message });
    }
  }