import React from "react";

interface InputBoxProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}

const InputBox: React.FC<InputBoxProps> = ({ 
  value, 
  onChange, 
  placeholder = "", 
  type = "text" 
}) => {
  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-[98%] 
          rounded-[5px] 
          bg-[#373737] 
          text-white
          border 
          border-transparent 
          hover:border-[#6A6A6A] 
          focus:border-[#726FFF] 
          focus:outline-none
        "
        style={{ padding: "4px" }}
      />
    </div>
  );
};

export default InputBox;
