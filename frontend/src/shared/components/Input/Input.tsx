"use client";

import clsx from "clsx";
import { FC, ChangeEvent } from "react";

interface CustomInputProps {
  label: string;
  placeholder?: string;
  onChange: (value: string) => void;
  value: string;
  isValid?: boolean;
}

const Input: FC<CustomInputProps> = ({ label, placeholder, onChange, value, isValid = true }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className='flex flex-col gap-4'>
      <label htmlFor={label} className='text-black'>
        {label}
      </label>
      <input
        id={label}
        type='text'
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
        className={clsx(
          "pb-[10px] placeholder-grey hover:placeholder-grey-500 focus:text-black appearance-none border-b  focus:outline-none",
          {
            "border-black": isValid === true,
            "border-red-600": isValid === false
          }
        )}
      />
    </div>
  );
};

export default Input;
