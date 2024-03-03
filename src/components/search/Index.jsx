import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./search.module.css"

const Search = () => {
  const [input, setInput] = useState("")
  const [result, setResult] = useState([])
  const [data, setData] = useState([])

  const handleChange = (value) => {
      setInput(value);
      inputSearch(value)
  };

  const inputSearch = ((value) => {
      const result = data.filter((product) => {
          return (
              product &&
              product.product_name &&
              product.product_name.toLowerCase().includes(value)
          );
      });
      setResult(result);
  })

  useEffect(() => {
      axios.get(`https://blanja-backend-v2.vercel.app/products`)
          .then((res) => {
              setData(res.data.data)
          })
  },[])

  return (
    <div className={style.container}>
      <div className={style.searchBar}>
        <input
          className={style.inputSearch}
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      {input === "" ? (
        ""
      ) : (
        <div className={style.searchResult}>
          {result.map((result, id) => (
            <button className={style.btnResult} key={id}>
              {result.product_name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
