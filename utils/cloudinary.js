const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: 'neophron',
  api_key: '432321369556336',
  api_secret: 'aSebNet0V09FguKsV3J5EknzzwU',
});

module.exports = cloudinary;