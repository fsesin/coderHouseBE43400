import { Router } from "express";
import { transporter } from "../nodemailer.js";
import { client } from "../twilio.js";
import { __dirname } from "../utils.js";
import config from "../config.js";

const router = Router();

// router.get("/", async (req, res) => {
//   const messageOpt = {
//     from: "CODERHOUSE 43400",
//     to: [
//       "cyfdelcaribe@gmail.com",
//       "diegospehrs@gmail.com",
//       "alanheck22@gmail.com",
//       "marcos.natta@gmail.com",
//     ],
//     subject: "Message 43400",
//     html: "<h1>Primer h1 con nodemailer</h1>",
//     attachments: [{ path: __dirname + "/crypto.jpeg" }],
//   };
//   await transporter.sendMail(messageOpt);
//   res.send("Mail sent");
// });

router.post("/", async (req, res) => {
  const { first_name, last_name, email, message } = req.body;
  const messageOpt = {
    from: "faridsesin@gmail.com",
    to: email,
    subject: message,
    text: `Registro exitoso. Bienvenido ${first_name} ${last_name}`,
  };
  await transporter.sendMail(messageOpt);
  res.send("Mail sent");
});

// TWILIO
router.get("/twilio", async (req, res) => {
  try {
    await client.messages.create({
      body: "Hello from twilio-node",
      to: "+12345678901",
      from: config.twilio_phone_number,
    });
    res.send("SMS sent");
  } catch (error) {
    res.send(error.message);
  }
});
export default router;
