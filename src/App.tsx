import { useState } from "react";
import "./App.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function App() {
  const [items] = useState([
    { id: 0, text: "item0" },
    { id: 1, text: "item1" },
    { id: 2, text: "item2" },
    { id: 3, text: "item3" },
    { id: 4, text: "item4" },
    { id: 5, text: "item5" },
    { id: 6, text: "item6" },
    { id: 7, text: "item7" },
    { id: 8, text: "item8" },
    { id: 9, text: "item9" },
    { id: 10, text: "item10" },
  ]);

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
                {items.map((item, index) => (
                  <Draggable
                    draggableId={item.text}
                    index={index}
                    key={item.id}
                  >
                    {(provided) => (
                      <div
                        className="item"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {item.text}
                      </div>
                    )}
                  </Draggable>
                ))}
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
