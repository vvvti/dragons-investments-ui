import React from 'react';
import Draco from '../../../assets/Draco.jpg';
import {OfferContainer, OfferImage} from './OfferPage.styled';

export const OfferThird: React.FC = () => {
    return (
        <OfferContainer>
            <div>
                <h2>Dragon Dracon</h2>
                <p>This premium package includes:</p>
                <ul>
                    <li>
                        <b>Insurance</b> - which covers all families, all owned real estate and movables
                    </li>
                    <li>
                        <b>Investment</b> - development of a short-, medium- and long-term investment plans for any purposes
                    </li>
                    <li>
                        <b>Retirement</b> - plan your savings management so that you don't have to worry about your retirement in the future
                    </li>
                </ul>
            </div>
            <div>
                <OfferImage src={Draco} alt="Dragon Draco" />
            </div>
        </OfferContainer>
    );
};
