"use strict";

/**
 * parking service
 */

module.exports = {
  async findWithinBounds(latBottom, latTop, lngBottom, lngTop) {
    return strapi.entityService.findMany("api::parking.parking", {
      filters: {
        X: { $gte: parseFloat(latBottom), $lte: parseFloat(latTop) },
        Y: { $gte: parseFloat(lngBottom), $lte: parseFloat(lngTop) },
      },
    });
  },
};
