import mongoose, { mongo } from "mongoose";

/* userSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name for this user"],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  age: {
    type: Number,
  },
});

/* urlSchema */
const UrlSchema = new mongoose.Schema({
  invitation_id: {
    type: String,
  },
  operatedBy: {
    type: String,
  },
});

/* sessionSchema */
const GameSessionSchema = new mongoose.Schema({
  owner_id: {
    type: String,
    required: true,
  },
  guest: {
    type: Array,
  },
});

const User = mongoose.models.user || mongoose.model("User", UserSchema);
const Url = mongoose.models.url || mongoose.model("Url", UrlSchema);
const Session =
  mongoose.model.session || mongoose.model("Session", GameSessionSchema);
export { User, Url, Session };
