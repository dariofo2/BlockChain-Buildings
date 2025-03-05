"use client"

import { useEffect, useState } from "react";
import Account from "./account";
import { AccountData, Building, buildingsContract } from "../BuildingsFront/contractBuildings.ts";
import House from "./house.tsx";
import HouseOnSale from "./houseOnSale.tsx";
import Cookies from "js-cookie";

export default function AccountPage(props: any) {
    const [buildsContract, setBuildsContract] = useState(new buildingsContract(props.privateKey));
    const [accountData, setAccountData] = useState(new AccountData());
    const [buildings, setBuildings] = useState([] as Building[]);
    const [buildingsOnSale, setBuildingsOnSale] = useState([] as Building[]);

    useEffect(() => {
        actualizarCuenta();
    }, []);

    async function actualizarCuenta() {
        const accData = new AccountData();
        accData.address = await buildsContract.account.address;
        accData.buildingsTokens = await buildsContract.getBuildings();
        accData.buildingsOnSaleTokens = await buildsContract.getBuildingsOnSale();
        accData.coinBalance = await buildsContract.getBalanceBS();
        accData.coinContractBalance = await buildsContract.getBalanceBsOfContract();
        accData.etherBalance = await buildsContract.getBalanceEther();
        accData.nameCoin = await buildsContract.nameCoin();
        accData.symbolCoin = await buildsContract.symbolCoin();
        
        setAccountData(accData);

        actualizarBuildings(accData.buildingsTokens);
        actualizarBuildingsOnSale(accData.buildingsOnSaleTokens);
    }

    async function actualizarBuildings(buildingsTokens: []) {
        let buildingsObjetos = [];

        for (let i = 0; i < buildingsTokens.length; i++) {
            const x = buildingsTokens[i];
            const building: Building = await buildsContract.getBuilding(x);
            if (building.name!="") {
                building.tokenId = x;
                console.log(building.onSale);
                buildingsObjetos.push(building);

            }
            
        }
        setBuildings(buildingsObjetos);
    }

    async function actualizarBuildingsOnSale(buildingsTokens: []) {
        let buildingsObjetos = [];

        for (let i = 0; i < buildingsTokens.length; i++) {
            const x = buildingsTokens[i];
            const building: Building = await buildsContract.getBuilding(x);
            if (building.name!="") {
                building.tokenId = x;
            
                buildingsObjetos.push(building);
            }
        }
        setBuildingsOnSale(buildingsObjetos);
    }

    const buildingsMap = buildings.map(x => {
        if (!x.onSale) {
            return <House
                key={x.tokenId}
                color="green"
                name={x.name}
                level={x.level}
                timeFromSpend={x.timeFromSpend}
                owner={x.owner}
                onSale={x.onSale}
                value={x.value}
                tokenId={x.tokenId}
                buildsContract={buildsContract}
            >
            </House>
        } else {
            return <House
                key={x.tokenId}
                color="red"
                name={x.name}
                level={x.level}
                timeFromSpend={x.timeFromSpend}
                owner={x.owner}
                onSale={x.onSale}
                value={x.value}
                tokenId={x.tokenId}
                buildsContract={buildsContract}
            >
            </House>
        }
    })

    const buildingsOnSaleMap = buildingsOnSale.map(x => {
        return <HouseOnSale
            key={x.tokenId}
            name={x.name}
            level={x.level}
            timeFromSpend={x.timeFromSpend}
            owner={x.owner}
            onSale={x.onSale}
            value={x.value}
            tokenId={x.tokenId}
            buildsContract={buildsContract}
        >
        </HouseOnSale>

    })




    return (
        <div>
            <button className="btn btn-danger" onClick={()=>{
                Cookies.remove("privateKey");
                location.reload();
            }}>Logout</button>
            <Account
                buildsContract={buildsContract}
                address={accountData.address}
                ethereumBalance={accountData.etherBalance}
                symbol={accountData.symbolCoin}
                coinBalance={accountData.coinBalance}
                coinContractBalance={accountData.coinContractBalance}
                buildings={buildingsMap}
                buildingsOnSale={buildingsOnSaleMap}

            ></Account>
        </div>
    );
}