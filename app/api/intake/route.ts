import { NextResponse } from "next/server";
import { intakeSchema } from "@/lib/intake-schema";
import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

const intakeDirectory = path.join(process.cwd(), "data");
const intakeFile = path.join(intakeDirectory, "carrier-intakes.json");

export async function POST(request: Request) {
  try {
    const data = intakeSchema.parse(await request.json());
    await mkdir(intakeDirectory, { recursive: true });
    const records = JSON.parse(await readFile(intakeFile, "utf8").catch(() => "[]")) as unknown[];
    records.push({ id: crypto.randomUUID(), receivedAt: new Date().toISOString(), ...data });
    await writeFile(intakeFile, JSON.stringify(records, null, 2));
    return NextResponse.json({ message: "Your carrier profile has been received. We will review the information you provided." }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Please review the highlighted fields and try again." }, { status: 400 });
  }
}
