import { memo } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import { IconNames } from "@blueprintjs/icons";
import {Icon} from "@blueprintjs/core";

const Kafka= ({
  data,
  isConnectable,
}: NodeProps) => {
  return (
    <>
    <div>
    <Icon size={45} icon="label"/>
    </div>
    {data?.label}
      <Handle
        type="source"
        style={{width:'8px',height:'10px',borderRadius:'3px',background:'black'}}
        position={Position.Right}
        isConnectable={isConnectable}
      />
      
      


    </>
  );
};

Kafka.displayName = "Kafka";

export default memo(Kafka);
export {}
