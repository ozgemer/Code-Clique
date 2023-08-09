import * as React from "react";
import { Draggable } from "react-beautiful-dnd";

export default function DraggableTab(props) {

  return (
    <Draggable
      draggableId={props.index.toString()}
      index={props.index}
      disableInteractiveElementBlocking
    >
      {(draggableProvided) => (
        <div
          ref={draggableProvided.innerRef}
          {...draggableProvided.draggableProps}
          {...draggableProvided.dragHandleProps}
        >
          {React.cloneElement(props.component, {
            ...props,
            ...draggableProvided.dragHandleProps,
            style: { cursor: "inherit" }
          })}
        </div>
      )}
    </Draggable>
  );
}
