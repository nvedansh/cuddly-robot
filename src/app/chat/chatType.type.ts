// export interface IPostMsgDetails {
//     answerArray: string,
//     type: string,
//     reply: {
//         text: string,
//         reply: false,
//         date: Date,
//         user: {
//             name: string,
//             avatar: string,
//         },
//     },
//   }

export interface IPostMsgDetails {
    sender: string,
    message: string
}