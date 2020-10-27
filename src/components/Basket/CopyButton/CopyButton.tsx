import React from 'react';
import {Button} from '@material-ui/core';
import copy from 'copy-to-clipboard';
import {FinalResults} from '../../../helpers/types';
import {API} from '../../../helpers/routes';
import {ButtonWrapper, LinkWrapper, StyledLink} from './CopyButton.styled';

export const CopyButton: React.FC<FinalResults> = ({...basketResults}) => {
    if (!basketResults.id) {
        basketResults.id = '';
    }
    return (
        <LinkWrapper>
            <b>Link to your basket</b>
            <ButtonWrapper>
                {basketResults.id && (
                    <Button variant="contained" type="submit" color="primary" onClick={() => copy(`${API}${basketResults.id}`)}>
                        Copy link
                    </Button>
                )}
                <StyledLink>{basketResults.id && `${API}${basketResults.id}`}</StyledLink>
            </ButtonWrapper>
        </LinkWrapper>
    );
};
