import React, { useState } from "react";
import { validate } from "./validate";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState({});
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setError(validate({ ...form, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setProcessing(true);

    emailjs.init("VkYRQfr-u2yeG2QxW");

    const emailData = {
      to_name: form.name,
      to_lastName: form.lastName,
      to_email: form.email,
      from_name: "Jose Centeno",
      subject: form.subject,
      message: form.message,
    };

    emailjs.send("service_jodbm5s", "template_h6ocfpe", emailData).then(
      (response) => {
        console.log("Message sent successfully!", response);
        toast.success("Message sent successfully!");
      },
      (error) => {
        console.error("Error sending message. Please try again.", error);
        toast.error("Error sending message. Please try again.");
      }
    );

    const adminMailData = {
      to_name: "Jose Centeno",
      from_lastName: form.lastName,
      to_email: "josemcentenoc@gmail.com",
      from_name: form.name,
      subject: form.subject,
      message: form.message,
    };

    // Enviar correo a tu dirección de correo electrónico
    emailjs.send("service_jodbm5s", "template_htus1f7", adminMailData).then(
      (response) => {
        console.log("Email sent to administrator:", response);
      },
      (error) => {
        console.error("Error sending e-mail to administrator:", error);
      }
    );

    setTimeout(() => {
      setProcessing(false);
      setForm({
        name: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 4000);
  };

  return (
    <div className="w-screen flex flex-col items-center 3xl:w-screen h-auto bg-gray opacity-100 font-pharagrap">
      <h1 className="w-10/12 text-5xl lg:text-7xl text-center font-bold font-title tracking-normal text-black opacity-100 pt-16 lg:pt-24">
        Let's talk about your next Project
      </h1>
      <div className="w-52 h-2 bg-red p-0 rounded-md opacity-100 mt-0 md:mt-3 lg:mt-5 xl:mt-9 2xl:mt-2.5"></div>
      <div className="w-11/12 lg:w-1005 bg-white rounded-xl mt-16 shadow-lg mb-14">
        <form onSubmit={handleSubmit} className="mt-10 lg:mt-14 mx-7 lg:mx-20">
          <div>
            <label
              htmlFor="name"
              className="w-8/12 lg:w-367 h-7 text-left font-pharagrap tracking-normal text-label opacity-100"
            >
              Name
            </label>
            <input
              type={"text"}
              value={form.name}
              name={"name"}
              onChange={handleChange}
              id="name"
              placeholder="Name"
              required
              className="w-full h-16 lg:w-853 lg:h-20 bg-gray-medium rounded-x opacity-100 font-pharagrap text-left tracking-normal text-black text:xl lg:text-2xl pl-8 lg:pl-11"
            />
          </div>
          <div
            className={`h-6 pt-1 transition-all duration-200 ease-in-out ${
              error.name ? "opacity-100" : "opacity-0"
            }`}
          >
            {error.name && <span className="text-red">{error.name}</span>}
          </div>
          <div className="mt-4 lg:mt-8">
            <label
              htmlFor="lastname"
              className="w-367 h-7 text-left font-pharagrap tracking-normal text-label opacity-100"
            >
              Last Name
            </label>
            <input
              type={"text"}
              value={form.lastName}
              name={"lastName"}
              onChange={handleChange}
              id="lastname"
              placeholder="Last Name"
              required
              className="w-full h-16 lg:w-853 lg:h-20 bg-gray-medium rounded-x opacity-100 font-pharagrap text-left tracking-normal text-black text:xl lg:text-2xl pl-8 lg:pl-11"
            />
          </div>
          <div
            className={`h-6 pt-1 transition-all duration-200 ease-in-out ${
              error.lastName ? "opacity-100" : "opacity-0"
            }`}
          >
            {error.lastName && (
              <span className="text-red">{error.lastName}</span>
            )}
          </div>
          <div className="mt-4 lg:mt-8">
            <label
              htmlFor="email"
              className="w-367 h-7 text-left font-pharagrap tracking-normal text-label opacity-100"
            >
              Your email
            </label>
            <input
              type={"text"}
              value={form.email}
              name={"email"}
              onChange={handleChange}
              id="email"
              placeholder="name@flowbite.com"
              required
              className="w-full h-16 lg:w-853 lg:h-20 bg-gray-medium rounded-x opacity-100 font-pharagrap text-left tracking-normal text-black text:xl lg:text-2xl pl-8 lg:pl-11"
            />
          </div>
          <div
            className={`h-6 pt-1 transition-all duration-200 ease-in-out ${
              error.email ? "opacity-100" : "opacity-0"
            }`}
          >
            {error.email && <span className="text-red">{error.email}</span>}
          </div>
          <div className="mt-4 lg:mt-8">
            <label
              htmlFor="subject"
              className="w-367 h-7 text-left font-pharagrap tracking-normal text-label opacity-100"
            >
              Subject
            </label>
            <input
              type={"text"}
              value={form.subject}
              name={"subject"}
              onChange={handleChange}
              id="subject"
              placeholder="Let us know how we can help you"
              required
              className="w-full h-16 lg:w-853 lg:h-20 bg-gray-medium rounded-x opacity-100 font-pharagrap text-left tracking-normal text-black text:xl lg:text-2xl pl-8 lg:pl-11"
            />
          </div>
          <div
            className={`h-6 pt-1 transition-all duration-200 ease-in-out ${
              error.subject ? "opacity-100" : "opacity-0"
            }`}
          >
            {error.subject && <span className="text-red">{error.subject}</span>}
          </div>
          <div className="mt-4 lg:mt-8">
            <label
              htmlFor="message"
              className="w-367 h-7 text-left font-pharagrap tracking-normal text-label opacity-100"
            >
              Your message
            </label>
            <textarea
              type={"text"}
              value={form.message}
              name={"message"}
              onChange={handleChange}
              id="message"
              rows="6"
              placeholder="Leave a comment..."
              className="w-full lg:w-853 h-auto pt-5 bg-gray-medium rounded-x opacity-100 font-pharagrap text-left tracking-normal text-black text:xl lg:text-2xl pl-8 lg:pl-11"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={
                processing ||
                Object.keys(error).length > 0 ||
                !form.name ||
                !form.lastName ||
                !form.email ||
                !form.subject ||
                !form.message
              }
              className={`w-36 h-16 lg:w-52 lg:h-20 bg-red rounded-lg text-lg lg:text-2xl my-9 text-white font-pharagrap ${
                processing ||
                Object.keys(error).length > 0 ||
                !form.name ||
                !form.lastName ||
                !form.email ||
                !form.subject ||
                !form.message
                  ? "opacity-50 cursor-not-allowed"
                  : "opacity-100 cursor-pointer"
              }`}
            >
              {processing ? (
                <>
                  <svg
                    className="animate-spin w-9 ml-12 lg:w-10 lg:ml-20 lg:mt-1"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-3.647z"
                    />
                    Sending...
                  </svg>
                </>
              ) : (
                "Send message"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
