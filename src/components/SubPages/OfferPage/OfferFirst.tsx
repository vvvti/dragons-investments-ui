import React from 'react';
import Zu from '../../../assets/ZU.jpg';
import {OfferContainer, OfferImage} from './OfferPage.styled';

export const OfferFirst: React.FC = () => {
    return (
        <OfferContainer>
            <div>
                <h2>Dragon Zu</h2>
                <p>This basic package includes:</p>
                <ul>
                    <li>
                        <b>Insurance</b> - which covers one family member and one property
                    </li>
                    <li>
                        <b>Investment</b> - development of a medium-term investment plan
                    </li>
                    <li>
                        <b>Retirement</b> - plan your savings management so that you don't have to worry about your retirement in the future
                    </li>
                </ul>
            </div>
            <div>
                <OfferImage src={Zu} alt="Dragon Zu" />
            </div>
        </OfferContainer>
    );
};
