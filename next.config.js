const devConfig = {
  env: {
    domain: 'localhost:3000',
  },
};

const prodConfig = {
  env: {
    domain: 'neat.com',
  },
};

module.exports = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
