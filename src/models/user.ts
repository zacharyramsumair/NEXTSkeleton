import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
//   password: { type: String, select: false },
  role: { type: String, default: "user" },
  image: { type: String },
  authProviderId: { type: String },
  //new stuff for stripe
  // Used in the Stripe webhook to identify the user in Stripe and later create Customer Portal or prefill user credit card details
  customerId: {
    type: String,
    validate(value:string) {
      return value.includes("cus_");
    },
  },
  // Used in the Stripe webhook. should match a plan in config.js file.
  priceId: {
    type: String,
    validate(value:string) {
      return value.includes("price_");
    },
  },
  // Used to determine if the user has access to the product—it's turn on/off by the Stripe webhook
  hasAccess: {
    type: Boolean,
    default: false,
  },
});

export const User = mongoose.models?.User || mongoose.model("User", userSchema);