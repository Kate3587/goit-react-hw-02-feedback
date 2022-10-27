import React from "react";
import {NonMessage} from '../Notification/Notification.styled'

const Notification = ({ message, children }) => (
    <>
        <NonMessage>{message}</NonMessage>
        {children}
    </>
);

export default Notification;