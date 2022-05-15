import React, {useState, useEffect } from "react";
import Secret from "./Secrets";

function Triangle(props) {
    const level = props.height;
    const [details, setDetails] = useState({
        level: 0,
        length: 0,
        numbers: []
    });
    function createPascal(x) {
        const triangle = [[0,1,0]];
        for(let i = 1 ; i < x; i++) {
            const lastLevel = triangle[i-1];
            let newLevel = [0];
            for(let j = 0; j < lastLevel.length - 1; j++) {
                newLevel.push(lastLevel[j]+lastLevel[j+1]);
            }
            newLevel.push(0);
            triangle.push(newLevel);
        }

        return triangle;
    }
    
    const triangleArray = createPascal(level);

    function Log2n(n) {
        return (n > 1) ? 1 + Log2n(n/2) : 0;
    }

    function createInfo(event) {
        const num = event.target.innerHTML.split(" ");
        const len = num.length - 1;
        const numArr = [];
        num.pop();
        num.forEach(el => {
            numArr.push(el);
        })
        let total = 0;
        numArr.forEach( x => {
            let num = parseInt(x);
            total += num;
        });
        const lev = Log2n(total);
        setDetails({
            level: lev,
            length: len,
            numbers: num
        });
    }

    function makeTriangle(arr) {
        
        const newTriangle = arr.map((element,key) => 
           { 
            let random = Math.floor(Math.random()*16777215).toString(16);
            
            let randomStyle = {
                backgroundColor: "#"+`${random}`
            }

            return (
            <div key={key} style={randomStyle} className="level" onClick={createInfo} >
                {element.map(item => {
                    if(item !== 0) {
                        return item+" ";
                    }
                })}
            </div>); });
        return newTriangle;
    }

    const triangle = makeTriangle(triangleArray);

    triangleArray.forEach(element => {
        element.pop();
        element.shift();
    })

    

    return (
        <div className="triangle-container">
            {triangle}
            <div>
                <Secret
                detailState={details} />
            </div>
        </div>
    )
}

export default Triangle;