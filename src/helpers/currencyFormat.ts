import {ReactText} from 'react';
import {currencyBasket} from './constants';

export const currencyFormat = (label: string | number | ReactText[], currencyValue: string) => {
    if (currencyValue === currencyBasket.BRITISH_POUND) {
        return `${currencyValue} ${label.toLocaleString('en-IN')}`;
    } else {
        return `${label.toLocaleString('en-IN')} ${currencyValue}`;
    }
};
