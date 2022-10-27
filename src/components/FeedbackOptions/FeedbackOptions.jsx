import React from "react";
import {OpinionWrapper, OpinionBtn} from '../FeedbackOptions/FeedbackOptions.styled'

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
     <>
        <OpinionWrapper>
        {options.map(item => (
            <OpinionBtn
                key={item.name}
                name={item.name}
                type="button"
                onClick={onLeaveFeedback}>
                {item.title}
            </OpinionBtn>
        ))}
        </OpinionWrapper>
    </>
);

export default FeedbackOptions;