import nodeMailer from "nodemailer";




const sendEmail = async (req, res) => {
    let { options } = req.body;
    try {


        const transporter = nodeMailer.createTransport({
            host: process.env.SMPT_HOST,
            port: process.env.SMPT_PORT,
            secure: false, // Use SSL
            auth: {
                user: process.env.USER,
                pass: process.env.PASS
            },

        });

        const mailOptions = {
            from: process.env.SMPT_MAIL,
            to: options.to,
            subject: options.subject,
            html: options.msg,
        };

        await transporter.sendMail(mailOptions);
        res.send({ status: true, msg: "Please Check you email..." })

    }
    catch (err) {
        res.send({ status: false, msg: "Please Check you email..." })
    }
};
export default sendEmail;