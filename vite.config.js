import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import copy from 'vite-plugin-copy';

export default defineConfig({
  plugins: [
    react(),
    copy({
      patterns: [
        { from: 'src/data/addons.json', to: 'addons.json' },
        { from: 'src/data/cartItems.json', to: 'cartItems.json' },
        { from: 'src/data/milkteaFlavors.json', to: 'milkteaFlavors.json' },
        { from: 'src/data/series.json', to: 'series.json' },
        { from: 'src/data/sizes.json', to: 'sizes.json' },
      ],
    }),
  ],
});
