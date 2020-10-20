import React from 'react';
import {Conservative} from './RiskDetails/Conservative';
import {Moderate} from './RiskDetails/Moderate';
import {VeryConservative} from './RiskDetails/VeryConservative';
import {Aggressive} from './RiskDetails/Aggressive';
import {VeryAggressive} from './RiskDetails/VeryAggressive';
import {RiskContainer} from './RiskComponent.styled';

export interface RiskProps {
    riskValue: number;
}

export const RiskDetails: React.FC<RiskProps> = ({riskValue}) => {
    console.log(riskValue);
    let component = null;
    switch (riskValue) {
        case 0:
            component = <VeryConservative />;
            break;
        case 1:
            component = <Conservative />;
            break;
        case 2:
            component = <Moderate />;
            break;
        case 3:
            component = <Aggressive />;
            break;
        case 4:
            component = <VeryAggressive />;
            break;
        default:
            component = <Moderate />;
    }
    return <RiskContainer>{component}</RiskContainer>;
};
