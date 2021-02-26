import React,{Component} from 'react';
import App from '../App';
import UserApp from '../UserApp';
import  HighScore from  '../HighScore';
import Users from '../Users';





class Apper extends Component{

    constructor(props)
    {
        super(props);
        this.state= {
            count:0,
            overTen:false
            
        }
        
    }
    
    handleClick =()=>{
       this.setState({count: this.state.count+1});
        
    }
    
    resetCount =(e)=> {
        //e.preventDefault();
        this.setState({
            
            count:0,
            overTen:false
        });
    }
    
    
    componentDidUpdate(props,state){
        
        if(this.state.count>10 && this.state.count != state.props.count){
            
            
            this.setSate({overTen:true}); 
            console.log("Updated over ten");
        }
       
    }

    
    render(){
         let {count}= this.state;
         return(
             <div class = "row">
                 <div class ="column">
                    <h1>You clicked the button{count} times</h1>
                       <HighScore
                        overTen = {this.state.overTen}  
                        onReset ={(e)=>this.resetCount(e)}
                        />
                
                       <p></p>
                    <span>
                         <button onClick ={()=> this.handleClick()}>click me</button>
                    </span>

                         <p></p>
                 </div>
                 <div class = "column">
                       <App/>
                    <p></p>
                 </div>
                    <div class ="column">
                        <UserApp/>
                        <p></p>
                     </div>
                     <div class ="coumn">
                         <Users/>
                         <p></p>
                     </div>
                    
         </div>
         );
    }

}
export default Apper;
