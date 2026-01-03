import { CommonNode } from "./CommonNode";

export const SecondNode = ({ id }) => {
  return (
    <CommonNode
      title="Second"
      inputs={[
        { id: `${id}-one` },
        { id: `${id}-two` },
      ]}
      outputs={[{ id: `${id}-result` }]}
    >
      <span>Two inputs demo</span>
    </CommonNode>
  );
};
