import React from 'react';
import {Field} from 'formik';
import {TextField} from '@material-ui/core';
import {useParams} from 'react-router';
import {FinalResults} from '../../helpers/types';

export const LinkItem: React.FC<FinalResults> = ({...basketResults}) => {
    const {id} = useParams();
    return <Field value={basketResults.id} name="id" type="text" placeholder="Link to your basket" as={TextField} />;
};
