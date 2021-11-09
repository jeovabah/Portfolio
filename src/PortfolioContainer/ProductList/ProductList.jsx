import "./productList.css";
import Product from "../Product/Product";
import {products} from "../../data"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Projetos</h1>
                <p className="pl-desc">São alguns projetos Criados e 
                    aprimorados, feito para se inspirarem e conhecer sobre meu trabalho
                </p>
            </div>

            <div className="pl-list">
                {products.map(item=>(
                <Product key={item.id} img= {item.img} link={item.link} nome= {item.nome} desc={item.desc} />
                ))}
            </div>
            
        </div>
    )
}

export default ProductList
