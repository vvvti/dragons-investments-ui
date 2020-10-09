import Slider from '@material-ui/core/Slider';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import React from 'react';

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
        value: 10,
        label: '1%',
    },
    {
        value: 30,
        label: '3%',
    },
    {
        value: 50,
        label: '5%',
    },
    {
        value: 70,
        label: '7%',
    },
    {
        value: 90,
        label: '9%',
    },
    {
        value: 100,
        label: '10%',
    },
];

export const RateSlider: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Slider
                defaultValue={70}
                getAriaValueText={valueText}
                aria-labelledby="discrete-slider-custom"
                step={1}
                valueLabelDisplay="auto"
                marks={marks}
            />
        </div>
    );
};
export default RateSlider;
