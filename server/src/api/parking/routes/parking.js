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
    ],
  };
  