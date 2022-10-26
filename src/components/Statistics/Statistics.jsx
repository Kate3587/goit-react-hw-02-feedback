import React from "react";


const Statistics = ({good,neutral, bad, total, positivePercentage}) => (
        // this.state.visible &&
            <>
            <div>Good: {good} </div>
            <div>Neutral: {neutral}</div>
            <div>Bad: {bad}</div>
            <div>Total: {total}</div>
            <div>Positive Feedback: {positivePercentage} %</div>
        </>
);

export default Statistics;