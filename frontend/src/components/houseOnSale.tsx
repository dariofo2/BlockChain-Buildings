"use client"
export default function HouseOnSale(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <h4>{props.level}</h4>
            <h4>{props.timeToSpend}</h4>
            <h4>{props.owner}</h4>
            <h5>{props.onSale}</h5>
            <h6>{props.value}</h6>
            <button onClick={() => {
                props.buildsContract.transferBuyBuilding(props.tokenId);
                location.reload();
            }}>Comprar Casa</button>
        </div>
    )

}