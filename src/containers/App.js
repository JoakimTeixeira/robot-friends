import React, { Fragment, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchField } from '../actions'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import MessageError from '../components/MessageError'
import './App.css'

const App = () => {
	const dispatch = useDispatch()
	const { searchField } = useSelector((state) => state)
	const [robots, setRobots] = useState([])
	const [error, setError] = useState(false)

	const timeoutPromise = (ms, promise) => {
		return new Promise((resolve, reject) => {
			const timeoutId = setTimeout(() => {
				reject(new Error())
			}, ms)

			promise.then(
				(res) => {
					clearTimeout(timeoutId)
					resolve(res)
				},
				(err) => {
					clearTimeout(timeoutId)
					reject(err)
				}
			)
		})
	}

	useEffect(() => {
		timeoutPromise(
			5000,
			fetch('https://jsonplaceholder.typicode.com/users')
				.then((response) => response.json())
				.then((users) => setRobots(users))
		).catch((err) => {
			console.log('HTTP request error', err)
			setError(true)
		})
	}, [])

	const onSearchChange = (event) => {
		dispatch(setSearchField(event.target.value))
	}

	const filteredRobots = robots.filter((robot) => {
		return robot.name.toLowerCase().includes(searchField.toLowerCase())
	})

	if (robots.length === 0) {
		return <h1 className="loading">Loading...</h1>
	}

	if (error) {
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
