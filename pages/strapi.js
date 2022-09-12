import React from "react";
import { useState, useEffect } from "react";

export default function Strapi() {

  const hostname = 'http://localhost:1337'
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:1337/api/pokeapi?populate=%2A')
      .then(res => res.json())
      .then(data => setData(data.data)) //ต้องเข้าไปในชั้นของ array (2)[{...},{...}]
  }, [])

  // console.log(data);


  return (
    <>
      <ul>
        {data.map((data, index) => {
          return (
            <li key={index}>
              <img src={`${hostname}${data.attributes.img_profile.data.attributes.url}`} />
              <span>
                {data.attributes.Official_name} | {data.attributes.japanese_name}
              </span>
              {data.attributes.cates.data.map((val, i) => {
                return (
                  <strong>({val.attributes.name})</strong>
                )
              })}
              <p>{data.attributes.Physiology}</p>
            </li>
          )
        })}
      </ul>





      <style>
        {` 
          ul {
            list-style-type: none;
          }
          img {
            display:inline-block;
            vertical-align: middle;
            margin-right: 20px
          }
          span {
            display: inline-block;
            margin-right: 15px
          }

        `}
      </style>


    </>
  );
}



