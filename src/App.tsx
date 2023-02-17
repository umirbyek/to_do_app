import React, { FC, useState } from "react";
import Input from "./components/input";
import List from "./components/list";

type ValueType = {
  value: string;
  id: string;
}

const App: React.FC = () => {
  const [value, setValue] = useState<ValueType[]>([]);

  return (
    <div className="">
      <Input  onAdded={(newTodo)=>{setValue((old)=>[newTodo,...old])}} />
      <List value={value}  onDelete={(elementId) => {setValue((old)=>old.filter((cur) => cur.id !== elementId))}} />
    </div>
  );
};

export default App;
  // value -aas id ni tentsuu elementiig olood
        // ter elementee uldeesen shine array uusgeed
        // shine array-aa setValue-d damjuulna
        // [{value: a, id: 1}, {value: b, id: 2}] filter ashiglaj bolno
        // onDelete(2)
//// value.filter((element)=>element!===elemenid)