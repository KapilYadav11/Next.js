"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, useState } from "react";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="max-w-sm w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
        <div className="text-3xl font-extrabold text-center">Sign up</div>

        <div className="space-y-4 pt-4">
          <LabelledInput
            label="Username"
            placeholder="kapil@gmail.com"
            onChange={(e) => setUsername(e.target.value)}
          />

          <LabelledInput
            label="Password"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={async () => {
              try {
                await axios.post("/api/v1/signup", {
                  username,
                  password,
                });

                router.push("/");
              } catch {
                alert("Signup failed");
              }
            }}
            className="mt-4 w-full text-white bg-gray-800 rounded-lg text-sm px-5 py-2.5"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

function LabelledInput({
  label,
  placeholder,
  type,
  onChange,
}: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm text-black font-semibold">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        className="bg-gray-500 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

interface LabelledInputType {
  label: string;
  placeholder: string;
  type?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}