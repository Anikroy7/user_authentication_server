import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { generateTransactionId } from "../../utils/generateRandom";
import { User } from "../user/user.model";
import { TPayment } from "./payment.interface";
import Payment from "./payment.model";
import { makePayment } from "./payment.utils";

const createPaymentIntoDB = async (payload: TPayment) => {

    const userInfo = await User.findById(payload.userId);

    if (!userInfo) {
        throw new AppError(httpStatus.BAD_REQUEST, "This user is not exists!!");
    }
    const transactionId = generateTransactionId();

    const newPayment = await Payment.create(payload);
    if (!newPayment) {
        throw new AppError(httpStatus.BAD_REQUEST, "Payment not created!!");
    }
    const paymentInfo = {
        transactionId,
        totalPrice: payload.totalPrice,
        user: {
            _id: userInfo._id,
            name: userInfo.name,
            email: userInfo.email,
        },
        paymentId: newPayment._id,
    }
    const response = await makePayment(paymentInfo);
    console.log(response, "response from payment gateway")
    return response.data.payment_url;

};


export const PaymentServices = {
    createPaymentIntoDB
}