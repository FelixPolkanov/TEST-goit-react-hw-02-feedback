

 const Statistic = ({ good, neutral, bad, total, positivePercentage})=>{
    return(
<div>
            
            <p>Good:{good}</p>
            <p>Neutral:{neutral}</p>
            <p>Bad:{bad}</p>
            <p>Total:{total}</p>
            <p> Positive feedback:
              {good || neutral || bad ? positivePercentage:'0' } %</p>
          </div>

)}
export default Statistic;


