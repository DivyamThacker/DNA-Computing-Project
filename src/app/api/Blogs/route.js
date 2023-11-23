import { NextResponse } from "next/server";
import dbConnect from "../../../../backend/config/dbConnect";
import { Blog } from "../../../../backend/models/blog.model";

export async function GET(){
    await dbConnect();
    const data = await Blog.find();
    return NextResponse.json({msg: "success",result:data});
}

export async function POST(req, res) {
    const payload = await req.json();
    await dbConnect();
    try {
      const newBlog = new Blog(payload);
      const result = await newBlog.save();    
      return NextResponse.json({ msg: "success", result: result, data: newBlog });
    } catch (err) {
      return NextResponse.json({ msg: "failure", error: err.message });
    }
  }