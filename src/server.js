// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');
const app = express();
const cors = require('cors')
app.use(cors())
const port = process.env.PORT || 3003;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(express.static(path.join(__dirname, 'dist')));

app.post('/api/upload', upload.single('cv'), (req, res) => {
    const { role } = req.body;
    const attachment = req.file.buffer;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // use SSL
        auth: {
          user: "akandeabdul@gmail.com",
          pass: "sand ygai lgzb spwy",
        },
      });
      const mailOptions = {
        from: 'akandeabdul@gmail.com',
        to: 'akandeabdul@gmail.com',
        subject: `Application for the role of ${role}`,
        attachments: [
          {
            filename: 'cv.pdf', // Change the filename as needed
            content: attachment.toString('base64'), // Convert buffer to base64
            encoding: 'base64', // Set encoding to base64
          },
        ],
      };
    
      // Send email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return res.status(500).send(error.toString());
        }
        res.send(`Email sent: ${info.response}`);
      });
    });




  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
