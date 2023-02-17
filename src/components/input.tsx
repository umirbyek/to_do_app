import React, { FormEvent, useState } from "react";
import type { FC } from "react"
type ValueType = {
  value: string;
  id: string;

};

type InputProps = {
  onAdded: (val: ValueType) => void;
};

const Input: FC<InputProps> = ({ onAdded }) => {
  const [value, setValue] = useState("");

  return (
    <form
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setValue("");
      }}
      className="flex  gap-x-2 justify-center p-10"
    >
      <input
        className=" w-full flex-1 border-2 rounded border-slate-200 placeholder-slate-500"
        placeholder="Search for anything..."
        name="search"
        value={value}
        required
        onChange={(e) => setValue(e.currentTarget.value)}
      />

      <button
        type="submit"
        className="bg-slate-400 rounded p-2"
        onClick={() => {
          onAdded({ value: value, id: new Date().toISOString()});
          setValue("");
        }}
      >
        Nemeh
      </button>
    </form>
  );
};

export default Input;
