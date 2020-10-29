import React from 'react';
import {Button} from '@material-ui/core';
import copy from 'copy-to-clipboard';
import {FinalResults} from '../../../helpers/types';
import {ButtonWrapper, LinkWrapper, StyledLink} from './CopyButton.styled';
import {useParams} from 'react-router';

export const CopyButton: React.FC<FinalResults> = ({...basketResults}) => {
    const {id} = useParams();
    if (!basketResults.id) {
        basketResults.id = '';
    }

    return (
        <LinkWrapper>
            {id && (
                <>
                    <b>Link to your basket</b>

                    <ButtonWrapper>
                        {basketResults.id && (
                            <Button
                                variant="contained"
                                type="submit"
                                color="primary"
                                onClick={event => {
                                    event.preventDefault();
                                    copy(document.documentURI);
                                }}
                            >
                                Copy link
                            </Button>
                        )}

                        <StyledLink>{basketResults.id && document.documentURI}</StyledLink>
                    </ButtonWrapper>
                </>
            )}
        </LinkWrapper>
    );
};
