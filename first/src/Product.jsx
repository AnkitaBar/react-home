import "./Product.css"

function Product ({title,price,features,features2}){
    const list = features.map((el)=> <li>{el}</li>)
    
    return (
        <div className="Product">
            <h3>{title}</h3>
            <h5>Price : {price}</h5>
            <p>{features}</p>
            <p>{features2.b}</p> 
            <p>{list}</p>
        </div>
    )
}

export default Product;