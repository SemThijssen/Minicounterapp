import React from "react";
import "./CounterCard.css";
class CounterCard extends React.Component{

    constructor(){
        super()
        this.state ={number:0};
    }
   increase = () => {
    this.state.number += 1;
    }
    
   decrease = () =>{
      this.state.number -= 1;
    }
    render(){ return(
        <article class ="counter">
<section class="counter__number">
<h1 class="counter__value" id="js--number">{this.state.number}</h1>
</section>
<section class="counter__buttons">
    
<button onClick={this.decrease}className="counter__button counter__button--Decrease">Decrease</button>
<button onClick={this.increase}className="counter__button counter__button--Increase">Increase</button>
</section>
        </article>
    );}
   
       
    
}
export default CounterCard;