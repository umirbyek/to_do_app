import React from "react";
import Item from "./item";
export type ValueType = {
  value: string;
  id: string;
};

type ListProps = {
  value: ValueType[];
  onDelete: (elementId: string) => void;
};

const List: React.FC<ListProps> = ({ value, onDelete }) => {
  return (
    <div className="w-full px-10">
      <div className="relative grid gap-y-2 w-full ">
        {value.map((element, i) => {
          return <Item key={element.id} data={element} onDelete={onDelete} />;
        })}
      </div>
    </div>
  );
};

export default List;
