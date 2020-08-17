import React from "react";
import "./App.css";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import kanban from "./constants";

function App() {
  const dragEnd = (e) => {
    console.log("DragEnd", e);
  };

  console.log(kanban);
  return (
    <div className="App">
      <header className="App-header">
        <DragDropContext onDragEnd={(e) => dragEnd(e)}>
          <div className="container">
            <Droppable key="allCards" droppableId="allCards">
              {(provided, snapshot) => (
                <div className="list-container">
                  {kanban.forEach((index, list) => (
                    <div className="list" key={index}>
                      meu teste
                    </div>
                  ))}
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </header>
    </div>
  );
}

export default App;
