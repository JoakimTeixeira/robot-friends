import React, { Fragment, Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import MessageError from "../components/MessageError";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
      error: false,
    };
  }

  timeoutPromise(ms, promise) {
    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        reject(new Error());
      }, ms);
      promise.then(
        res => {
          clearTimeout(timeoutId);
          resolve(res);
        },
        err => {
          clearTimeout(timeoutId);
          reject(err);
        }
      );
    });
  }

  componentDidMount() {
    this.timeoutPromise(
      5000,
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => this.setState({ robots: users }))
    ).catch(err => {
      console.log("HTTP request error", err);
      this.setState({ error: true });
    });
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { robots, searchField, error } = this.state;

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (robots.length === 0) {
      return <h1 className="loading">Loading...</h1>;
    }

    if (error) {
      return <MessageError />;
    }

    return (
      <Fragment>
        <main className="main">
          <header className="header">
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
