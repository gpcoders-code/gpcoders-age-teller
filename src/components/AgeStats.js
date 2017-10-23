import React, { Component } from 'react';

import partyPopper from '../assets/party-popper.jpg';

class AgeStats extends Component {

    timeSince(date) {
        let today = new Date().getTime();
        let otherDate = new Date(date).getTime();
        let different = Math.abs(today - otherDate);

        let days = Math.floor(different / (1000*3600*24));
        let years = Math.floor(days/365);
        days -= years*365;
        let months = Math.floor(days/31);
        days -= months*31;

        return `Congrats You have wasted ${years} years, ${months} months, ${days} days on the earth`;
    }

    render() {
        return(
            <div>
                <h3>{this.props.date}</h3>
                <h4>{this.timeSince(this.props.date)}!</h4>
                <img src={partyPopper} alt="party-popper" className="partyPopper"/>
            </div>
        )
    }
}

export default AgeStats;