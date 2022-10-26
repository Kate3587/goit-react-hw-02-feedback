import React from "react";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
     <>
        <div>
        {options.map(item => (
            <button
                key={item.name}
                name={item.name}
                type="button"
                onClick={onLeaveFeedback}>
                {item.title}
            </button>
        ))}
        </div>
    </>
);

export default FeedbackOptions;