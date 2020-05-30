export default (req, res) => {
  const { email, message } = req.body;
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ email, message }));

  const nodemailer = require("nodemailer");

  let transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "f3d574e92aec26",
      pass: "5cd9fb62d355e2",
    },
  });

  const content = {
    from: email, // Sender address
    to: "e0bbd644f0-de0f16@inbox.mailtrap.io", // List of recipients
    subject: "Email Via zollinger.tech", // Subject line
    text: message, // Plain text body
  };

  transport.sendMail(content, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};
