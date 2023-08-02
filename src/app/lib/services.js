import { Session, Url, User } from "../model/models";
/*=========Find User by Id =========*/
const findUserInfoById = async (userId) => {
  try {
    const isUserExist = await User.findById(userId).exec();
    if (!isUserExist || !isUserExist._id) {
      return {
        success: false,
        message: "User not found",
      };
    }
    return {
      success: true,
      data: isUserExist,
    };
  } catch (err) {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};

/* ====== Get Invitation Information ======= */
const getInvitationInfo = async (invitation_id) => {
  try {
    const [invInfo] = await Url.find({ invitation_id: invitation_id }).exec();
    if (!invInfo || !invInfo._id) {
      return {
        success: false,
        message: "Information not found",
      };
    }
    return {
      success: true,
      data: invInfo,
    };
  } catch (err) {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};

/* ====== Add or Create a session ======= */
const addToSession = async (owner, guest) => {
  try {
    let response;
    const [isExistSession] = await Session.find({ owner_id: owner }).exec();
    if (!isExistSession || !isExistSession._id) {
      response = await Session.create({
        owner_id: owner,
        guest: guest,
      }).exec();
    }

    await Session.updateOne({ owner_id: owner }, { $push: { guest } });

    const [allSessionPlayers] = await Session.find({ owner_id: owner }).exec();

    response = allSessionPlayers.guest;

    return {
      data: response,
      success: true,
    };
  } catch (err) {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};

export { findUserInfoById, getInvitationInfo, addToSession };
