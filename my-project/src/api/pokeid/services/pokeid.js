'use strict';

/**
 * pokeid service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pokeid.pokeid');
