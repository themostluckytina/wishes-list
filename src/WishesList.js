import { Component } from "react";
import fish from './fish.jpg';


export class WishesList extends Component{
    state ={
        userInput: '',
        wishes: []
    }
    onChangeEvent(e){
        this.setState({userInput: e})
    }
    addBtn(input) {
        if(input === ''){
            alert('Please enter your wish')
        }
        else{
            let listWishes = this.state.wishes;
        listWishes.push(input);
        this.setState({wishes: listWishes, userInput: ''})
        }
       
        
    }
    crossedWord(event){
        const li = event.target;
        li.classList.toggle('crossed')
    }

    deleteList() {
        let listWishes = this.state.wishes;
        listWishes = [];
        this.setState({wishes: listWishes})

    }

    OnFormSubmit(e){
        e.preventDefault()
    }
   

    render() {
        return(
            <div className="container">

                <form onSubmit={this.OnFormSubmit}>

                <div className="top">
                    <h1>ЛИСТ ЖЕЛАНИЙ</h1>
                    <p>составь список своих заветных желаний  </p>
                    <p>и вычеркивай их  по мере осуществления  </p>
                </div>

                <div className="wishes">
                    <input type="text"
                    placeholder="Напиши свое желание "
                    onChange={(e)=>{this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput}  />

                    <button className="btn" onClick={()=>this.addBtn(this.state.userInput)}> + </button>
                </div>

                <div className="top">
                    <img src={fish} width={120} alt="pic" />
                </div>
            
                <ul>
                    {this.state.wishes.map((item,index)=>(<li  onClick={this.crossedWord} key={index} >{item} </li>) )}
                </ul>
            
                <div className="top">
                    <button className="delBtn" onClick={()=>this.deleteList(this.state.userInput)}>Удалить список</button>
                </div>

            </form>

            </div>
        )
    }
}