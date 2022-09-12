import React from "react";
import Link from "next/link"

export default function Menu_feed() {
    return (
        <div style={{ margin: '50px 0 0' }}>
            <nav>
                <Link href="/feed/posts">posts</Link>
                {" | "}
                <Link href="/feed/albums">albums</Link>
                {" | "}
                <Link href="/feed/photos">photos</Link>
            </nav>
        </div>
    )
}
