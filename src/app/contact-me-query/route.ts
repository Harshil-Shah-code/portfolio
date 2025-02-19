import { NextResponse } from "next/server";
import pool, { testConnection } from "@/utils/db";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // Test database connection first
    const connectionSuccess = await testConnection();
    if (!connectionSuccess) {
      return NextResponse.json(
        { error: "Database connection failed. Check your credentials." },
        { status: 500 }
      );
    }

    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Insert into the database using PostgreSQL syntax
    const result = await pool.query(
      "INSERT INTO contact_query (name, email, message) VALUES ($1, $2, $3) RETURNING id",
      [name, email, message]
    );
    
    const insertId = result.rows[0].id;

    // Send email
    const transporter = nodemailer.createTransport({
      service: "gmail", 
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    const mailOptions = {
      from: email,
      replyTo: email, 
      to: process.env.EMAIL_USER, 
      subject: "New Contact Form Submission",
      text: `You have a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Query submitted successfully and email sent!", id: insertId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ 
      error: "Internal Server Error",
      details: error.message || String(error)
    }, { status: 500 });
  }
}