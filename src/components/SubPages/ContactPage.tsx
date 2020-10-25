import React from 'react';
import man from '../../assets/man.png';
import {ContactItem, ContactWrapper, StyledContainer, StyledMan, StyledTitle} from './SubPages.styled';

export const ContactPage: React.FC = () => {
    return (
        <StyledContainer>
            <StyledTitle>Contact Details</StyledTitle>
            <ContactWrapper>
                <ContactItem>
                    <h4>Contact Customer Support:</h4>
                    <p>fintech@challenge.com</p>
                    <h4>Talk to us:</h4>
                    <p>(+44) 7911-123-456</p>
                </ContactItem>
                <StyledMan src={man} alt="Calculator" />
            </ContactWrapper>
        </StyledContainer>
    );
};
