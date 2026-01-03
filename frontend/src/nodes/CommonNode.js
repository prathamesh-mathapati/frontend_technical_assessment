import { Handle, Position } from "reactflow";

export const CommonNode = ({
  title,
  inputs = [],
  outputs = [],
  children,
}) => {
  return (
    // REMOVED the big style object, ADDED className
    <div className="custom-node">
      {inputs.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={input.id}
          // Using a class for the handle instead of inline style
          className="node-handle"
          style={{
             // We keep this inline because it's dynamic math
            top: `${((index + 1) * 100) / (inputs.length + 1)}%`,
          }}
        />
      ))}

      <div className="node-header">{title}</div>

      <div className="node-content">{children}</div>

      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={output.id}
          className="node-handle"
        />
      ))}
    </div>
  );
};