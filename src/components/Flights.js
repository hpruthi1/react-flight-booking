import React, { Component } from "react";

export default class Flights extends Component {
  render() {
    return (
      <div>
        <ul className="availableFlights">
          {this.props.flights.map((flights) => (
            <li key={flights._id}>
              <div className="time">{flights.time}</div>
              <div className="price">{flights.price}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
