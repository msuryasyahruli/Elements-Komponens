import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./search.module.css"
import { Link } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("")
  const [result, setResult] = useState([])
  const [data, setData] = useState([])
  console.log(data)

  const handleChange = (value) => {
    setInput(value);
    inputSearch(value)
  };

  const inputSearch = ((value) => {
    const result = data.filter((data) => {
      return (
        data &&
        data.name &&
        data.name.toLowerCase().includes(value)
      );
    });
    setResult(result);
  })

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon`)
      .then((res) => {
        setData(res.data.results)
      })
  }, [])

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
            <Link to={result.url}>
              <button className={style.btnResult} key={id}>
                {result.name}
              </button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
