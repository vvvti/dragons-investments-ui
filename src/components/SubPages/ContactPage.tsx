import React from 'react';
import man from '../../assets/man.png';
import {StyledContainer, StyledTitle, StyledMan, ContactItem} from './SubPages.styled';

const ContactPage: React.FC = () => {
    return (
        <StyledContainer>
            <StyledTitle>Contact Details</StyledTitle>
            <ContactItem>
                <h4>Contact Customer Support:</h4>
                <p>fintech@challenge.com</p>
                <h4>Talk to us:</h4>
                <p>(+44) 7911-123-456</p>
            </ContactItem>
            <StyledMan src={man} alt="Calculator" />
        </StyledContainer>
    );
};

export default ContactPage;
