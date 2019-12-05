import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";

const viewOrders = [
  {
    id: 0,
    name: 'Market cap descending',
    value: 'market_cap_desc',
    selected: false
  },
  {
    id: 1,
    name: 'Market cap ascending',
    value: 'market_cap_asc',
    selected: false
  },
  {
    id: 3,
    name: 'Gecko ascending',
    value: 'gecko_asc',
    selected: false
  },
  {
    id: 4,
    name: 'Gecko descending',
    value: 'gecko_desc',
    selected: false
  },
  {
    id: 5,
    name: 'Volume descending',
    value: 'volume_desc',
    selected: false
  },
  {
    id: 6,
    name: 'Volume ascending',
    value: 'volume_asc',
    selected: false
  },
]

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [order, setOrder] = useState('market_cap_desc')
  const orderName = viewOrders.filter( item => item.value === order)[0].name;

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=${order}&per_page=10&page=1&sparkline=true`
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, [order]);
  return (
    <div className="App">
      <Navbar setOrder={setOrder} viewOrders={viewOrders}/>
      <h2 
        className='view-title'>
        Current view: {orderName}
      </h2>
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
