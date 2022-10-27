import React from "react";

const Notification = ({ message, children }) => (
    <>
        <p>{message}</p>
        {children}
    </>
);

export default Notification;