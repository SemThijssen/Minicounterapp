
import "./CounterCard.css"
const CounterCard = () => {
    return(
        <article class ="counter">
<section class="counter__number">
<h1 class="counter__value">0</h1>
</section>
<section class="counter__buttons">
    
<button className="counter__button">Decrease</button>
<button className="counter__button">Increase</button>
</section>
        </article>
    );
       
    
}
export default CounterCard;