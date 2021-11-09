import "./product.css"
const Product = ({img,link,nome,desc}) => {
    return (
        <div className="p">
            
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-name">{nome}</div>

            </div>
                <div className="p-desc">{desc}</div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="p-img" />
                
            </a>
                
        </div>
    )
}

export default Product
