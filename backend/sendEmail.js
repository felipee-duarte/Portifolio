const nodemailer = require("nodemailer");

async function sendEmail(req, res) {
    const { nome, email, opcao, mensagem } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Novo contato do portfólio (${opcao})`,
        text: `
      Nome: ${nome}
      E-mail: ${email}
      Tipo de contato: ${opcao}
      Mensagem: ${mensagem}
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: "Mensagem enviada com sucesso!" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Erro ao enviar email" });
    }
}

module.exports = sendEmail;
