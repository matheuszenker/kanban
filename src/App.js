import React from "react";
import "./App.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import kanban from "./constants";

function App() {
  const dragEnd = (e) => {
    console.log("DragEnd", e);
  };

  return (
    <div className="App">
      <header className="App-header">
        <DragDropContext onDragEnd={(e) => dragEnd(e)}>
          <div className="list-container">
            {kanban.map((list, index) => {
              return (
                <Droppable key={`list-${index}`} droppableId={String(index)}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      className="list"
                      key={`list-${index}`}
                    >
                      {list.cards.map((card, i) => {
                        return (
                          <Draggable
                            key={card.id}
                            draggableId={card.id}
                            index={i}
                          >
                            {(provided, snapshot3) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="card"
                                key={`card-${i}`}
                              >
                                {card.id}
                              </div>
                            )}
                          </Draggable>
                        );
                      })}
                    </div>
                  )}
                </Droppable>
              );
            })}
          </div>
        </DragDropContext>
      </header>
    </div>
  );
}

export default App;
