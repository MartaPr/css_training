import React from 'react';
import Button from '@material-ui/core/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCat } from '@fortawesome/free-solid-svg-icons'

const OfferButton = (props) => {
    return (
        <Button
            variant="contained"
            size="small"
            href={props.link}
            style={{
                background: props.bck,
                color: props.color
            }}
        >
            <FontAwesomeIcon 
            className="icon_image"
            icon={faCat} />
            {props.text}
        </Button>
    );
};

export default OfferButton;