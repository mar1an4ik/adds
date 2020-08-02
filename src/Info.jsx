import React from 'react';
import "./info.css"


export const Info=(props)=>{

    const back=()=>{
        props.setInfo(0);
    }

return (<div className={"box"}>

    <img onClick={back} className={"cancel"} width={"50px"}  height={"50px"} src={"https://static.thenounproject.com/png/15364-200.png"}></img>
    <img className={"box-img"} src={"https://image.flaticon.com/icons/png/512/43/43500.png"} width={"150px"} height={"190px"}></img>
    <h1>{props.title}</h1>
    <h5>{props.description}</h5>
    <h6>{props.date}</h6>

    </div>)

};