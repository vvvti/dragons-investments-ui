import Slider from '@material-ui/core/Slider';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import React from 'react';
import {INITIAL_ANNUAL} from '../../../helpers/constants';

import {valueText} from './Slider.helpers';

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
        label: '0%',
    },
    {
        value: 1,
        label: '1%',
    },
    {
        value: 3,
        label: '3%',
    },
    {
        value: 5,
        label: '5%',
    },
    {
        value: 7,
        label: '7%',
    },
    {
        value: 9,
        label: '9%',
    },
    {
        value: 10,
        label: '10%',
    },
];

export const RateSlider: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Slider
                defaultValue={INITIAL_ANNUAL}
                getAriaValueText={valueText}
                aria-labelledby="discrete-slider-custom"
                step={0.1}
                valueLabelDisplay="auto"
                marks={marks}
            />
        </div>
    );
};
export default RateSlider;
