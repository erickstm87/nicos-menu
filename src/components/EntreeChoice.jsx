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
       
        document.addEventListener("drinkSelected", (event) => {
            this.setState({sum: +this.state.sum + 1.25})           
        })

        document.addEventListener("drinkDeSelected", (event) => {
            this.setState({sum: +this.state.sum - 1.25})           
        })

        document.addEventListener("orderSubmitted", (event) => {
            alert("We have your order totalled as $" + this.state.sum + " it will be ready in 5")          
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
            this.setState({sum: price})
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