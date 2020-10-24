import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	setSearchField,
	requestRobotsPending,
	requestRobotsSuccess,
	requestRobotsFailed,
} from '../actions'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import MessageError from '../components/MessageError'
import './App.css'

const App = () => {
	const dispatch = useDispatch()
	const { searchField } = useSelector((state) => state.searchRobots)
	const { robots, status, error } = useSelector((state) => state.requestRobots)

	const fetchRobots = () => (dispatch) => {
		dispatch(requestRobotsPending())

		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				if (response.status >= 200 && response.status <= 299) {
					return response.json()
				} else {
					throw Error(response.statusText)
				}
			})
			.then((data) => {
				dispatch(requestRobotsSuccess(data))
			})
			.catch((error) => dispatch(requestRobotsFailed(error)))
	}

	const onSearchChange = (event) => {
		dispatch(setSearchField(event.target.value))
	}

	const filteredRobots = robots.filter((robot) => {
		return robot.name.toLowerCase().includes(searchField.toLowerCase())
	})

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchRobots())
		}
	}, [status, dispatch])

	if (status === 'loading') {
		return <h1 className="loading">Loading...</h1>
	}

	if (status === 'failed' || error) {
		return <MessageError />
	}

	return (
		<Fragment>
			<main className="main">
				<header className="header">
					<h1 className="header-title">RobotFriends</h1>
					<SearchBox searchChange={onSearchChange} />
				</header>
				<section className="card-list">
					<CardList robots={filteredRobots} />
				</section>
			</main>
		</Fragment>
	)
}

export default App
