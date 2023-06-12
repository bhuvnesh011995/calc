import React from "react";
import Header from "./../component/header/Header";
import "./Container.css"
import Box from "../component/box/Box"


export default function Container({a,b,setA,setB}){
    return(
        <div className="container">
            <Header />
        <Box a={a} b={b} setA={setA} setB={setB} />
        </div>
        
    )
}