import React from "react";
import { useState, useEffect } from 'react'
import Menu_feed from "../../components/Menu_feed"

export default function Feed({ typicode, params }) {

    const [txt, setTxt] = useState("posts")

    return (
        <>
            <Menu_feed />
            <h1>GetStaticPaths : </h1>
            <p>test</p>

            <ol>
                {typicode.slice(0, 10).map((post, i) => {
                    return (
                        <li key={i}>{post.title}</li>
                    )
                })}
            </ol>
        </>
    );
}


export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: 'posts' } },
            { params: { id: 'albums' } },
            { params: { id: 'photos' } },
        ],
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/${params.id}`)
    const data = await res.json()

    return {
        props: {
            typicode: data
        },
    }
}