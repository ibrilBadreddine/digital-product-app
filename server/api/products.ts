export default defineEventHandler(async (event) => {
  const response = await fetch("https://api.youcanshop.dev/products", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + event.context.session.accessToken,
    },
  });
  return {
    response: await response.json(),
  };
});
