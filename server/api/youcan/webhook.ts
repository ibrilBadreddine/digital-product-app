
import nodemailer from 'nodemailer';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    
    console.log('Webhook processed:', body.data.customer.email);
    
    // Send Email
    if (body.data.payment.payload.gateway != "cod"){
        // check if order is coming from selected product
        var product = body.data.variants[0].variant.product
        var customer = body.data.customer
        console.log("Sending mail to ", customer.email, "for product ", product.name)
        email_product = await prisma.product.findFirst({ where : { id : product.id}});

        if (email_product != null){
            // Create a transport for sending emails (replace with your email service's data)
            const transporter = nodemailer.createTransport({
                service: 'Gmail', // Use your email service
                auth: {
                user: 'your_email@gmail.com', // Your email address
                pass: 'your_password', // Your password
                },
            });
                    
            var HTMLContent =`
                    <!DOCTYPE html>
                <html lang="en">
                <head>
                <meta charset="UTF-8">
                <title>here's your purchased product</title>
                </head>
                <body>
                <p>You can find the link to your pdf here</p>
                <a href=${email_product.file}>
                </body>
                </html>
            `
            // Set email options
            const mailOptions = {
                from: 'your_email@gmail.com', // Sender
                to: customer.email, // Recipient
                subject: 'Purchased Product', // Email subject
                html: HTMLContent, // Email HTML content

            };
            
            // Send the email
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                console.error('Email sending failed:', error);
                } else {
                console.log('Email sent: ' + info.response);
                }
            });
        }
    }
});