import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import barganhaAPI from '../helpers/barganhaAPI';

import './Home.css';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    barganhaAPI.getProductList()
        .then((products)=>{
            setProducts(products);
            setLoading(false);
        });
    return (
        <div>
            <h1>HOME</h1>

            <hr />
            {loading && 
                <div>Carregando...</div>
            }
                {products.length > 0 &&
                    <ul>
                        {products.map((product)=>(
                            <li key={product.id}>{product.title}</li>
                        ))}
                    </ul>
                }
            <hr />

            <Link to="/sobre">Ir para a página SOBRE</Link>
        </div>
    );
};

export default Home;