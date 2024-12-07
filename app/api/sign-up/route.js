import { PrismaClient } from "@prisma/client";
import {  NextResponse } from "next/server";

export  async function POST(req) {
   try {
    const reqBody = await req.json();
    const prisma  = new PrismaClient();

   const result= await  prisma.user.create({
        data: reqBody
    })
    return NextResponse.json({
        status:"success",
        data: result
    })
    
   } catch (error) {

    return NextResponse.json({
        status:"error",
        data: error
    })
     
   }
}