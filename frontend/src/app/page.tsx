"use server"

import { cookies } from "next/headers";
import Register from "../components/register";
import Account from "../components/account";
import AccountPage from "../components/accountPage";
import { buildingsContract } from "../BuildingsFront/contractBuildings";

export default async function () {
    const cookie=await cookies();
    const privateKey=cookie.get("privateKey");

    if (privateKey) {
        return (
            <div>
                <AccountPage privateKey={privateKey.value}></AccountPage>
            </div>
        );
    } else {
        return (
            <div>
                <Register></Register>
            </div>
        );
    }
    
}