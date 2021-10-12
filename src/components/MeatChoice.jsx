import React, {Component} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import db from '../firebase/init'
import { collection, getDocs } from 'firebase/firestore'

class MeatChoice extends Component {
    constructor(props){
        super(props)
        this.state = {
            meatEntries: [],
            eventSelected: ''
        }
    }
    componentDidMount() {
        getDocs(collection(db, "meat-choice")).then((result) => {
            result.forEach((doc) => {
                this.setState({meatEntries: [...this.state.meatEntries, doc.data()]})
            })
        })
    }
    render() {
        const handleChange = ((e) => {
            this.setState({eventSelected: e.target.value})
        })
        return (
            <FormControl component="fieldset">
            <FormLabel component="legend">Which Meat or Veg?</FormLabel>
            <RadioGroup
                aria-label="gender"
                name="radio-buttons-group"
            ></RadioGroup>
                {this.state.meatEntries.map((element, index) => (
                    <FormControlLabel onChange = {(e)=>handleChange(e)}
                        sx={{"padding-left": "30px"}}
                        key={index} 
                        value={element.animal} 
                        control={<Radio />} 
                        label={element.animal} 
                        checked={this.state.eventSelected === element.animal}
                    />
                ))}
            </FormControl>
        )
    }
}

export default MeatChoice