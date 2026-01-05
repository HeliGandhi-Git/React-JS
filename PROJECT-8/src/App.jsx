import React from "react";

function App() {
  const [todo, setTodo] = React.useState("");
  const [result, setResult] = React.useState([]);


  const addTodo = () => {
    localStorage.setItem("list", JSON.stringify([...result, todo]));
    setResult([...result, todo]);

    setTodo("");
  };

  React.useEffect(() => {
    let data = localStorage.getItem("list");
    if (data != null) {
      setResult(JSON.parse(data));
    }
  }, []);

  const deleteTodo = (index) => {
    result.splice(index, 1);

    localStorage.setItem("list", JSON.stringify([...result]));
    setResult([...result]);
  };
  const editTodo = (index) => {
    

     let pickTodo = result[index]
     setTodo(pickTodo)
     deleteTodo(index)
  };

  return (
    <div>
      <h3>task : Todo Application</h3>
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter Todo list"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <input type="button" value="ADD Todo" onClick={addTodo} /> <br />
      {result.map((value, index) => {
        return (
          <div key={index}>
            <li>
              {index + 1}-{value}{" "}
              <input
                type="button"
                value="Delete"
                onClick={() => deleteTodo(index)}
              />
              <input
                type="button"
                value="Edit"
                onClick={() => editTodo(index)}
              />
            </li>
          </div>
        );
      })}
    </div>
  );
}

export default App;
