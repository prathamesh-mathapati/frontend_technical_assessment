import { useState, useEffect, useRef } from "react";
import { Handle, Position } from "reactflow";
import { CommonNode } from "./CommonNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [variables, setVariables] = useState([]);
  const textAreaRef = useRef(null);

  useEffect(() => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const matches = Array.from(currText.matchAll(regex)).map((match) => match[1]);

    setVariables([...new Set(matches)]);
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);

    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  };
  console.log(variables, "kkkk");


  return (
    <CommonNode
      title="Text"
      id={id}
      outputs={[{ id: `${id}-output` }]}
    >
      <div className="node-content" style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ fontSize: '10px', marginBottom: '4px' }}>Text:</label>
        <textarea
          ref={textAreaRef}
          value={currText}
          onChange={handleTextChange}
          className="text-node-input"
          style={{
            width: "95%",
            overflow: "hidden",
            resize: "none",
            minHeight: "40px",
            backgroundColor: 'rgba(255,255,255,0.05)',
            color: 'white',
            border: '1px solid #9D50FF',
            borderRadius: '4px',
            padding: '5px'
          }}
        />
      </div>

      {variables.map((varName, index) => (
        <Handle
          key={`${id}-${varName}-${index}`}
          type="target"
          position={Position.Left}
          id={`${id}-${varName}`}
          className="node-handle"
          style={{
            top: `${(index + 1) * (100 / (variables.length + 1))}%`,
          }}
        />
      ))}
    </CommonNode>
  );
};