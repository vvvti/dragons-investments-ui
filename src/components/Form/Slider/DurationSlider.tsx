import Slider from '@material-ui/core/Slider';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import React from 'react';

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
        label: '0Y',
    },
    {
        value: 20,
        label: '2Y',
    },
    {
        value: 40,
        label: '4Y',
    },
    {
        value: 60,
        label: '6Y',
    },
    {
        value: 80,
        label: '8Y',
    },
    {
        value: 100,
        label: '10Y',
    },
];

function valuetext(value: number) {
    return `${value}$`;
}

export default function DurationSlider() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Slider
                defaultValue={20}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-custom"
                step={10}
                valueLabelDisplay="auto"
                marks={marks}
            />
        </div>
    );
}
