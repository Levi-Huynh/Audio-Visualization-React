import React, { Component } from 'react';
import moment from 'moment';


class Animal extends Component {
constructor(props) {
    super(props);
    this.state={
        flag: 3,
        // chart: {
        //     points: 100,
        //     date: new Date()

        // },
        points: 100,
        date: new Date()
    }
}



 componentWillUnmount(){
  

 }

  
Setup(){
   
  setInterval( ()=>this.StartTimerLowThresh, 3000);
    console.log(this.state.flag);

}


StartTimerLowThresh(){
    //  setTimeout(this.lowThresh, 2000);  
    const{audioData} = this.props;    
    // console.log(audioData[0]);

    // function loop(audioData) {
    //     var i = 0;
    //     var ref = setInterval(() => {
    //         if(audioData[i] === 128 || 127) {
    //             this.setState({
    //                 flag: 2,
                  
    //             });
    //         }else {
    //             this.setState(prevState)({
    //                 flag:1,
    //                 points: prevState.points -5
    //             });
    //         }

    //     }, 6000);
    


   
}

StopTimerLowThres(){
    clearInterval(this.StartmediumThresh);
    console.log("flag unmnount:" , this.state.flag);
}


StartmediumThresh() {
    const{audioData} = this.props; 
    for (const item of audioData){  
   this.timer = setInterval(() => {
    if(item > 129) {
  
        this.setState(prevState => {
            let newChart= {points: prevState.points-5, date: new Date()};
          return {
            flag: 2,
        //   chart: {...prevState.chart, points: prevState.points -5, date: new Date()}
        points: prevState.points -5,
        date: new Date()

          };
        });
        } else  {
                this.setState({flag: 1});
                
         
        
                }}, 3000
   );

             
}
console.log("running:", this.state.flag, this.state.points, this.state.date);

}




    
  render() {
   console.log("outside function:", this.state.flag, this.state.points, this.state.date);
//    console.log("outside function:", this.state.chart);
    return <div>
       
        <button onClick={this.StartmediumThresh.bind(this)}>Start Low Thres Timer</button>
        <button onClick={this.StopTimerLowThres.bind(this)}>Stop Low Thres Timer</button>
            <h3>{this.state.points}</h3>
            <div className={this.state.flag===2? "Bear" : null}>

            </div>

        </div>
  }
}

export default Animal;