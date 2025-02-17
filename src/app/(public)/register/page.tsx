"use client";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./register.css";
import Link from "next/link";

const SignupForm = () => {
  const [serverMessage, setServerMessage] = useState("");

  return (
    <div className="register-wrapper">
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
          email: Yup.string().email("Invalid email").required("Email is required"),
          password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
        })}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setServerMessage(""); // Clear previous messages

          try {
            const response = await fetch("/auth/register", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(values),
            });

            const data = await response.json();

            if (response.ok) {
              setServerMessage("User registered successfully!");
              resetForm(); // Clear form fields
            } else {
              setServerMessage(data.error || "Registration failed.");
            }
          } catch (error) {
            setServerMessage("Something went wrong. Please try again.");
          }

          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <h2 className="title">Sign Up</h2>
            <p className="message">Create an account to get started</p>

            <label>
              <Field className="input" type="text" name="name" placeholder=" " />
              <span>Name</span>
              <ErrorMessage name="name" component="div" className="error" />
            </label>

            <label>
              <Field className="input" type="email" name="email" placeholder=" " />
              <span>Email</span>
              <ErrorMessage name="email" component="div" className="error" />
            </label>

            <label>
              <Field className="input" type="password" name="password" placeholder=" " />
              <span>Password</span>
              <ErrorMessage name="password" component="div" className="error" />
            </label>

            <button type="submit" className="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Sign Up"}
            </button>

            {serverMessage && <p className="server-message">{serverMessage}</p>}
            <p className="text-black text-sm">Already have an account? <Link href="/login"><span className="text-[#4F46E5] font-semibold">Login here</span></Link></p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
