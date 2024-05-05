import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const MessageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:4000/api/v1/message/send",
          { firstName, lastName, email, phone, message },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMessage("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="py-14 flex flex-col justify-center items-center">
        <h2 className="text-gray-700 tracking-wider  text-center font-extrabold text-2xl lg:text-3xl py-7">Send Us A Message</h2>
        <form className="flex-col flex items-center justify-center w-5/6 px-2" onSubmit={handleMessage}>
          <div className="flex flex-col gap-2 lg:flex-row lg:gap-7 px-4 lg:pb-2 pt-4 items-center justify-center">
            <input
            className="pl-2 h-9 rounded-md border-2 border-neutral-400"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
            className="pl-2 h-9 rounded-md border-2 border-neutral-400"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 lg:flex-row lg:gap-7 px-4 pt-2 pb-4 items-center justify-center">
            <input
            className="pl-2 h-9 rounded-md border-2 border-neutral-400"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
            className="pl-2 h-9 rounded-md border-2 border-neutral-400"
              type="number"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <textarea
          className="lg:w-1/3 w-full rounded-lg mb-5 border-2 border-dashed border-gray-300 pl-3 pt-2"
            rows={7}
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="flex justify-center items-center p-3">
            <button className="bg-blue-600 rounded-2xl w-20 text-white h-10 border-2 border-blue-800 tracking-wider font-semibold pb-1 " type="submit">Send</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MessageForm;