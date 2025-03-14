"use client"
export default function HouseOnSale(props) {
    function onSale () {
        if (props.onSale) return (
            <div className="position-absolute text-center pb-5 bottom-50 w-100">
                <span className="bg-black text-white h1 p-3">ON SALE</span>
            </div>
        )
    }

    return (
        <div>
            <div className="text-center position-relative bg-white border border-1 rounded rounded-3 border-danger p-3">
            {onSale()}
            <img className="img-fluid" src="/house1.jpg"></img>
            <h2>{props.name}</h2>
            <h4>Level: {props.level}</h4>
            <h6>Precio de Venta: {props.value}</h6>
            <button className="btn btn-primary" onClick={async () => {
                await props.buildsContract.transferBuyBuilding(props.tokenId);
                location.reload();
            }}>Comprar Casa</button>
            </div>
        </div>
    )

}