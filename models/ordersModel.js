import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    orderID: {
      type: String,
      required: true,
    },
    clientID: {
      type: String,
      required: true,
    },
    clientID: {
        type: String,
        required: true,
      },
    phone: {
      type: String,
    }
  },
  { timestamps: true }
);

export const Orders =
  mongoose.models?.Orders || mongoose.model("Orders", orderSchema);
