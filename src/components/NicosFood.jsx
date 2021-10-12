import React, {Component} from 'react';
import Paper from '@mui/material/Paper';

import SalsaChoice from './SalsaChoice'
import MeatChoice from './MeatChoice'
import EntreeChoice from './EntreeChoice'

class NicosFood extends Component {
    render() {
        return(
            <Paper sx={{ display: "flex", flexDirection: "column", width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}>
                <EntreeChoice  /><br/>
                <MeatChoice  /><br/>
                <SalsaChoice  /><br/>
            </Paper>
        )
    }
}

export default NicosFood