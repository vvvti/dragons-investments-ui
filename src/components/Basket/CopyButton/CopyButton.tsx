import React from 'react';
import {Button} from '@material-ui/core';
import copy from 'copy-to-clipboard';
import {FinalResults} from '../../../helpers/types';
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
                    <Button
                        variant="contained"
                        type="submit"
                        color="primary"
                        onClick={event => {
                            event.preventDefault();
                            copy(`${document.documentURI}${basketResults.id}`);
                        }}
                    >
                        Copy link
                    </Button>
                )}
                <StyledLink>{basketResults.id && `${document.documentURI}${basketResults.id}`}</StyledLink>
            </ButtonWrapper>
        </LinkWrapper>
    );
};
