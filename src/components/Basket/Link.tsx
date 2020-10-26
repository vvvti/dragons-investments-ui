import React from 'react';
import {Field} from 'formik';
import {TextField} from '@material-ui/core';
import {FinalResults} from '../../helpers/types';

export const LinkItem: React.FC<FinalResults> = ({...basketResults}) => {
    return <Field value={basketResults.id} name="id" type="text" placeholder="Link to your basket" as={TextField} />;
};
