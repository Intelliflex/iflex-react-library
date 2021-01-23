//Note: When publishing to Github pages the baseUrl must be set to the Package Name (otherwise do not set it)
const path = require('path')
module.exports = {
  mount: {
    public: '/',
    src: '/build'
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-babel',
    '@snowpack/plugin-sass'
  ],
  alias: {
    'iflex-react-library': path.join(__dirname, 'src/library'),
    '../assets': 'build/library/assets'
    /* ... */
  },
  buildOptions: { metaUrlPath: '_snowpack', baseUrl: '/iflex-react-library' },
  optimize: {
    target: 'es2020',
    bundle: true,
    //minify: true,
    treeshake: true
  }
}
