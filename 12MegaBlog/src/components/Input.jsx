/*This component can be used multiple times whenever there is an input field required.*/
import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-2xl text-left font-medium text-gray-900 pl-1 " htmlFor="id">
          {" "}
          {label}
        </label>
      )}

      <input
        type={type}
        className={`border border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-sm rounded-lg  block w-full p-2.5 px-3 py-2 bg-white  focus:bg-gray-50 duration-200  ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
