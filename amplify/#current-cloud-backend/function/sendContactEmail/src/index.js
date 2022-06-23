/* eslint-disable no-console */
const nodemailer = require('nodemailer');

require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: process.env.USERNAME,
    pass: process.env.PASSWORD
  }
});

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  const body = JSON.parse(event.body);

  console.log({ body });

  await transporter.sendMail({
    from: 'Dev Site',
    to: process.env.USERNAME,
    subject: 'Message from Dev Site',
    text: `Name: ${body.name}\nEmail: ${body.email}\nMessage:\n${body.message}`
  }).catch(e => console.log({ e }));

  return {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*'
    },
    body: JSON.stringify('Hello from Lambda!'),
  };
};
