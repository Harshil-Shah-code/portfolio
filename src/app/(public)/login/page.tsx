// "use client";
// import React, { useState } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import "./login.css"; 
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// interface FormModel {
//   email: string;
//   password: string;
// }

// const SignInForm = () => {
//   const [response, setResponse] = useState<string | null>(null);
//   const router = useRouter();

//   const validationSchema = Yup.object({
//     email: Yup.string().email("Invalid email format").required("Required"),
//     password: Yup.string().min(6, "Password must be at least 6 characters").required("Required"),
//   });

//   const handleSubmit = async (values: FormModel, { setSubmitting }: any) => {
//     try {
//       const res = await fetch("/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(values),
//       });

//       const data = await res.json();
//       setResponse(data.message || data.error);
//       localStorage.setItem('token',data.token);
//       router.push(data.redirect || "/dashboard");
//     } catch (error) {
//       console.error("Login error:", error);
//       setResponse("Something went wrong");
//     }
//     setSubmitting(false);
//   };

//   return (
//     <div className="login-wrapper">
//       <Formik
//         initialValues={{ email: "", password: "" }}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         {({ isSubmitting }) => (
//           <Form className="form">
//             <p className="form-title">Sign in to your account</p>
//             <div className="input-container">
//               <Field name="email" type="email" placeholder="Enter email" />
//               <ErrorMessage name="email" component="div" className="error" />
//             </div>
//             <div className="input-container">
//               <Field name="password" type="password" placeholder="Enter password" />
//               <ErrorMessage name="password" component="div" className="error" />
//             </div>
//             <button className="submit" type="submit" disabled={isSubmitting}>
//               {isSubmitting ? "Signing in..." : "Sign in"}
//             </button>
//       <p className="text-black text-sm">Don&apos;t have an account? <Link href="/register"><span className="text-[#4F46E5] font-semibold">Register here</span></Link></p>

//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default SignInForm;
