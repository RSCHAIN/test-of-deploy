module.exports = {
  trailingSlash: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    };
  }
};
