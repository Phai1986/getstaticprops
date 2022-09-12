import React from "react";
import { useState, useEffect } from 'react'

export default function Movie({ posts, randomData }) {


    return (
        <>
            <h3><strong>getStaticProps</strong> = ส่ง req ครั้งเดียว ข้อมูลเปลี่ยนแปลงไม่บ่อย<br />
            <strong>getServerSideProps</strong> = ส่ง req ทุกครั้ง ข้อมูลเปลี่ยนแปลงบ่อย 
            </h3>
            <p> {randomData} </p>

            <ul>
                {posts.map((post, index) => (
                    <li key={index}>{post.title}</li>
                ))}
            </ul>


        </>
    );
}

//ส่ง req ครั้งเดียวหรือไม่บ่อย
// export async function getStaticProps() {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//     const data = await res.json()

//     return {
//         props: {
//             posts: data,
//             randomData: Math.random().toString()
//         },
//     }
// }


//ส่ง req ทุกครั้งข้อมูลมีการเปลี่ยนแปลงตลอด
export async function getServerSideProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums`)
    const data = await res.json()

    return {
        props: {
            posts: data,
            randomData: Math.random().toString()
        },
    }
}