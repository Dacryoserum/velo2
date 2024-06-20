module.exports = {
  routes: [
    {
      method: "GET",
      path: "/parkings/bounds",
      handler: "parking.findWithinBounds",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/parkings",
      handler: "parking.find",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
