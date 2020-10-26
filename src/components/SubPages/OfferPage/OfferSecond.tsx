import React from 'react';
import Griffin from '../../../assets/Griffin.jpg';
import {OfferContainer, OfferImage} from './OfferPage.styled';

export const OfferSecond = () => {
    return (
        <OfferContainer>
            <div>
                <h2>Dragon Griffin</h2>
                <p>This standard package includes:</p>
                <ul>
                    <li>
                        <b>Insurance</b> - which covers two family members and one property
                    </li>
                    <li>
                        <b>Investment</b> - development of a short- and medium-term investment plans for any purposes
                    </li>
                    <li>
                        <b>Retirement</b> - plan your savings management so that you don't have to worry about your retirement in the future
                    </li>
                </ul>
                <p>Possibility of extension: Purchase of insurance for 2 movables</p>
            </div>
            <div>
                <OfferImage src={Griffin} alt="Dragon Griffin" />
            </div>
        </OfferContainer>
    );
};
