import React, { useState } from "react";

interface IconInputComponentProps {
  icons: React.ElementType[];
}
const IconInputComponent: React.FC<IconInputComponentProps> = ({
  icons = [],
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <>
      <div
        className="w-[98%] 
        rounded-[5px] 
        bg-[#373737] 
        p-2"
      >
        <div className="icons flex justify-between gap-3">
          {icons.map((Icon, index) => (
            <div key={index} onClick={() => setActiveIndex(index)}>
              <Icon
                className={`text-[#fff] inline-block p-1 text-[18px] ${activeIndex === index ? "active" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default IconInputComponent; 