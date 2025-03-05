"use client"

import { useEffect, useState } from "react";

export default function House(props) {
    const [coinWin,setCoinWin] = useState(0 as number);
    const [valorVenta,setValorVenta] = useState(0 as number);
    const fee=10;

    useEffect(()=>{
        updateCoinWin();
        setInterval(updateCoinWin,1000);
    },[]);
    function updateCoinWin() {
        const dateNow = new Date();
        const secondsNow=dateNow.getTime()/1000 as number;

        const level=parseInt(props.level);
        const timeFromSpend=parseInt(props.timeFromSpend);
       
        const time= secondsNow - timeFromSpend;
        setCoinWin(time * fee * level);
    }
    return (
        <div className="border border-1 text-center col" style={{borderColor:props.color}}>
            <img className="img-fluid" src="/house1.jpg"></img>
            <h2>{props.name}</h2>
            <h4>Level: {props.level}</h4>
            <h6>BDWin: {coinWin}</h6>
            <h6>Owner: {props.owner}</h6>
            <h6>Precio de Venta: {props.value}</h6>
            <button onClick={()=>{
                props.buildsContract.payloadBuilding(props.tokenId);
                location.reload();
            }}>PayLoad</button>
            <button onClick={()=>{
                props.buildsContract.upLevelBuilding(props.tokenId);
                location.reload();
            }}>Level UP</button>
            <button onClick={() => {
                props.buildsContract.putBuildingOnSale(props.tokenId,valorVenta);
                location.reload();
            }}>Poner en Venta</button>
            <input id="valorVenta" type="number" onChange={(event)=>{
                setValorVenta(parseInt(event.target.value));
            }}></input>
        </div>
    )

}