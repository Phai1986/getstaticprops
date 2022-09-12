import React from "react";

export default function getstatic_paths({ photo }) {

    

    return (
        <>
            <h1>GetStaticPaths</h1>

            <ul>
                {photo.slice(0, 10).map((photo, index) => (
                    <li style={{ margin: '10px 0' }} key={index}>
                        {photo.id}:{photo.title}
                        <img style={{ display: 'block', margin: '10px 0' }} src={photo.url} width={100} />
                    </li>
                ))}
            </ul>
        </>
    );
}



export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const data = await res.json()

    return {
        props: {
            photo: data
        },
    }
}