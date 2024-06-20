const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::parking.parking", ({ strapi }) => ({
  async find(ctx) {
    return await super.find(ctx);
  },
  async findWithinBounds(ctx) {
    const { latBottom, latTop, lngBottom, lngTop } = ctx.query;

    if (
      isNaN(latBottom) ||
      isNaN(latTop) ||
      isNaN(lngBottom) ||
      isNaN(lngTop)
    ) {
      return ctx.badRequest("Invalid coordinates");
    }

    console.log("Received coordinates:", {
      latBottom,
      latTop,
      lngBottom,
      lngTop,
    });

    try {
      const parkings = await strapi.entityService.findMany(
        "api::parking.parking",
        {
          filters: {
            X: { $gte: parseFloat(lngBottom), $lte: parseFloat(lngTop) },
            Y: { $gte: parseFloat(latBottom), $lte: parseFloat(latTop) },
          },
        }
      );

      console.log("Filtered parkings:", parkings);

      return this.transformResponse(parkings);
    } catch (error) {
      ctx.throw(500, error.message);
    }
  },
}));