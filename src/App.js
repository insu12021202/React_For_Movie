import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [price, setPrice] = useState(0);
  const [coinID, setCoinID] = useState("");
  const [result, setResult] = useState("");
  const onChange = (e) => setPrice(e.target.value);
  const onClick = () => {
    let result = price / coinID;
    setResult(result.toFixed(4));
  };
  const change = (e) => setCoinID(e.target.value);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>Coins! {loading ? null : `(${coins.length})`}</h1>
      <input
        onChange={onChange}
        value={price}
        type="text"
        placeholder="금액을 입력하세요"
      ></input>
      <button onClick={onClick}>입력</button>
      {loading ? (
        <strong>loading...</strong>
      ) : (
        <select onChange={change}>
          <option defaultValue>select coin</option>
          {coins.map((coin) => (
            <option value={coin.quotes.USD.price} key={coin.id}>
              {coin.name}
            </option>
          ))}
        </select>
      )}
      {result === "" ? null : <h1>You can buy {result} coins</h1>}
    </div>
  );
}

export default App;
