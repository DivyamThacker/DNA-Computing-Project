import { NextResponse, NextRequest } from "next/server";
import dbConnect from "../../../../backend/config/dbConnect";
import { SimulationTool } from "../../../../backend/models/simulationTool.model";

export async function GET() {
  await dbConnect();
  const data = await SimulationTool.find();
  return NextResponse.json({ msg: "success", result: data });
}

export async function POST(req, res) {
  const payload = await req.json();
  await dbConnect();
  try {
    const newSimulation = new SimulationTool(payload);
    const result = await newSimulation.save();    
    return NextResponse.json({ msg: "success", result: result, data: newSimulation });
  } catch (err) {
    return NextResponse.json({ msg: "failure", error: err.message });
  }
}
