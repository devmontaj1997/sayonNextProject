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
        " style={{padding:"4px 2px 0px 2px", height:"30px"}}
      >
        <div className="icons flex justify-between gap-3 ">
          {icons.map((Icon, index) => (
            <div key={index} onClick={() => setActiveIndex(index)}>
              <Icon 
                className={`text-[#fff] w-6 h-6  ${activeIndex === index ? "active" : ""}`} style={{padding:"4px"}}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default IconInputComponent;