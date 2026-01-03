import { CommonNode } from "./CommonNode";

export const LLMNode = ({ id }) => {
  return (
    <CommonNode
      title="LLM"
      inputs={[
        { id: `${id}-system` },
        { id: `${id}-prompt` },
      ]}
      outputs={[{ id: `${id}-response` }]}
    >
      <span>This is a LLM.</span>
    </CommonNode>
  );
};
