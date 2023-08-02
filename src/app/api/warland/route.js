import dbConnect from "@/app/lib/dbConnect";
import { addToSession, getInvitationInfo } from "@/app/lib/services";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const invitation_id = req.nextUrl.searchParams.get("inv");
  console.log({ invitation_id });

  const guest = "64c8ecb28d59ae1f0cebcea5";

  try {
    await dbConnect();

    /* ========= Generate Invitation Id ========= */
    const response = await getInvitationInfo(invitation_id);

    if (!response.success) {
      return NextResponse.json({ status: 201, success: false });
    }
    const owner_id = response && response.data && response.data.operatedBy;

    /* ========= Create or add to session ========= */
    const sessionResponse = await addToSession(owner_id, guest);
    if (!sessionResponse.success) {
      return NextResponse.json({ status: 201, success: false });
    }

    return NextResponse.json({
      message: "Success",
      status: 200,
      data: { owner: owner_id, guest: sessionResponse.data },
      success: true,
    });
  } catch (err) {
    console.log({ err });
  }
}
