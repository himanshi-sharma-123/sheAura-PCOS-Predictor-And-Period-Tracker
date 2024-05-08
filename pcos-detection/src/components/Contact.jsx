import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_APP_USER_ID
      )
      .then(
        (result) => {
          toast.success("Message sent");
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          toast.error("Failed to send message");
          console.log(error.text);
        }
      );
  };
  return (
    <div
      name="contact"
      className="w-full h-full flex justify-center items-center p-4 mt-5"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline text-black">Contact Us</p>
          <p className=" py-4">Leave a message</p>
        </div>
        <input
          className="bg-[#d06ca4] p-2 text-white placeholder-white"
          type="text"
          placeholder="Name"
          name="from_name"
          required
        />
        <input
          className="my-4 p-2 bg-[#d06ca4] text-white placeholder-white"
          type="email"
          placeholder="email"
          name="from_email"
          required
        />

        <textarea
          className="bg-[#d06ca4] p-2 mt-4 text-white placeholder-white"
          name="message"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button className="hover:text-white border-2 hover:bg-[#cb668d] hover:border-pink-800 px-4 py-3 my-6 mx-auto flex items-center">
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Contact;
