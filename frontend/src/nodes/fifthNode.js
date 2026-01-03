import { useState } from "react";
import { CommonNode } from "./CommonNode";

export const FifthNode = ({ id }) => {
  const [value, setValue] = useState("");

  return (
    <CommonNode
      title="Fifth"
      inputs={[{ id: `${id}-input` }]}
      outputs={[{ id: `${id}-output` }]}
    >
      <input
        type="text"
        placeholder="Enter text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </CommonNode>
  );
};
