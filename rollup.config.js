// import path from 'path'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import { uglify } from 'rollup-plugin-uglify'
import image from '@rollup/plugin-image'
import postcss from 'rollup-plugin-postcss'

const input = 'src/library/index.js'
const output = 'dist/index'
// const projectRootDir = path.resolve(__dirname)

export default [
  {
    input: input,
    output: {
      file: `${output}.js`,
      format: 'cjs',
      exports: 'named'
    },
    plugins: [
      resolve({
        browser: true
      }),
      image(),
      commonjs({
        include: ['node_modules/**'],
        namedExports: {
          'react-dom': ['createPortal']
        }
      }),
      babel({
        exclude: 'node_modules/**'
      }),
      external(),
      uglify(),
      postcss({
        plugins: []
      })
    ]
  },
  {
    input: input,
    output: {
      file: `${output}.modern.js`,
      format: 'es',
      exports: 'named'
    },

    plugins: [
      resolve(),
      image(),
      commonjs({
        include: ['node_modules/**'],
        namedExports: {
          'react-dom': ['createPortal']
        }
      }),
      babel({
        exclude: 'node_modules/**'
      }),
      external(),
      terser(),
      postcss({
        plugins: []
      })
    ]
  },
  {
    input: input,
    output: {
      name: 'ReactUi',
      file: `${output}.umd.js`,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'styled-components': 'styled',
        'prop-types': 'PropTypes',
        'prop-types/checkPropTypes': 'checkPropTypes'
      },
      format: 'umd',
      exports: 'named'
    },
    plugins: [
      resolve(),
      image(),
      commonjs({
        include: ['node_modules/**'],
        namedExports: {
          'react-dom': ['createPortal']
        }
      }),
      external(),
      babel({
        exclude: 'node_modules/**'
      }),
      terser(),
      postcss({
        plugins: []
      })
    ]
  }
]
