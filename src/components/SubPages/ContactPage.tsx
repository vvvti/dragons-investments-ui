import React from 'react';
import man from '../../assets/man.png';
import {StyledContainer, StyledTitle, StyledMan} from './SubPages.styled';

const ContactPage: React.FC = () => {
    return (
        <StyledContainer>
            <StyledTitle>Contact Details</StyledTitle>
            <StyledMan src={man} alt="Calculator" />
        </StyledContainer>
    );
};

export default ContactPage;
