import React from 'react';
import {riskBasket} from '../../../helpers/constants';
import {RiskContainer} from './RiskComponent.styled';
import {Aggressive} from './RiskDetails/Aggressive';
import {Conservative} from './RiskDetails/Conservative';
import {Moderate} from './RiskDetails/Moderate';
import {VeryAggressive} from './RiskDetails/VeryAggressive';
import {VeryConservative} from './RiskDetails/VeryConservative';

export interface RiskProps {
    riskValue: number;
}

export const RiskDetails: React.FC<RiskProps> = ({riskValue}) => {
    return (
        <RiskContainer>
            {riskValue === riskBasket.VERY_CONSERVATIVE && <VeryConservative />}
            {riskValue === riskBasket.CONSERVATIVE && <Conservative />}
            {riskValue === riskBasket.MODERATE && <Moderate />}
            {riskValue === riskBasket.AGGRESSIVE && <Aggressive />}
            {riskValue === riskBasket.VERY_AGGRESIVE && <VeryAggressive />}
        </RiskContainer>
    );
};
