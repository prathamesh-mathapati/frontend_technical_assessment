import { CommonNode } from "./CommonNode";

export const ThirdNode = ({ id }) => {
  return (
    <CommonNode
      title="Third"
      outputs={[{ id: `${id}-value` }]}
    >
      <span>Only output</span>
    </CommonNode>
  );
};
