import "./Box.css";
import Input from "../input/Input";
import Output from "../output/Output";
import Keyboard from "../Keyboard/Keyboard"


export default function Box({a,b,setA,setB}){
    return(
        <div className="box">
            <Input a={a} b={b} setA={setA} setB={setB}  />
            <Output a={a} b={b} setA={setA} setB={setB} />
            <Keyboard />
        </div>
    )
}