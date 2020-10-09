import Slider from '@material-ui/core/Slider';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import React from 'react';
import {valueText} from './Slider.helpers';
import {CURRENCY} from '../../../helpers/constants';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: 300,
        },
        margin: {
            height: theme.spacing(3),
        },
    }),
);

const marks = [
    {
        value: 0,
        label: `0 ${CURRENCY}`,
    },
    {
        value: 11,
        label: `25 ${CURRENCY}`,
    },
    {
        value: 33,
        label: `75 ${CURRENCY}`,
    },
    {
        value: 56,
        label: `125 ${CURRENCY}`,
    },
    {
        value: 78,
        label: `175 ${CURRENCY}`,
    },
    {
        value: 100,
        label: `225 ${CURRENCY}`,
    },
];

export const MonthlySlider: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Slider
                defaultValue={33}
                getAriaValueText={valueText}
                aria-labelledby="discrete-slider-custom"
                step={1}
                valueLabelDisplay="auto"
                marks={marks}
            />
        </div>
    );
};
export default MonthlySlider;
