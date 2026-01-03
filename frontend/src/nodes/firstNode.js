import { CommonNode } from "./CommonNode";

export const FirstNode = ({ id }) => {
  return (
    <CommonNode
      title="First"
      inputs={[{ id: `${id}-input` }]}
      outputs={[{ id: `${id}-output` }]}
    >
      <span>First demo node</span>
    </CommonNode>
  );
};
