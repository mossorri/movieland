import { useEffect } from "react";
import "./App.css";

const API_URL = "https://www.omdbapi.com?apikey=ea715774";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data)
  };
  useEffect(() => {
    searchMovies('spider-man')
  }, []);


  return <div className="App">
    <h1>App</h1>
  </div>;
};

export default App;

// http://www.omdbapi.com/?i=tt3896198&apikey=ea715774
