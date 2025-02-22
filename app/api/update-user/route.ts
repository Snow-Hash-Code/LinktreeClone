import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getAuth } from "@clerk/nextjs/server";

export async function PATCH(request: NextRequest) {
  try {
    const { userId } = getAuth(request)

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const data = await request.json()

    const updateUser = await db.user.update({
      where: {
        id: userId
      },
      data
    })

    return NextResponse.json(updateUser)
  } catch (error) {
    return NextResponse.json({
      message: "Error updating user: ",
      error
    },
    {status: 500}
    )
  }
}