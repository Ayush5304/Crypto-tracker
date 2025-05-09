import React from 'react';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert" style={{ 
      padding: "20px", 
      margin: "20px", 
      border: "1px solid red",
      borderRadius: "8px",
      backgroundColor: "#ffebee" 
    }}>
      <h2>Something went wrong</h2>
      <p style={{ color: "red" }}>{error.message}</p>
      <button 
        onClick={resetErrorBoundary}
        style={{
          padding: "8px 16px",
          backgroundColor: "#2196f3",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        Try again
      </button>
    </div>
  );
};

export default ErrorFallback;
