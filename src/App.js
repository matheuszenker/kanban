import React from "react";
import "./App.css";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import kanban from "./constants";

function App() {
  const dragEnd = (e) => {
    console.log("DragEnd", e);
  };

  return (
    <div className="App">
      <header className="App-header">
        <DragDropContext onDragEnd={(e) => dragEnd(e)}>
          <Droppable droppableId="allCards" key="allCards">
            {(provided, snapshot) => (
              <div ref={provided.innerRef} className="list-container">
                {kanban.map((list, index) => {
                  return (
                    <div className="list" key={`list-${index}`}>
                      {list.cards.map((card, i) => {
                        return (
                          <div className="card" key={`card-${i}`}>
                            {card.id}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
}

export default App;
