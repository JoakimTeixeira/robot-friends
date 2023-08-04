import "./MessageError.css";

const ApiError = ({ error }) => {
  return (
    <div className="error">
      <h1 className="error-title">{error ?? "Something went wrong..."}</h1>
      <p className="error-description">Try again in a few minutes</p>
    </div>
  );
};

export default ApiError;
