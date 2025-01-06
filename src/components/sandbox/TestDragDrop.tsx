import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { TestList } from "./TestList";

const TestDragDrop = () => {
  const [testList, setTestList] = useState(TestList);
  const onDragEndTest = (result) => {
    const items = [...testList];
    const deleteItem = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, deleteItem[0]);

    setTestList(items);
  };

  return (
    <div className="App">
      <h1>ドラッグアンドドロップ</h1>
      <DragDropContext onDragEnd={onDragEndTest}>
        <Droppable droppableId="droppableId">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {TestList.map(({ id, name }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div>
                          {id}：{name}
                        </div>
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TestDragDrop;
