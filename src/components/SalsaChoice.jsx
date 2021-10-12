import React, {Component} from 'react';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import db from '../firebase/init'
import { collection, getDocs } from 'firebase/firestore'

class SalsaChoice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            salsaEntries: [],
            eventSelected: ''
        }
    }

    componentDidMount() {
        getDocs(collection(db, "salsa-choice")).then((result) => {
            result.forEach((doc) => {
                this.setState({salsaEntries: [...this.state.salsaEntries, doc.data()]})
            })
        })
    }
    render() {
        const handleChange = ((e) => {
            this.setState({eventSelected: e.target.value})
        })
        return( 
        <FormControl component="fieldset">
            <FormLabel component="legend">Would You Like Salsa?</FormLabel>
            <RadioGroup
                aria-label="gender"
                name="radio-buttons-group"
            ></RadioGroup>
            {this.state.salsaEntries.map((element, index) => (
                <FormControlLabel onChange = {(e)=>handleChange(e)}
                    sx={{"padding-left": "30px"}} 
                    key={index} 
                    value={element.type} 
                    control={<Radio />} 
                    label={element.type} 
                    checked={this.state.eventSelected === element.type}
                />
            ))}
        </FormControl>
        )
    }
}

export default SalsaChoice