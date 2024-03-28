import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import {string} from 'rollup-plugin-string'
import postcss from 'rollup-plugin-postcss'
export default [
	{
		input: './src/index.ts',
		output: {
			file: './dist/index.js',
			format: 'es',
		},
		plugins: [
			nodeResolve(),
			json(),
			postcss({
				inject: true, // 기본값입니다. 이 결과를 JavaScript 번들에 주입합니다.
				extensions: ['.css'],
				minimize:true
			}),
			string({ include: '**/*.wgsl' }),
			typescript({
					tsconfig: 'tsconfig.json'
				}
			),

		]
	},

	{
		input: './src/index.ts',
		output: {
			file: './dist/index.min.js',
			format: "es",

		},
		plugins: [

			nodeResolve(),
			json(),
			postcss({
				inject: true, // 기본값입니다. 이 결과를 JavaScript 번들에 주입합니다.
				extensions: ['.css'],
				minimize:true
			}),
			string({ include: '**/*.wgsl' }),
			typescript({
					tsconfig: 'tsconfig.json'
				}
			),
			terser(),
		]
	},
]
