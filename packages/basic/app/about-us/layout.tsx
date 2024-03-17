import {Metadata} from "next";

export const metadata: Metadata = {
    title: "About Us"
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
            &copy; Next JS is great!
        </div>
    )
}
