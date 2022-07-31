// // pages/gourmet.jsx

// import { useState, useEffect } from "react";
// import axios from "axios";


// const KEY = '15d307462672d2ed'

// // axiosのインスタンス作成
// const hotpepper = axios.create ({
//     baseURL: 'http://webservice.recruit.co.jp/hotpepper/gourmet/v1'
// })

// export const Gourmet = async() =>{
//     //大エリアコード=Z011(東京)のお店を検索
//         return await hotpepper.get('',{
//             params: {
//                 key:KEY,
//                 large_area:'Z011',
//                 format: 'json'  
//              }
//          })
//     }

// useEffect(() =>{
//     Gourmet().then((res) => {
//         console.log(res)
//     })
// },[])