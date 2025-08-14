"use client";
import Image from "next/image";
import React, { useState } from "react";

type InputFieldProps = {
  id: string;
  name: string;
  type?: string;
  label: string;
  required?: boolean;
  wrapperClass?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  type = "text",
  label,
  required = false,
  wrapperClass = "mb-5",
  value,
  onChange,
}) => (
  <div className={`relative ${wrapperClass}`}>
    <input
      type={type}
      id={id}
      name={name}
      required={required}
      value={value}
      onChange={onChange}
      className='w-full bg-transparent border-b border-[#9A9A9A] py-3 px-2 text-lg text-white focus:outline-none focus:border-[#9A9A9A] peer'
      placeholder=' '
    />
    <label
      htmlFor={id}
      className='absolute left-2 bottom-3 text-[17px] text-white transition-all 
      peer-placeholder-shown:bottom-3 peer-placeholder-shown:text-lg 
      peer-focus:bottom-11 peer-focus:text-sm peer-valid:bottom-11 peer-valid:text-sm 
      font-semibold tracking-[-0.289px]'>
      {label}
    </label>
  </div>
);

export default function GiriosNamaiForm() {
  const [result, setResult] = useState("Siųsti");
  const [checkbox, setCheckbox] = useState(false);

  // Controlled inputs state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    question: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setResult("Siuntimas...");

    const dataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      dataToSend.append(key, value);
    });
    dataToSend.append("access_key", "d6e544e4-265b-406b-99af-b47e5615bcdb");
    dataToSend.append("policyAccepted", checkbox ? "yes" : "no");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: dataToSend,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Pateikta");
      setTimeout(() => setResult("Siųsti"), 3000);
      setFormData({ name: "", email: "", phone: "", question: "" });
      setCheckbox(false);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className='md:pt-[80] ' id="contact">
      <div className='max-w-[1352px] mx-auto '>
        <div className='flex flex-col md:flex-row items-center justify-center'>
          <div className='bg-[#141414] md:bg-[#232323] px-[15px] md:px-[45px] py-[50px] md:py-[40px] flex items-center justify-center w-full md:h-[621.845px] h-auto md:rounded-l-[7px]'>
            <form onSubmit={onSubmit} className='w-full md:px-[35px] md:pr-[80px]'>
              <p className=' text-[16px] font-medium tracking-[0.16px] text-octonary md:hidden mb-[50px]'>
                05
                <span className='text-[#C5C5C5] text-[15px] font-medium leading-[17px] tracking-[0.15px] ml-2'>
                  Susisiekime
                </span>
              </p>

              <InputField
                id='name'
                name='name'
                label='Vardas *'
                required
                value={formData.name}
                onChange={handleChange}
              />
              <InputField
                id='email'
                name='email'
                type='text'
                label='El. paštas *'
                required
                wrapperClass='mb-[25px]'
                value={formData.email}
                onChange={handleChange}
              />
              <InputField
                id='phone'
                name='phone'
                type='tel'
                label='Telefono nr. *'
                required
                wrapperClass='mb-[22px]'
                value={formData.phone}
                onChange={handleChange}
              />
              <InputField
                id='question'
                name='question'
                label='Jus dominantis klausimas'
                required
                wrapperClass='mb-[50px]'
                value={formData.question}
                onChange={handleChange}
              />

              {/* Custom checkbox */}
              <div className='flex items-center gap-4 lg:gap-[22.97px] mb-[53px]'>
                <label htmlFor='privacy' className='flex items-center gap-4 cursor-pointer'>
                  <input
                    type='checkbox'
                    id='privacy'
                    name='policyAccepted'
                    required
                    className='peer hidden'
                    checked={checkbox}
                    onChange={(e) => setCheckbox(e.target.checked)}
                  />
                  <div className='w-[24px] h-[24px] border border-[rgba(255,255,255,0.34)] bg-black flex items-center justify-center peer-checked:bg-black peer-checked:border-primary transition'>
                    <Image
                      src='/icons/checkmark.png'
                      alt='Check mark'
                      width={15}
                      height={15}
                      className={`brightness-0 invert-[1] object-contain transition ${
                        checkbox ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </div>

                  <span className='text-white text-[17px] font-medium'>
                    Susipažinau su <span className='underline'>Privatumo politika</span> *
                  </span>
                </label>
              </div>

              <button
                type='submit'
                disabled={result === "Siuntimas..."}
                className='transition-all duration-300 ease-in-out hover:bg-[#39AB65] hover:text-white w-full md:w-[251.4px] h-[58px] text-black bg-white text-[17px] font-medium uppercase tracking-[1px] rounded-[5px] flex items-center justify-center gap-[15px] cursor-pointer'>
                {result}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='12'
                  viewBox='0 0 16 12'
                  fill='none'>
                  <path
                    d='M15.2491 5.42231L10.534 1.13361C10.4465 1.05397 10.3423 0.990514 10.2274 0.946863C10.1125 0.903212 9.98916 0.88022 9.86443 0.8792C9.61252 0.87714 9.3702 0.964702 9.19077 1.12262C9.10192 1.20082 9.03119 1.29393 8.98261 1.39665C8.93404 1.49936 8.90857 1.60967 8.90765 1.72128C8.90581 1.94667 9.00411 2.16365 9.18094 2.32448L12.2863 5.14902L1.27996 5.05901C1.02801 5.05695 0.785653 5.14453 0.606196 5.30247C0.426739 5.46041 0.324885 5.67579 0.323042 5.90121C0.321198 6.12664 0.419516 6.34365 0.596366 6.50451C0.773216 6.66537 1.01411 6.75689 1.26606 6.75895L12.2724 6.84896L9.12126 9.62234C8.94183 9.78026 8.83999 9.9956 8.83814 10.221C8.8363 10.4464 8.9346 10.6634 9.11143 10.8242C9.28825 10.985 9.52911 11.0765 9.78102 11.0786C10.0329 11.0807 10.2753 10.9931 10.4547 10.8352L15.2393 6.62417C15.3282 6.54602 15.399 6.45293 15.4477 6.3502C15.4963 6.24748 15.5218 6.13714 15.5227 6.02552C15.5236 5.91389 15.4999 5.80315 15.453 5.69964C15.406 5.59614 15.3368 5.5019 15.2491 5.42231Z'
                    fill='currentColor'
                  />
                </svg>
              </button>
            </form>
          </div>

          <div className='w-full md:block hidden md:max-w-[497.95px] h-[105.606px] md:h-[621.845px] shrink-0 rounded-r-[7px] overflow-hidden relative'>
            <Image
              src='/images/home/form-forest.jpeg'
              alt='Contact Image'
              width={400}
              height={622}
              className='w-full h-full object-cover '
            />
            <Image
              src='/images/logo2.png'
              alt='Logo'
              width={39}
              height={50}
              className='absolute md:bottom-[45.18px] bottom-9 left-1/2 transform -translate-x-1/2 md:w-[38.641px] md:h-[50.191px] w-[21.627px] h-[28.091px]'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
