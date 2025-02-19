// import { NextResponse } from "next/server";
// import pool from "@/utils/db"; // Database connection
// import bcrypt from "bcryptjs"; // Password hashing
// import jwt from "jsonwebtoken"; // JWT for authentication

// const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key"; // Store in .env for security

// interface User {
//   id: number;
//   email: string;
//   password: string;
// }

// export async function POST(req: Request) {
//   try {
//     const { email, password } = await req.json();

//     if (!email || !password) {
//       return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
//     }

//     // Query the database for the user
//     const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
//     const rows = result.rows;

//     if (rows.length === 0) {
//       return NextResponse.json({ error: "User not found" }, { status: 404 });
//     }

//     const user = rows[0];

// //     // Compare hashed password using bcryptjs
// //     const isMatch = await bcrypt.compare(password, user.password);
    
// //     if (!isMatch) {
// //       return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
// //     }

// //     // Generate JWT token
// //     const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: "7d" });

// //     // Set token in HTTP-only cookie (secure way)
// //     const response = NextResponse.json({
// //       message: "Login successful",
// //       user: { id: user.id, email: user.email },
// //       token,
// //     });

// //     response.headers.set("Set-Cookie", `authToken=${token}; Path=/; non-HttpOnly; Secure; Max-Age=${60 * 60 * 24 * 7}`);

// //     return response;

// //   } catch (error) {
// //     console.error("Database error:", error);
// //     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
// //   }
// // }
