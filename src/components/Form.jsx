import React, { useState } from "react";
import { ReactComponent as Button } from "../images/icon-arrow.svg";
import { ReactComponent as ErrorIcon } from "../images/icon-error.svg";

const Form = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      setError("Please provide a Email ");
      return;
    }
    const validEmailPattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = validEmailPattern.test(input);

    if (!isValid) {
      setError("Please provide a valid Email ");
      return;
    } else {
      setInput("");
      alert("Thanks!");
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="mt-8 lg:mt-12 ">
      <div className="relative">
        <input
          type="text"
          placeholder="Email Address"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={`block w-full py-2 pl-8 lg:py-3 pr-24 bg-transparent border-2 rounded-full outline-none placeholder:text-start-2 text-dark ${
            error ? "border-red-soft" : "border-start-2"
          } border-start-2 focus:border-red-desaturate`}
          onFocus={() => setError("")}
        />
        {error && (
          <ErrorIcon className="absolute top-1/2 right-20 lg:right-28 -translate-y-2/4" />
        )}

        <button
          type="submit"
          className={`absolute top-0 bottom-0 right-0 flex items-center justify-center w-16 lg:w-24 transition transform rounded-full bg-gradient-to-br from-start-2 to-stop-2 ${
            error
              ? "brightness-110 cursor-not-allowed"
              : " hover:scale-105 active:scale-95 shadow-lg"
          }   `}
        >
          <Button />
        </button>
      </div>
      {error && (
        <div className="mt-1 ml-4 text-sm text-left text-red-soft">
          <p>{error}</p>
        </div>
      )}
    </form>
  );
};

export default Form;
