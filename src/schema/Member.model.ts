import mongoose, {Schema} from "mongoose";
import { MemberStatus, MemberType } from "../libs/enums/member.enum";

// Schema first & Code first

const memberSchema = new Schema({
        memberType: {
            type: String,
            enum: MemberType,
            default: MemberType.USER
        },

        memberStatus: {
            type: String,
            enum: MemberStatus,
            default: MemberStatus.ACTIVE
        },

        memberNick: {
            type: String,
            index: {unique: true, sparse: true},
            required: true,
        },

        memberPhone: {
            type: String,
            index: {unique: true, sparse: true},
            required: true,
        },

        memberPassword: {
            type: String,
            select: false,  // terminal va postman(brauzer) ga qaytarmaydi
            required: true
        },

        memberAdress: {
            type: String,
        },

        memberDesc: {
            type: String,
        },

        memberImage: {
            type: String,
        },

        memberPoints: {
            type: Number,
            default: 0,
        },
    },
    {timestamps: true}     // updateAt, createAt
);

export default mongoose.model("Member", memberSchema);

// import mongoose, { Schema } from "mongoose";
// import { MemberStatus, MemberType } from "../libs/enums/member.enum";


// // Schema first & second code 
// const memberSchema = new Schema({
//         memberType: {
//             type: String,
//             enum: MemberType,
//             default: MemberType.USER
//         },

//         MemberStatus: {
//             type: String,
//             enum: MemberStatus,
//             default: MemberStatus.ACTIVE,
//         },

//         MemberNick: {
//             type: String,
//             index: { unique: true, sparse: true},
//             require: true,
//         },

//         MemberPhone: {
//             type: String,
//             index: { unique: true, sparse: true},
//             require: true,
//         },

//         MemberPassword: {
//             type: String,
//             select: false,
//             required: true,
//         },

//         MemberAddress: {
//             type: String,
//         },

//         MemberDesc: {
//             type: String,
//         },

//         MemberImage: {
//             type: String,
//         },

//         MemberPoints: {
//             type: Number,
//             default: 0,
//         },
//     },
//     { timestamps: true }  // updatedAt, createdat 
// );

// export default mongoose.model('Member', memberSchema);