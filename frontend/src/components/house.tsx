"use client"

import { useEffect, useState } from "react";

export default function House(props) {
    const [coinWin,setCoinWin] = useState(0 as number);
    const fee=10;

    useEffect(()=>{
        updateCoinWin();
        setInterval(updateCoinWin,1000);
    },[]);
    function updateCoinWin() {
        const dateNow = new Date();
        let seconds=dateNow.getTime()/1000 as number;
        const timeFromSpend=props.timeFromSpend as number;
        console.log(timeFromSpend);
        const time= seconds as number;
        setCoinWin(time*fee);
    }
    return (
        <div>
            <h2>{props.name}</h2>
            <h4>{props.level}</h4>
            <h4>BDWin: {coinWin}</h4>
            <h4>{props.owner}</h4>
            <h5>{props.onSale}</h5>
            <h6>{props.value}</h6>
            <button onClick={()=>{
                props.buildsContract.payloadBuilding(props.tokenId);
                location.reload();
            }}>PayLoad</button>
            <button onClick={()=>{
                props.buildsContract.upLevelBuilding(props.tokenId);
                location.reload();
            }}>Level UP</button>
            <button onClick={() => {
                const elemento=document.getElementById('valorVenta') as HTMLInputElement;
                props.buildsContract.putBuildingOnSale(props.tokenId,elemento.value);
                location.reload();
            }}>Poner en Venta</button>
            <input id="valorVenta" type="number"></input>
        </div>
    )

}