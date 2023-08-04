import './MessageError.css'

const ApiError = ({ error }) => {
	return (
		<div className="error">
			<h1 className="error-title">The API seems busy...</h1>
			<p className="error-description">Try again in a few minutes</p>
			<br />
			<p>{error}</p>
		</div>
	)
}

export default ApiError
