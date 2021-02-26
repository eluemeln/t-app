import React,{Component} from 'react';




class HighScore extends Component{
    
    render(){
        
        
            return(
                <div>
                    <h3>You beat high score of 10</h3>
                    <button onClick={(e)=>this.props.onReset(e)}>Reset</button>
                </div>

            )
        
    
            
            
        }
        
    } 
    


export default HighScore;