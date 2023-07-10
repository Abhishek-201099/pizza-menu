import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


// A component function can only return one element not multiple, so try to nest it within the div.
// The browser don't understand JSX so babel converts jsx into JS to render. So, every element that is
// created on the page is eventually created using React.createElemet() after babel has transformed it.

function App(){
  return (
    <div className="container">
      <Header/>
      <Menu/>
      <Footer/>
    </div>
  )
}

function Header(){
  return (
    <header className='header'>
      <h1>Fast React pizza co.</h1>
    </header>
  )
}

function Menu(){
  return ( 
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaData.length ? 
      <>
        <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stove oven, all organic, all delicious.</p>
        <ul className='pizzas'>
          {pizzaData.map((pizza)=><Pizza key={pizza.name} name={pizza.name} imgSource={pizza.photoName} ingredients={pizza.ingredients} photoName={pizza.name} price={pizza.price} soldOut={pizza.soldOut} />)}
        </ul> 
      </> :
      <p>We're still working on our menu. Please come back later :)</p>
      }
    </main>
  )
}

function Pizza({name,imgSource,ingredients,photoName,price,soldOut}){
  return (
    <li className={`pizza ${soldOut?'sold-out':''}`}>
      <img src={imgSource} alt={photoName} />
      <div>
        <h3>{name}</h3>
        <p>Ingredients : {ingredients} </p>
        <span>{soldOut ? 'SOLD OUT' : `Price : ${price}` }</span>
      </div>
    </li>
  )
}

function Footer(){
  return (
  <footer className='footer'>
    <div className="order">
      <p>We are { (new Date().getHours()>=12 && new Date().getHours()<=22) ? `open until 22:00, come visit us or order online.` : 'closed' }</p>
      <button className="btn">Order</button>
    </div>
  </footer>);
}



const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)