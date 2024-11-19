
import emailjs from "@emailjs/browser"
import axios from "axios";



export default async function sendEmail(options,setResult) {
 
  try {
    let result = await axios({
      method: "post",
      url: "http://localhost:8000/send-email",
      data: { options }

    })
    
  }
  catch (err) {
   return 

    console.log(err);
  }
}


















// let nodemailer=require("nodemailer")
// // const transporter = nodemailer.createTransport({
// //     host: process.env.SMPT_HOST,
// //     port: process.env.SMPT_PORT,
// //     secure: false, // Use SSL
// //     auth: {
// //         user: process.env.USER,
// //         pass: process.env.PASS
// //     },
// // });

// // // async..await is not allowed in global scope, must use a wrapper
// // export default async function sendEmail({ email, to, link }) {
// //     // send mail with defined transport object
// //     const info = await transporter.sendMail({
// //         from: `"Maddison Foo Koch 👻" <${email}>`, // sender address
// //         to: to, // list of receivers
// //         subject: "Welcome To Change Password", // Subject line
// //         text: `Click On Link to change the password ${link}`, // plain text body

// //     });
// //     return "link has been sent to user email "+to;
// //     // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
// // }


