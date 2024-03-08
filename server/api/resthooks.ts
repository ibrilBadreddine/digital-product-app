export default defineEventHandler(async (event) => {
    const session = event.context.session;

    var target_url : string = process.env.NUXT_YOUCAN_WEBHOOK_URL || "Not found"
    var urlencoded = new URLSearchParams();
    
    urlencoded.append("event", "order.created");
    urlencoded.append("target_url", target_url);

    return await fetch('https://api.youcanshop.dev/resthooks/subscribe', {
        method: "POST",
        headers: {
            Authorization: 'Bearer ' + session.accessToken,
            'Accept': 'application/json'
        },
        body: urlencoded
    });
});
