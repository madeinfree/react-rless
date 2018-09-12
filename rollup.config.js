import typescript from 'rollup-plugin-typescript';

export default {
  input: './src/index.tsx',
  output: {
    dir: 'dist',
    file: 'index.js',
    format: 'cjs'
  },
  external: ['react', 'styled-components'],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json'
    })
  ]
};
