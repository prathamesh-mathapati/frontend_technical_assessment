import { CommonNode } from "./CommonNode";

export const FourthNode = ({ id }) => {
  return (
    <CommonNode
      title="Fourth"
      inputs={[{ id: `${id}-check` }]}
      outputs={[
        { id: `${id}-true` },
        { id: `${id}-false` },
      ]}
    >
      <span>Split output demo</span>
    </CommonNode>
  );
};
