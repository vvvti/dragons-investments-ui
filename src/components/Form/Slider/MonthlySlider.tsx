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
        label: '0$',
    },
    {
        value: 11,
        label: '25$',
    },
    {
        value: 33,
        label: '75$',
    },
    {
        value: 56,
        label: '125$',
    },
    {
        value: 78,
        label: '175$',
    },
    {
        value: 100,
        label: '225$',
    },
];

function valuetext(value: number) {
    return `${value}$`;
}

export default function MonthlySlider() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Slider
                defaultValue={33}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-custom"
                step={1}
                valueLabelDisplay="auto"
                marks={marks}
            />
        </div>
    );
}
