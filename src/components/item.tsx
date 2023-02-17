import React, { useState } from "react";
import { ValueType } from "./list";

interface Props {
  data: ValueType;
  onDelete: (elementId: string) => void;
}

const Item = ({ data, onDelete }: Props) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <div
      key={data.id}
      className="flex justify-between items-center w-full gap-x-2"
    >
      <p
        className={
          isActive
            ? "border w-full rounded px-2 py-1"
            : "border w-full rounded px-2 py-1 line-through"
        }
        onClick={handleClick}
      >
        {data.value}
      </p>

      <button
        className="bg-slate-400 rounded px-2 py-1"
        onClick={() => onDelete(data.id)}
      >
        hasah
      </button>
    </div>
  );
};

export default Item;
