"use client";
import { ReactNode, useState } from "react";

export default function Collaps({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-b border-gray-300 overflow-hidden ${className}`}>
      <button
        type='button'
        className={`w-full px-[12px] py-[9px] text-left flex cursor-pointer justify-between items-center 
          ${isOpen ? "bg-white" : "bg-white hover:bg-gray-100"}
          transition-colors duration-200`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}>
        <span className='md:text-[18px] text-[16px] tracking-[0.15px] text-nonary uppercase font-medium'>
          {title}
        </span>
        <span className='text-lg w-8 h-8 border rounded-full flex justify-center items-center border-slate-300 text-gray-600'>
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!isOpen}>
        <div className='overflow-hidden bg-white text-nonary'>{children}</div>
      </div>
    </div>
  );
}
