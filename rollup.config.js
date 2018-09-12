import typescript from 'rollup-plugin-typescript';

export default {
  input: './src/index.tsx',
  output: {
    dir: 'dist',
    file: 'index.js',
    format: 'cjs'
  },
  external: ['react'],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json'
    })
  ]
};
