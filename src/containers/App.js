import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./app.css";
import Scroll from "../components/Scroll.js";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        setRobots(users);
      });
    console.log(count);
  }, [count]);

  const onSearchChange = (e) => {
    setSearchfield(e.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  if (!robots.length) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="app">
        <h1 className="title">RoboFriends</h1>
        <button onClick={() => setCount(count + 1)}>Click Me!</button>
        <SearchBox
          className="search-box"
          placeholder="search robot"
          searchChange={onSearchChange}
        />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
