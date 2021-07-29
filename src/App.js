import React from "react";
import data from "./data.json";
import Flights from "./components/Flights";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Delhi",
      flights: data.availableFlights,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Your Selected State is: " + this.state.value);
    event.preventDefault();
  }

  onClick(e) {}

  render() {
    return (
      <div className="container">
        <header>
          <a href="/">Book Flights</a>
        </header>
        <main>
          Book Flights, Hotels and Holiday Packages
          <h2>Select Cities</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              State 1:{" "}
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="Delhi">Delhi</option>
                <option value="Haryana">Haryana</option>
                <option value="Kerela">Kerela</option>
                <option value="Mumbai">Mumbai</option>
              </select>
            </label>{" "}
            <input type="submit" value="Submit" />
          </form>
          <button className="btn" onClick={this.onClick}>
            See flights
          </button>
          <div className="flights">
            <Flights flights={this.state.flights}></Flights>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
