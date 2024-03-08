export default defineEventHandler(async (event) => {
    const session = event.context.session;
  
    const response = await fetch('https://api.youcanshop.dev/products', {
        headers: {
            Authorization: 'Bearer ' + session.accessToken
        }
    });
    const orders = await response.json();
    console.log("getting products")

    return orders;
});