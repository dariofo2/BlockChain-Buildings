"use client"

import { useEffect, useState } from "react";
import { Building, buildingsContract } from "../BuildingsFront/contractBuildings";
import House from "./house";

export default function Account (props:any) {
    return (
        <div>
            <h1>Address: {props.address}</h1>
            <h2>Ethereum: {props.ethereumBalance}</h2>
            <h2>{props.symbol}: {props.coinBalance}</h2>
            <button onClick={()=>{
                props.buildsContract.createBuilding();
                location.reload();
            }}>Crear Edificio</button>
            <h2>Edificios En Propiedad:</h2>
            {props.buildings}
            <br />
            <h2>Edificios en Venta:</h2>
            {props.buildingsOnSale}
        </div>
    );
}