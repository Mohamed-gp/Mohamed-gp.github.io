"use client";

import toast from "react-hot-toast";

const EmailButton = () => {
  const text = "mohamedterba6@gmail.com";
  const copyHandler = (text: string) => {
    const input = document.createElement("input");
    input.setAttribute("value", text);
    document.body.appendChild(input);
    input.select();
    const result = document.execCommand("copy");
    document.body.removeChild(input);
    toast("copied successfuly, fell free to email me", {
      icon: "🥳",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
        textAlign: "center",
        fontSize: "20px",
        padding: "10px 10px",
      },
    });

    return result;
  };
  return (
    <button
      onClick={() => copyHandler(text)}
      name="email-copy-button"
      className="flex dark:text-black items-center justify-center w-full gap-2 px-4 py-2 font-semibold duration-300 bg-white border rounded-full border-black/40 group hover:scale-105 sm:w-auto sm:justify-normal"
    >
      <p>{text}</p>
    </button>
  );
};
export default EmailButton;
