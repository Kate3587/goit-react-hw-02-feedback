import React from "react";
import {SectionTitle} from '../Section/Section.styled'

const Section = ({ title, children }) => {
    return (
        <>
        <SectionTitle>{title}</SectionTitle>
            { children }
        </> 
    )};

export default Section;