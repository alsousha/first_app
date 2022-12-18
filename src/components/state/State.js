import { Component } from "react";
//to do as class
//In class all function as () =>{} 
//props передаются от родителя потомку, а state управляется самим компонентом
class State extends Component{

    
    //old version
    constructor(props){
        super(props)
        console.log("sdfsdfsdf")
        console.log(props); //{age:'35', name: 'SF'} 
    }

    //All code must be in function!!
    //console.log("bla-bla") -> Error!!!
    test(){
        console.log("bla-bla")
    }

    state = {
        text: 'Hello class',
        num: 100,
        text2: '',
        btnText : 'login'
    }
    changeText = () => {
        //Update only text of state
        this.setState({
            text: "new new text",
            
        })

        //to main referens!!!!!
        this.props.fun(100)
    }
    logOut = () => {
        // this.setState({
        //     text2: 'See you'
        // });

        //long version
        // this.setState((prevState)=>{
        //     //prevState is this.state
        //     let tmp ='';
        //     if(prevState.text2 ==='Hi you') tmp = 'See you';
        //     else tmp = 'Hi you';
        //     return{
        //         text2: tmp
        //     } 
        // })

        //short version
        // this.setState((prevState) => ({
        //     text2: prevState.text2 === 'Hi you' ? 'See you' : 'Hi you',
        //     btnText: prevState.btnText === 'logOut' ? 'Login' : 'logOut'
        // }))

    }
    //need!
    render(){
        let text = 'Hello world'

        const {text2, btnText} = this.state; //now we can use {text2} (old -> {this.state.text2})
        return(
            //return jsx
            <section>
                <p>{this.state.num}</p>
                <p>{this.state.text}</p>
                <p>{text}</p>
                <button onClick={this.changeText}>Click</button>
               <div> <p>{text2}</p></div>
                <button onClick={this.logOut}>{btnText}</button>
            </section>
            

        )
        

    }
}
//or to do as function
// function State(props){
//     let text = 'Hello world'
//         return(
//             //return jsx
            
//             <p>{text}</p>

//         )
// }
export default State;