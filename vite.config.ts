import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
// import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    vanillaExtractPlugin(),
    // dts({
    //     insertTypesEntry: true,
    //   })
  ] 
})
