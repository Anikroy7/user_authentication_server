import { Types } from "mongoose";


export type TPayment = {
    userId: Types.ObjectId;
    paymentStatus: 'Pending' | 'Paid' | 'Failed';
    transactionId: {
        type: String,
        required: true
    },
    totalPrice: number,
}