import React, { Component } from "react";

class InputDisplay extends Component {
  constructor(props) {
    super(props);
    // Step 1: Initialize state
    this.state = {
      inputValue: "", // To store the input value
    };
  }

  // Step 2: Handle input change
  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value }); // Update state with input value
  };

  // Step 3: Handle form submission
  handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page
    alert(`Form submitted with value: ${this.state.inputValue}`);
  };

  render() {
    return (
      <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif", marginTop: "50px" }}>
        <h2>Input Display Form</h2>
        {/* Step 4: Form with input field */}
        <form onSubmit={this.handleSubmit} style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Type something..."
            value={this.state.inputValue} // Controlled input
            onChange={this.handleInputChange} // Update state on input change
            style={{
              padding: "10px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginRight: "10px",
              width: "300px",
            }}
          />
          {/* Submit Button */}
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
        {/* Step 5: Display the input value */}
        <p style={{ fontSize: "18px", color: "#333" }}>
          <strong>Typed Value:</strong> {this.state.inputValue || "Nothing yet!"}
        </p>
      </div>
    );
  }
}

export default InputDisplay;
