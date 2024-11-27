import React, { useId } from "react";

function Select({ options, label, className = "", ...props }, ref) {
  const id = useId();
  return (
    <div className='w-full'>
      {label && <label htmlFor={id} className="block mb-2 text-2xl text-left font-medium text-gray-900 pl-1 ">{label}</label>}
      <select
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg border border-gray-500 focus:ring-blue-500 focus:border-blue-500 bg-white text-black outline-none focus:bg-gray-50 duration-200 w-full ${className}`}
        {...props}
      >
        {options?.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
