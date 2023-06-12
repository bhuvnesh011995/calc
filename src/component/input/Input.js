import "./Input.css"
import {useState} from "react"

export default function Input({a,b,setA,setB}){
    let [value,setValue] = useState("");
    let [operation,setOperation] = useState("")
   function calc(operation){
    switch(operation){
        case "add": return Number(a)+Number(value)
        case "sub": return Number(a)-Number(value)
        case "mul": return Number(a)*Number(value)
        case "div": return Number(a)/Number(value)
        default:return "some error";
    }
    }


    function handleButtonPress(e){
        let val = e.key;
        console.log(val)
        if(val==="Backspace") return setValue(value.slice(0,-1))
        if(val ==="+"){
            setA(value);
            setOperation("add")
            return setValue('')
        }
        if(val==="-"){
            setA(value);
            setOperation("sub")
            return setValue("")
        }
        if(val==="/"){
            setA(value);
            setOperation("div")
            return setValue("")
        }
        if(val==="*"){
            setA(value);
            setOperation("mul")
            return setValue("")
        }
        if(val==="="){
            setB(value);
            if(a&&operation) {
                setB(calc(operation))
                setValue("")
            }
            
        }
        else if(!Number(val)) return
        else setValue(value + val)
}

    return(
        <div className="input">
            <input onKeyUp={(e)=>handleButtonPress(e)} placeholder="enter key" className="input1" 
                value={value}
                ></input>
        </div>
    )
}