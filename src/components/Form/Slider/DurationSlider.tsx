import Slider from '@material-ui/core/Slider';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import React from 'react';
import {valueText} from './Slider.helpers';
import {INITIAL_PERIOD} from '../../../helpers/constants';

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
        value: 2,
        label: '2Y',
    },
    {
        value: 4,
        label: '4Y',
    },
    {
        value: 6,
        label: '6Y',
    },
    {
        value: 8,
        label: '8Y',
    },
    {
        value: 10,
        label: '10Y',
    },
];

export const DurationSlider: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Slider
                defaultValue={INITIAL_PERIOD}
                getAriaValueText={valueText}
                aria-labelledby="discrete-slider-custom"
                step={1}
                valueLabelDisplay="auto"
                marks={marks}
                max={10}
            />
        </div>
    );
};
export default DurationSlider;
