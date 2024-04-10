import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import DropdownIcon from "../icons/DropdownIcon";

const Collapse = ({ className, collapseTitle, items }) => {
  const [showDropdownOptions, setShowDropdownOptions] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);

  // Function to handle the selection of a radio button
  const handleSelection = (itemName) => {
    setSelectedOption(prevSelectedOption => (prevSelectedOption === itemName ? null : itemName));
  };

  return (
    <div className={twMerge("flex-shrink-0", className)}>
      <div onClick={() => setShowDropdownOptions(!showDropdownOptions)} className="space-x-32 mr-2 flex items-center justify-between cursor-pointer">
        <nobr>
          <p className="font-semibold text-base">{collapseTitle}</p>
        </nobr>
        <DropdownIcon className={` ${showDropdownOptions ? 'rotate-0' : 'rotate-180'} mt-1`} width="20px" height="20px" />
      </div>
      {showDropdownOptions && (
        <div className="flex flex-col">
          {items?.map((itemName, index) => (
            <label key={index} className="inline-flex items-center gap-x-2 cursor-pointer">
              <input
                className="mt-1 cursor-pointer"
                type="radio"
                name={collapseTitle}
                id={`filterRadio_${index}`}
                checked={selectedOption === itemName}
                onChange={() => handleSelection(itemName)}
              />
              <span className="font-semibold text-base">{itemName}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collapse;
