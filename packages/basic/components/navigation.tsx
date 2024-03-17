"use client"
// use client: client에서만 렌더링된다는 의미 x
// backend에서 render되고, client에 hydrate 된다.

import Link from "next/link"
import {usePathname} from "next/navigation"
import {useState} from "react";
import styles from "./navigation.module.css"

export default function Navigation() {
    const path = usePathname()
    const [count, setCount] = useState<number>(0)

    return <nav className={styles.nav}>
        <ul className={styles.list}>
            <li><Link href="/">Home</Link> {path === '/' ? '🔥' : ""}</li>
            <li><Link href="/about-us">About Us</Link>{path === '/about-us' ? '🔥' : ""}</li>
            <li>
                <button onClick={() => setCount(c => c + 1)}>{count}</button>
            </li>
        </ul>
    </nav>
}
