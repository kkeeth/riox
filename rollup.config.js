import pluginNodeResolve from '@rollup/plugin-node-resolve'
import pluginCommonjs from '@rollup/plugin-commonjs'
import pluginTypescript from '@rollup/plugin-typescript'
import { babel as pluginBabel } from '@rollup/plugin-babel'

import * as path from 'path'
import pkg from './package.json'

const moduleName = pkg.name
const banner = `/*!
  ${moduleName}.js v${pkg.version}
  ${pkg.homepage}
  @License ${pkg.license}.
*/`

export default [
  {
    // エントリポイント
    input: 'src/riox.ts',
    output: {
      file: pkg.main,
      format: 'iife',
      sourcemap: 'inline',
      banner,
    },
    plugins: [
      pluginTypescript(),
      pluginCommonjs({
        extensions: ['.js', '.ts'],
      }),
      pluginBabel({
        babelHelpers: 'bundled',
        configFile: path.resolve(__dirname, '.babelrc.js'),
      }),
      pluginNodeResolve({
        browser: true,
      }),
    ],
  },
  {
    input: 'src/riox.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: 'inline',
        banner,
        exports: 'default',
      },
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.devDependencies || {}),
    ],
    plugins: [
      pluginTypescript(),
      pluginBabel({
        babelHelpers: 'bundled',
        configFile: path.resolve(__dirname, '.babelrc.js'),
      }),
    ],
  },
]
