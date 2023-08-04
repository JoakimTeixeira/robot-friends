import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { requestRobotsFailed, requestRobotsPending, requestRobotsSuccess, setSearchField } from "./actions";
import { CardList, MessageError, SearchBox } from "./components";

const App = () => {
  const dispatch = useDispatch();
  const { searchField } = useSelector((state) => state.searchRobots);
  const { robots, status, error } = useSelector((state) => state.requestRobots);

  const fetchRobots = () => async (dispatch) => {
    dispatch(requestRobotsPending());

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");

      if (response.ok) {
        const data = await response.json();
        dispatch(requestRobotsSuccess(data));
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      dispatch(requestRobotsFailed(error));
    }
  };

  const onSearchChange = (event) => {
    dispatch(setSearchField(event.target.value));
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchRobots());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <h1 className="loading">Loading...</h1>;
  }

  if (status === "failed" || error) {
    return <MessageError error="The API seems busy..." />;
  }

  return (
    <>
      <main className="main">
        <header className="header">
          <h1 className="header-title">RobotFriends</h1>
          <SearchBox searchChange={onSearchChange} />
        </header>
        <ErrorBoundary fallback={<MessageError />}>
          <section className="card-list">
            <CardList robots={filteredRobots} />
          </section>
        </ErrorBoundary>
      </main>
    </>
  );
};

export default App;
