const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');
const app = express();
const cors = require('cors');
app.use(cors());
const port = process.env.PORT || 3003;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(express.static(path.join(__dirname, 'dist')));

app.post('/api/upload', upload.single('cv'), (req, res) => {
  try {
    const { role } = req.body;
    const attachment = req.file.buffer;

    if (!role || !attachment) {
      return res.status(400).send('Bad Request: Role and CV are required.');
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // use SSL
      auth: {
        user: 'akandeabdul@gmail.com',
        pass: 'sand ygai lgzb spwy',
      },
    });

    const mailOptions = {
      from: 'akandeabdul@gmail.com',
      to: 'akandeabdul@gmail.com',
      subject: `Application for the role of ${role}`,
      attachments: [
        {
          filename: 'cv.pdf',
          content: attachment.toString('base64'),
          encoding: 'base64',
        },
      ],
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).send(error.toString());
      }
      console.log('Email sent:', info.response);
      res.send(`Email sent: ${info.response}`);
    });
  } catch (err) {
    console.error('Unexpected error:', err);
    res.status(500).send(err.toString());
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
