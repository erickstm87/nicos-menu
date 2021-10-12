import React, {Component} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import db from '../firebase/init'
import { collection, getDocs } from 'firebase/firestore'


class EntreeChoice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            entreeEntries: [],
            eventSelected: '',
            sum: 0
        }
    }

    componentDidMount() {
        getDocs(collection(db, "entree-choice")).then((result) => {
            result.forEach((doc) => {
                this.setState({entreeEntries: [...this.state.entreeEntries, doc.data()]})
            })
        })
    }
    render() {
        const card = {
            "display": "flex",
            "flexDirection": "row"
        }
        const formStyle = {
            "paddingLeft": "30px"
        }
        const handleChange = ((e) => {
            this.setState({eventSelected: e.target.value})
        })
        const handlePriceChange = ((price) => {
            this.setState({sum: price}, () => {
                console.log("here is your value: ", this.state.sum);
            })
        })
        return(
            <FormControl component="fieldset">
            <FormLabel component="legend">Which Entree Would you Like?</FormLabel>
            <RadioGroup
                aria-label="gender"
                name="radio-buttons-group"
            ></RadioGroup>
                {this.state.entreeEntries.map((element, index) => (
                    <div onClick= {() => handlePriceChange(element.price)} key={index} style={card}>
                    <FormControlLabel onChange = {(e)=>handleChange(e)}
                        style={formStyle}
                        key={index} 
                        value={element.name}
                        control={<Radio />} 
                        label={element.name} 
                        checked={this.state.eventSelected === element.name}
                    />
                    <ul>{element.price}</ul>
                       
                    </div>
                ))}
            </FormControl>
        )
    }
}

export default EntreeChoice