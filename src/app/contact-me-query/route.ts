import { NextResponse } from "next/server";
import pool from "@/utils/db";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Insert into the database
    const [result] = await pool.execute(
      "INSERT INTO contact_query (name, email, message) VALUES (?, ?, ?)",
      [name, email, message]
    );

    // Send email
    const transporter = nodemailer.createTransport({
      service: "gmail", // You can also use SMTP details instead
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email app password
      },
    });

    const mailOptions = {
      from: email,
      replyTo: email, // User's email
      to: process.env.EMAIL_USER, // Replace with your actual email
      subject: "New Contact Form Submission",
      text: `You have a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Query submitted successfully and email sent!", id: result.insertId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
