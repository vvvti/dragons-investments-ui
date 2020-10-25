import React from 'react';
import {Field} from 'formik';
import {TextField} from '@material-ui/core';
import {useParams} from 'react-router';

export const LinkItem: React.FC = () => {
    const {id} = useParams();
    return <Field value={id} name="id" type="text" placeholder="Link to your basket" as={TextField} />;
};
