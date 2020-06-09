import React, { Fragment, Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: "",
    };
  }

  onSearchChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <Fragment>
        <div className="tc">
          <header>
            <h1>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
          </header>
          <section>
            <CardList robots={this.state.robots} />
          </section>
        </div>
      </Fragment>
    );
  }
}

export default App;
