import React, { useState } from 'react';
import './Product.css';
import { data as productList } from '../data';
import logo from '../../assets/img/logo.png'

const Product = () => {
    const [fixt,setFixt] = useState(false)
    const [searchTerm, setSearchTerm] = useState("");
    const [selecCategory, setSelecCategory] = useState("all");
    const categories = ["all", ...new Set(productList.map(product => product.category))];
function setFixd(){
    if(window.scrollY >= 10){
        setFixt(true)
    }
    else{
        setFixt(false)
    }
  }
  window.addEventListener('scroll', setFixd)

    const list = categories.map((category, index) => (
        <button 
            key={index}
            onClick={() => setSelecCategory(category)}
            className={selecCategory === category ? 'active' : ''}
        >
            {category}
        </button>
    ));

    const filteredList = productList
        .filter((item) => 
            (selecCategory === 'all' || item.category === selecCategory) && 
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((item) => (
            <div className="card" key={item.id}>
                <img src={item.img} alt="img" />
                <h1>{item.name}</h1>
                <h2 title={item.malumot}>{item.malumot}</h2>
            </div>
        ));

    return (
        <div>
             <header className={fixt ? 'header_all fixed ' : 'header_all' }>
                <nav className="container nav">
                  <img className='logo' src={logo} alt="" />
                    <div className="search">
                <div className="search_all">
                    <input
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        type="text"
                        placeholder="Search..........."
                    />
                </div>
            </div>
                    <ul>
                    <li>
                            <a href="" className="">Home</a>
                        </li>
                        <li>
                            <a href="" className="">About</a>
                        </li>
                        <li>
                            <a href="" className="">Login</a>
                        </li>
                    </ul>
                </nav>
             </header>
        
            <div className="title">
            <div className="header">
                {list}
            </div>

            </div>
            <div className="wrapper container">
                {filteredList}
            </div>
        </div>
    );
}

export default Product;
