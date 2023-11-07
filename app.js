// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');

// const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.post('/submit', (req, res) => {
//     const orders = req.body.order; // Retrieve an array of all 12 order values

//     // Setup nodemailer
//     const transporter = nodemailer.createTransport({
//         service: 'Gmail', // Use your email service
//         auth: {
//             user: 'winnerisaac62@gmail.com', // Your email
//             pass: 'my1980mother' // Your password or app-specific password
//         }
//     });

//     const mailOptions = {
//         from: 'winsamlab222@gmail.com',
//         to: 'winnerisaac62@gmail.com', // Recipient's email
//         subject: 'New Order',
//         text: `New orders: ${orders.join(', ')}` // Join the orders into a single string
//     };

//     // Send email
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.log(error);
//             res.send('Error, your orders could not be submitted.');
//         } else {
//             console.log('Email sent: ' + info.response);
//             res.send('Your orders have been submitted successfully.');
//         }
//     });
// });

// const port = 3000;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
