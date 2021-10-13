import React, {Component} from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import SalsaChoice from './SalsaChoice'
import MeatChoice from './MeatChoice'
import EntreeChoice from './EntreeChoice'
import DrinkChoice from './DrinkChoice'

class NicosFood extends Component {   
    render() {
        const onButtonClick = (() => {
            document.dispatchEvent(new CustomEvent('orderSubmitted', { detail: 'orderSubmitted' }))
        })
        const paperStyle = {
            "display": "flex",
            "flexDirection": "column",
            "width": "100%",
            "maxWidth": 400,
            "bgcolor": "background.paper"
        }
        return(
            <Paper style={paperStyle}>
                <EntreeChoice /><br/>
                <MeatChoice  /><br/>
                <SalsaChoice  /><br/>
                <DrinkChoice />
                <Button onClick={onButtonClick} variant="contained">Submit</Button>
            </Paper>
        )
    }
}

export default NicosFood