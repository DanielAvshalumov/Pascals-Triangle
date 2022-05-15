import react from "react"

function Secret(props) {
    
    function makeCoolFacts(facts) {
        const allNums = props.detailState.numbers;
        const factElements = []
        for(let i = 0; i < allNums.length; i++) {
            if(i !== allNums.length - 1) {
                facts += allNums[i].toString() + "+";
            } else {
                facts += allNums[i].toString() + "=";
            }
        }
        factElements.push((
        <div>
            <p>{facts}2<sup>{props.detailState.level}</sup></p>
        </div>
        ))
        const second = Math.pow(11,props.detailState.level);
        function binomialCoefficients(lev) {
            const left = <p key="l">(<var>x</var>+<var>y</var>)<sup>{lev}</sup>=</p>
            let xCount = lev;
            let yCount = 0;
            let rightArray = [];
            
            allNums.forEach((el,i) => {
                if(yCount === lev) {
                    rightArray.push(<p key={i}>{el}<var>x<sup>{xCount}</sup></var><var>y</var><sup>{yCount}</sup></p>)
                } else {
                    rightArray.push(<p key={i}>{el}<var>x<sup>{xCount}</sup></var><var>y</var><sup>{yCount}</sup>+</p>);
                }
                xCount--;
                yCount++;
            })
            return [left,rightArray];
        }
        factElements.push(
            <div>
                <p>11<sup>{props.detailState.level}</sup>={second}</p>
            </div>
        )
        factElements.push(binomialCoefficients(props.detailState.level));
        return factElements;
    }
    const coolFacts = makeCoolFacts("");
    return(
       <div id="secret">
           <div id="border"></div>
           <div>
               <h2>Some Cool Facts about level {props.detailState.level}</h2>
               <div id="border"></div>
               {makeCoolFacts("")}
           </div>
       </div> 
    )
}

export default Secret;