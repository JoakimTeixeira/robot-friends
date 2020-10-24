import React, { Fragment, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchField } from '../actions'
import { useQuery } from 'react-query'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import MessageError from '../components/MessageError'
import { getUsers } from '../services/userService'
import './App.css'

const App = () => {
	const dispatch = useDispatch()
	const { searchField } = useSelector((state) => state)
	const [robots, setRobots] = useState([])
	const { data, status } = useQuery('user', getUsers)

	useEffect(() => {
		if (status === 'success') setRobots(data)
	}, [status, data])

	if (status === 'loading') {
		return <h1 className="loading">Loading...</h1>
	}

	if (status === 'error') {
		return <MessageError />
	}

	if (data) {
		const onSearchChange = (event) => {
			dispatch(setSearchField(event.target.value))
		}

		const filteredRobots = robots.filter((robot) => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		})

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
}

export default App
