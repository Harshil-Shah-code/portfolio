'use client'
import React from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <motion.div
        className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 border border-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-center text-black mb-4">Contact Me</h1>
        <p className="text-center text-gray-600 mb-6">Feel free to reach out! 🚀</p>

        <ContactForm />

        <div className="mt-6 text-center text-black">
          <p>Email me at:</p>
          <a
            href="mailto:your-email@example.com"
            className="text-blue-600 font-semibold hover:underline"
          >
            harshilshah1004@gmail.com
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
