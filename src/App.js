import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoList from "./component/TodoList";


function App() {
  return (
    <div className="container">
     <div className="row">
       <div className="col-10 mx-auto col-md-8 mt-4">
      
      <TodoList/>
       </div>
     </div>
     
    </div>
  );
}

export default App;
