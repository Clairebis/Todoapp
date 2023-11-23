// Importing necessary dependencies from React, Firebase, and CSS file
import { useEffect, useState } from "react";
import "../App.css";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

// Functional component named Todo
export default function Todo() {
  // State variables for managing input value and list of todos
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // Function to add a new todo item to the Firebase collection
  const addTodo = async (e) => {
    e.preventDefault();

    try {
      // Adding a new document to the 'todos' collection in Firebase
      const docRef = await addDoc(collection(db, "todos"), {
        todo: todo,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      // Handling errors if document addition fails
      console.error("Error adding document: ", e);
    }
  };

  // Function to fetch todos from Firebase and update the component state
  const fetchPost = async () => {
    // Fetching documents from the 'todos' collection in Firebase
    await getDocs(collection(db, "todos")).then((querySnapshot) => {
      // Mapping the fetched documents and adding an 'id' property to each document object
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      // Updating the component state with the new data
      setTodos(newData);
      console.log(todos, newData);
    });
  };

  // useEffect hook to fetch todos when the component mounts
  useEffect(() => {
    fetchPost();
  }, []);

  // JSX structure for rendering the Todo component
  return (
    <section className="todo-container">
      <div className="todo">
        <h1 className="header">Todo-App</h1>

        <div>
          <div>
            {/* Input field for entering a new todo */}
            <input
              type="text"
              placeholder="What do you have to do today?"
              onChange={(e) => setTodo(e.target.value)}
            />
          </div>

          <div className="btn-container">
            {/* Button to submit the new todo */}
            <button type="submit" className="btn" onClick={addTodo}>
              Submit
            </button>
          </div>
        </div>

        <div className="todo-content">
          {/* Displaying the list of todos */}
          {todos?.map((todo, i) => (
            <p key={i}>{todo.todo}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
