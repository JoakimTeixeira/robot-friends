import React, { Fragment, Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  // This is a function
  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    return (
      <Fragment>
        <main className="main">
          <header>
            <h1 className="header-title">RobotFriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
          </header>
          <section className="card-list">
            <CardList robots={filteredRobots} />
          </section>
        </main>
      </Fragment>
    );
  }
}

export default App;
