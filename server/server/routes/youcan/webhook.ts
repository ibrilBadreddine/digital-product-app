export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    
    console.log('Webhook processed:', body.event_name);
    
    // Send Email

    if (body.data.payment.payload.gateway != "cod"){
        // check if order is coming from selected product
        var product = body.data.variants[0].variant.product
        console.log("Sending mail to ", product.name)
    }

    


});