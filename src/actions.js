import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED,
} from './constants'

export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text,
})

export const requestRobotsPending = () => {
	return {
		type: REQUEST_ROBOTS_PENDING,
	}
}

export const requestRobotsSuccess = (robots) => {
	return {
		type: REQUEST_ROBOTS_SUCCESS,
		payload: robots,
	}
}

export const requestRobotsFailed = (error) => {
	return {
		type: REQUEST_ROBOTS_FAILED,
		payload: error,
	}
}
