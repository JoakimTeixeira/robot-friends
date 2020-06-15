import React, { Fragment, Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: "",
    };
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
        <div className="tc">
          <header>
            <h1 className="f1">RobotFriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
          </header>
          <section>
            <CardList robots={filteredRobots} />
          </section>
        </div>
      </Fragment>
    );
  }
}

export default App;
