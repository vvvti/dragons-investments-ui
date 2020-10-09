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
        value: 20,
        label: `2 000 ${CURRENCY}`,
    },
    {
        value: 50,
        label: `5 000 ${CURRENCY}`,
    },
    {
        value: 100,
        label: `10 000 ${CURRENCY}`,
    },
];

export const InitialSlider: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Slider
                defaultValue={20}
                getAriaValueText={valueText}
                aria-labelledby="discrete-slider-custom"
                step={1}
                valueLabelDisplay="auto"
                marks={marks}
            />
        </div>
    );
};
export default InitialSlider;
