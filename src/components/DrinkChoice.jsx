import React, {Component} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

class DrinkChoice extends Component {
    constructor(props){
        super(props)
        this.state = {
            drinkSelected: false,
            price: 1.25
        }
    }

    render() {
        const handleChange = ((e) => {
            const deselect = !this.state.drinkSelected
            this.setState({drinkSelected: deselect})
        })
        const divStyle = {
            "display": "flex",
            "flexDirection": "row"
        }
        return (
            <FormControl component="fieldset">
            <FormLabel component="legend">Would you Like a Drink?</FormLabel>
            <RadioGroup
                aria-label="gender"
                name="radio-buttons-group"
            ></RadioGroup>
                    <div style={divStyle}>
                        <FormControlLabel onChange = {()=>handleChange()}
                            sx={{"padding-left": "30px"}}
                            value={"yes"}
                            control={<Radio />} 
                            label={"yes"} 
                            checked={this.state.drinkSelected === true}
                        />
                        <ul>{this.state.price}</ul>
                    </div>
                    <FormControlLabel onChange = {()=>handleChange()}
                        sx={{"padding-left": "30px"}}
                        value={"no"} 
                        control={<Radio />} 
                        label={"no"} 
                        checked={this.state.drinkSelected === false}
                    />
                    
                
            </FormControl>
        )
    }
}

export default DrinkChoice