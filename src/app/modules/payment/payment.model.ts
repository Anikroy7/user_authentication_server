import { Schema, model } from "mongoose";
import { TPayment } from "./payment.interface";

// Define the schema for an Order
const paymentSchema = new Schema<TPayment>({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    paymentStatus: {
        type: String,
        enum: ['Pending', 'Paid', 'Failed'],
        default: 'Pending',
    },
    transactionId: {
        type: String,
        required: true
    },
    totalPrice: {
        required: true,
        type: Number
    },

}, {
    timestamps: true 
});

// Export the model
const Payment = model<TPayment>('Payment', paymentSchema);

export default Payment;
