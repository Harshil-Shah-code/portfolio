import { NextResponse } from "next/server";
import pool from "@/utils/db"; // Database connection

export async function GET() {
  try {
    // Fetch projects from the database
    const result = await pool.query("SELECT * FROM projects");
    const rows = result.rows;

    return NextResponse.json({ success: true, data: rows });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
