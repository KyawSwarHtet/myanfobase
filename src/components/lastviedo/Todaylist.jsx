import React from "react";
import "./lastnews.css";

const Todaylist = () => {
  return (
    <>
      <div className="todaylist">
        <div className="CurrencyExchange">
          <h3>Today Currency Exchange</h3>
          <p className="today">1USD = 1840KYAT</p>
          <p className="today">1SGD = 1342KYAT</p>
          <p className="today">1YUAN = 278KYAT</p>
          <p className="today">1WON = 1.5KYAT</p>
          <p className="today">1REN = 14KYAT</p>
          <p className="today">1POUND = 2314KYAT</p>
          <p className="today">1EUROP = 1979KYAT</p>
        </div>
        <div className="Goldprice">
          <h3>Today Glod Price</h3>
          <p className="today">Sell price = 3,437,591.67KYAT</p>
          <p className="today">Buy price = 2,737,591.67KYAT</p>
        </div>
        <div className="FuelPrice">
          <h3>Today Fuel Price</h3>
          <h5>(Denko Myanmar)</h5>
          <p className="today">Diesel = 2410KYAT</p>
          <p className="today">Premiun Diesel = 2440KYAT</p>
          <p className="today">Octane 95 = 2210KYAT</p>
          <p className="today">Octane 92 = 2160KYAT</p>
        </div>
      </div>
    </>
  );
};

export default Todaylist;
