import Slider from '@material-ui/core/Slider';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import React, {useState} from 'react';
import {valueText} from './Slider.helpers';
import {CURRENCY, INITIAL_MONTHLY} from '../../../helpers/constants';

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
        value: 25,
        label: `25 ${CURRENCY}`,
    },
    {
        value: 75,
        label: `75 ${CURRENCY}`,
    },
    {
        value: 125,
        label: `125 ${CURRENCY}`,
    },
    {
        value: 175,
        label: `175 ${CURRENCY}`,
    },
    {
        value: 225,
        label: `225 ${CURRENCY}`,
    },
];

export const MonthlySlider: React.FC = () => {
    const classes = useStyles();
    const [value, setValue] = useState<number | string | Array<number | string>>(INITIAL_MONTHLY);

    const handleSliderChange = (event: any, newValue: number | number[]) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Slider
                defaultValue={INITIAL_MONTHLY}
                getAriaValueText={valueText}
                aria-labelledby="discrete-slider-custom"
                step={1}
                valueLabelDisplay="auto"
                marks={marks}
                onChange={handleSliderChange}
                max={225}
            />
        </div>
    );
};
export default MonthlySlider;
