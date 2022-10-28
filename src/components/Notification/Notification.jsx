import React from "react";
import {NonMessage} from '../Notification/Notification.styled'

const Notification = ({ message, onHide}) => (
    <>
        <NonMessage onClick={onHide}>{message}</NonMessage>
    </>
);

export default Notification;