import { NextResponse } from "next/server";
import dbConnect from "../../lib/dbConnect";

import { Url } from "../../model/models";
import uuid from "node-uuid";
import { findUserInfoById } from "@/app/lib/services";

const gameDomain = "http://localhost:3000/api/warland";

/*=========Generate Invitation Id =========*/
const generateInvitationId = async (userData) => {
  const uniqId = uuid.v4();

  try {
    const userId = userData.id;
    const isUserExist = await findUserInfoById(userId);
    if (isUserExist && !isUserExist.success) {
      return {
        success: false,
        message: "Invalid user",
      };
    }
    const newUrldata = {
      invitation_id: uniqId,
      operatedBy: userId,
    };
    const newUrlResponse = await Url.create(newUrldata);

    return {
      success: true,
      data: newUrlResponse,
    };
  } catch (err) {
    return { success: false };
  }
};

export async function GET(req, res) {
  const userId = req.nextUrl.searchParams.get("uid");
  try {
    const userData = {
      id: userId,
    };
    await dbConnect();

    /* ========= Generate Invitation Id ========= */
    const response = await generateInvitationId(userData);

    if (!response.success) {
      return NextResponse.json({ status: 201, success: false });
    }

    const invitation_id = response.data.invitation_id;

    /* ========= New URL ========= */
    const newUrl = `${gameDomain}?inv=${invitation_id}`;

    return NextResponse.json({
      message: "Success",
      status: 200,
      newUrl,
      success: true,
    });
  } catch (err) {
    console.log({ err });
  }
}
