"use client"

import { useEffect, useState } from "react";
import { Building, buildingsContract } from "../BuildingsFront/contractBuildings";
import House from "./house";

export default function Account(props: any) {
    return (
        <div className="container">
            <h1>Address: {props.address}</h1>
            <h2>Ethereum: {props.ethereumBalance}</h2>
            <h2>{props.symbol}: {props.coinBalance}</h2>
            <input id="nombreEdificio" type="text" placeholder="nombre Edificio"></input>
            <button onClick={() => {
                const element = document.getElementById('nombreEdificio') as HTMLInputElement;
                if (element.value != "") {
                    props.buildsContract.createBuilding(element.value);
                    location.reload();
                }

            }}>Crear Edificio</button>
            <h2>Edificios En Propiedad:</h2>
            <div className="row">
            {props.buildings}
            </div>
            <br />
            <h2>Edificios en Venta:</h2>
            {props.buildingsOnSale}
        </div>
    );
}