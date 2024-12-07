import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
     <h1 className="text-4xl mb-8">Home Page</h1>
     <p className="mb-8">
     Today our guest teacher - Shakib teach u how to create complete custom authentication using Nextjs 15, Prisma ORM, MySQL. You will learn-
1. How to register as user
2. How to login and then redirect to any url
3. How to Create Auth Route Protection and give user access to any route only if they login.

     </p>

     <Link href='/sign-up' className="bg-blue-700 text-white px-5 py-3 rounded-lg" >Create an account</Link>
    </main>
  );
}
