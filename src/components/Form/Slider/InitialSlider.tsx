import Slider from '@material-ui/core/Slider';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import React, {useState, ChangeEvent} from 'react';
import {valueText} from './Slider.helpers';
import {CURRENCY, INITIAL_AMOUNT} from '../../../helpers/constants';
import {FieldElement} from '../FieldElement/FieldElement';
import {StyledInputWrapper} from '../Form.styled';
import {Field} from 'formik';

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
        value: 2000,
        label: `2 000 ${CURRENCY}`,
    },
    {
        value: 5000,
        label: `5 000 ${CURRENCY}`,
    },
    {
        value: 10000,
        label: `10 000 ${CURRENCY}`,
    },
];

export const InitialSlider: React.FC = () => {
    const classes = useStyles();
    const [value, setValue] = useState<number | string | Array<number | string>>(INITIAL_AMOUNT);

    const handleSliderChange = (event: any, newValue: number | number[]) => {
        setValue(newValue);
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 10000) {
            setValue(10000);
        }
    };

    return (
        <StyledInputWrapper>
            <div className={classes.root}>
                <Slider
                    defaultValue={INITIAL_AMOUNT}
                    getAriaValueText={valueText}
                    aria-labelledby="discrete-slider-custom"
                    step={1}
                    valueLabelDisplay="auto"
                    marks={marks}
                    onChange={handleSliderChange}
                    max={10000}
                />
            </div>
            <Field
                name="initialValue"
                value={value}
                component={FieldElement}
                unit={CURRENCY}
                onChange={handleInputChange}
                onBlur={handleBlur}
            />
        </StyledInputWrapper>
    );
};
export default InitialSlider;
