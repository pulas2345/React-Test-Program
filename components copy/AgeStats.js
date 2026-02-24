import React, { Component } from "react";
import PartyPopper from "../assets/partypopper.jpg"

class AgeStats extends Component {
  timeSince = (date) => {
    let today = new Date().getTime();
    let other_date = new Date(date).getTime();
    let difference = Math.abs(today - other_date);

    let days = Math.floor(difference / 86400000);
    let years = Math.floor(difference / 31556952000);
    days -= Math.floor((years * 31556952000) / 86400000);
    let months = Math.floor(days / 31);
    days -= months * 31;

    return `${difference} miliseconds or ${years} years, ${months} months and ${days} days`;
  };

  render() {
    return (
      <div>
        <h2 style={{ color: "#00CCFF", marginTop: 70 }}>{this.props.date}</h2>
        <h3>Congrats on {this.timeSince(this.props.date)}</h3>
        <img style={{width: 250}} src={PartyPopper} alt="party-popper" />
      </div>
    );
  }
}

export default AgeStats;
