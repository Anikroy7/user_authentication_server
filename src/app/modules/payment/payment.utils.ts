import axios from "axios"
import config from "../../config"
import { Types } from "mongoose";

type TPaymentInfo = {
    transactionId: string;
    totalPrice: number;
    user: {
        _id: Types.ObjectId
        name: string;
        email: string;

    },
    paymentId: Types.ObjectId,
}


export const makePayment = async (paymentInfo: TPaymentInfo) => {
    const response = await axios.post('https://​sandbox​.aamarpay.com/jsonpost.php', {
        "store_id": `${config.storeId}`,
        "tran_id": paymentInfo.transactionId,
        "success_url": `${config.server_base_url}/api/payments/confirm?tran_id=${paymentInfo.transactionId}&paymentId=${paymentInfo.paymentId}&userId=${paymentInfo.user._id}`,
        "fail_url": `${config.server_base_url}/api/payments/failed?tran_id=${paymentInfo.transactionId}&paymentId=${paymentInfo.paymentId}&userId=${paymentInfo.user._id}`,
        "cancel_url": `${config.server_base_url}/api/payments/failed?tran_id=${paymentInfo.transactionId}&paymentId=${paymentInfo.paymentId}&userId=${paymentInfo.user._id}`,
        "amount": paymentInfo.totalPrice,
        "currency": "BDT",
        "signature_key": `${config.signatureKey}`,
        "desc": "Car booking payment",
        "cus_name": paymentInfo.user.name,
        "cus_email": paymentInfo.user.email,
        "cus_add1": '',
        "cus_add2": "Mohakhali DOHS",
        "cus_city": "Dhaka",
        "cus_state": "Dhaka",
        "cus_postcode": "1206",
        "cus_country": "Bangladesh",
        "cus_phone": '01786335131',
        "type": "json"
    })
    return response
}