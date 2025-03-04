"use client"
export default function House(props) {
    const fee=10;
    const dateNow = new Date();
    let seconds=dateNow.getTime()/1000;
    return (
        <div>
            <h2>{props.name}</h2>
            <h4>{props.level}</h4>
            <h4>{props.timeFromSpend}</h4>
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