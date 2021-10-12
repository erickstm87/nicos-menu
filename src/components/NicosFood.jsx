import React, {Component} from 'react';
import Paper from '@mui/material/Paper';

import SalsaChoice from './SalsaChoice'
import MeatChoice from './MeatChoice'
import EntreeChoice from './EntreeChoice'
import DrinkChoice from './DrinkChoice'

class NicosFood extends Component {
    constructor(props) {
        super(props)
        this.state ={
            data: 0
        }
    }
    render() {
        return(
            <Paper sx={{ display: "flex", flexDirection: "column", width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}>
                <EntreeChoice data={this.state.sum}/><br/>
                <MeatChoice  /><br/>
                <SalsaChoice  /><br/>
                <DrinkChoice />
            </Paper>
        )
    }
}

export default NicosFood