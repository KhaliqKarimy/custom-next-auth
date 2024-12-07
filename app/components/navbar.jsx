 import { cookies } from "next/headers";
import Link from "next/link";
import Lougout from "./logout";

const Navbar = () => {
    const cookie = cookies().get('token')
    return (
        <nav className="bg-slate-100 py-8">
            <div className="max-w-screen-xl  mx-auto  px-5 flex justify-between items-center">
                <Link href='/' className="text-lg font-bold">nextauth</Link>

                <ul className="flex gap-3">
                  {
                    cookie ? (
                        <>
                                <li>
                        <Link href='/profile'>Profile</Link>
                    </li>

                    <li>
                             <Lougout />
                    </li>
                        </>
                    ) : (
                        <li>
                        <Link href='/login'>Login</Link>
                    </li>
                    ) 
                  }
                </ul>

            </div>
        </nav>
    );
}

export default Navbar;