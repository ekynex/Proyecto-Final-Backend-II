import { Schema, model } from "mongoose";

const TicketSchema = new Schema({
  code: { type: String, required: true, unique: true },
  purchase_datetime: { type: Date, default: Date.now },
  amount: Number,
  purchaser: String,
});

export default model("Tickets", TicketSchema);
