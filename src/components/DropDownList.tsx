import React from "react";

interface DropDownItem {
  text: string;
  value: string;
}
interface DropDownList {
  id: string;
  label: string;
  items: DropDownItem[];
  className?: string;
  onClick?: () => void;
}
const DropDownList = (props: DropDownList) => {
  return (
    <>
      <div>
        <label
          htmlFor={props.id}
          className="block mb-2 text-sm font-medium text-color-1"
        >
          {props.label}
        </label>
        <select
          id={props.id}
          className="bg-gray-50 border border-color-2 text-color-1 text-sm rounded-lg focus:ring-color-1 focus:border-color-1 block w-full p-2 outline-color-1"
        >
          {props.items.map((item, index) => {
            return (
              <option selected={index == 0 || false} value={item.value}>
                {item.text}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default DropDownList;
