import { NextResponse } from "next/server";
import connectDB from "../../lib/connectDB";
import Contact from "../../lib/models/Contact";

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, serviceType, message } = body;
    console.log(body);
    // Validate incoming data
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !serviceType ||
      !message
    ) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }
    await connectDB();
    const data = await Contact.create({
      firstName,
      lastName,
      email,
      phone,
      serviceType,
      message,
    });

    return NextResponse.json(
      { message: "Data successfully saved", data: body },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
export async function GET(req) {
  try {
    // Connect to the database
    await connectDB();

    // Fetch all data from the Contact collection
    const contact = await Contact.find();

    // Return the data
    return NextResponse.json({ success: true, data: contact }, { status: 200 });
  } catch (error) {
    console.error("Error fetching data:", error);

    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
