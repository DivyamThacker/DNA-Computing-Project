import { NextResponse } from "next/server";
import dbConnect from "../../../../backend/config/dbConnect";
import { Company } from "../../../../backend/models/company.model";
import mongoose from "mongoose";

export async function GET(){
    await dbConnect();
    const data = await Company.find();
    return NextResponse.json({msg: "success", result:data});
}

export async function POST(req, res) {
    const payload = await req.json();
    await dbConnect();
    try {
      const newCompany = new Company(payload);
      const result = await newCompany.save();    
      return NextResponse.json({ msg: "success", result: result, data: newCompany });
    } catch (err) {
      return NextResponse.json({ msg: "failure", error: err.message });
    }
  }