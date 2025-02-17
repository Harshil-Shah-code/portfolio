import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";

// Define types for our form data and errors
interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined }); // Clear error on input change
  };

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required!";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required!";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format!";
    }
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty!";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/contact-me-query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong!");
      }

      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      alert("Failed to send message. Please try again later.");
      console.error("Error submitting contact form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      className="space-y-4"
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 border rounded-md text-black"
          value={formData.name}
          onChange={handleChange}
          disabled={loading}
        />
        {errors.name && (
          <motion.p
            className="text-red-500 text-sm mt-1"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {errors.name}
          </motion.p>
        )}
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded-md text-black"
          value={formData.email}
          onChange={handleChange}
          disabled={loading}
        />
        {errors.email && (
          <motion.p
            className="text-red-500 text-sm mt-1"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {errors.email}
          </motion.p>
        )}
      </div>

      <div>
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-3 border rounded-md text-black h-28"
          value={formData.message}
          onChange={handleChange}
          disabled={loading}
        />
        {errors.message && (
          <motion.p
            className="text-red-500 text-sm mt-1"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {errors.message}
          </motion.p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-[#ffae09] text-white font-bold py-2 px-4 rounded hover:bg-[#e39800] disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
        disabled={loading}
      >
        {loading ? (
          <span className="animate-spin border-4 border-white border-t-transparent rounded-full w-5 h-5"></span>
        ) : (
          "Send Message"
        )}
      </button>
    </motion.form>
  );
};

export default ContactForm;