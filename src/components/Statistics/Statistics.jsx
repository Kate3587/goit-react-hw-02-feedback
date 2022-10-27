import React from "react";
import {StatItem} from '../Statistics/Statistics.styled'


const Statistics = ({good,neutral, bad, total, positivePercentage}) => (
        // this.state.visible ||
    <>
        <StatItem>Good: {good} </StatItem>
        <StatItem>Neutral: {neutral}</StatItem>
        <StatItem>Bad: {bad}</StatItem>
        <StatItem>Total: {total}</StatItem>
        <StatItem>Positive Feedback: {positivePercentage} %</StatItem>
        </> 
);

export default Statistics;