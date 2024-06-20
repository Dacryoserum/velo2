const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::parking.parking", ({ strapi }) => ({
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

    try {
      const parkings = await strapi
        .service("api::parking.parking")
        .findWithinBounds(latBottom, latTop, lngBottom, lngTop);

      return this.transformResponse(parkings);
    } catch (error) {
      ctx.throw(500, error.message);
    }
  },
}));
