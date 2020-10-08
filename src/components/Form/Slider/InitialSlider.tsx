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
        value: 20,
        label: '2 000$',
    },
    {
        value: 50,
        label: '5 000$',
    },
    {
        value: 100,
        label: '10 000$',
    },
];

function valuetext(value: number) {
    return `${value}$`;
}

export default function InitialSlider() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Slider
                defaultValue={20}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-custom"
                step={1}
                valueLabelDisplay="auto"
                marks={marks}
            />
        </div>
    );
}
