import React from "react";
import Button from '@material-ui/core/Button';



export const ButtonComponent = (props) =>{
return(
    <div>
        <Button variant="contained" color="primary" type="submit" onClick={props.addTodosHandler}>
        Submit-Todo
        </Button>
    </div>
)

}