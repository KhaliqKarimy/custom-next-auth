'use client'
import Link from "next/link";

const Logout = () => {
    const logout = async() => {
        const options = {method: "GET"}
        await fetch('/api/login', options);
        window.location.reload();
    }
    return (
        <Link href='#' className="text-red-700 " onClick={logout}>
            Logout
        </Link>
    );
}

export default Logout;