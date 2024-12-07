import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  try {
    const reqBody = await req.json();
    const prisma = new PrismaClient();
    const result = await prisma.user.findUnique({
      where: reqBody,
    });
    if (!result) {
      return NextResponse.json({
        status: "fail",
        data: reqBody,
        message: "No user found!",
      });
    } else {
      const expireDuration = new Date(Date.now() + 12 * 60 * 60 * 1000);
      const cookieString = `token=${result["email"]}; expires=${expireDuration}; path=/`;
      return NextResponse.json(
        {
          status: "success",
          message: "Login successful",
        },
        {
          headers: {
            "set-cookie": cookieString,
          },
        }
      );
    }
  } catch (error) {
    return NextResponse.json({
      status: "error",
      data: error,
    });
  }
}

export async function GET(req) {
   let expireDuration = new Date(Date.now()  - 12 * 60 * 60 * 1000);
   const response = NextResponse.redirect(new URL('/', req.url), 303);
   response.cookies.set('token', '', {expires: expireDuration});
   return response;
}
