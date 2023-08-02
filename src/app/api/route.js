import { NextResponse } from "next/server";

import dbConnect from "../lib/dbConnect";
import { User } from "../model/user";

/*=======Inser User Information to Db =========*/
const insertUserInfo = async (data) => {
  try {
    const userResponse = await User.create(data);
    return {
      success: true,
    };
  } catch (err) {
    return { success: false };
  }
};

export async function GET(req, res) {
  const userData = {
    name: "BCD",
    age: 25,
  };

  try {
    await dbConnect();

    /* =========Inser new User to db ========= */
    const response = await insertUserInfo(userData);

    if (!response.success) {
      return NextResponse.json({ status: 201, success: false });
    }
    return NextResponse.json({
      message: "Success",
      status: 200,
      data: response,
      success: true,
    });
  } catch (err) {
    console.log({ err });
  }
}
