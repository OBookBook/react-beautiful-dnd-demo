import { useState } from "react";
import "./App.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function App() {
  const [items] = useState(["item0", "item1", "item2"]);

  const onDragEnd = (result) => {
    const remove = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, remove[0]);
  };
  return (
    <>
      <div className="dragDropArea">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="draggable">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <Draggable draggableId="item0" index={0}>
                  {(provided) => (
                    <div
                      className="item"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {items[0]}
                    </div>
                  )}
                </Draggable>
                <Draggable draggableId="item1" index={1}>
                  {(provided) => (
                    <div
                      className="item"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {items[1]}
                    </div>
                  )}
                </Draggable>
                <Draggable draggableId="item2" index={2}>
                  {(provided) => (
                    <div
                      className="item"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {items[2]}
                    </div>
                  )}
                </Draggable>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </>
  );
}

export default App;
