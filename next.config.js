const devConfig = {
  env: {
    domain: 'localhost:3000',
  },
};

const prodConfig = {
  env: {
    domain: 'boondocks.tech',
  },
};

module.exports = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
