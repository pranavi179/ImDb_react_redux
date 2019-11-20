import React , { Component } from 'react';
import { Redirect } from "react-router-dom"

class WatchList extends Component {
    state={
        WatchList:WatchList,
        redirect:true

    }
 
    render() {
        const {redirect}=this.state;
            if(redirect){
                return (
                    <div>

                   
                  <h2>gvf</h2>
                

                <Redirect to ={{pathname:"/view", state:{from :"/watchlist"}}}/>
           
                </div>
                );
            }
            
    }
}

export default WatchList;