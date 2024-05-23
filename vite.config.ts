import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';

const env = (k: string) => JSON.stringify(process.env[k] || '');

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const envs = loadEnv(mode, process.cwd(), []);

  return {
    plugins: [
      react({
        babel: {
          plugins: ['babel-plugin-styled-components'],
        },
      }),
      svgr({ svgo: false }),
    ],
    css: {
      devSourcemap: true,
    },
    server: {
      open: true,
      port: 3000,
      // proxy: {},
    },
    envPrefix: 'REACT_APP_',
    resolve: {
      alias: {
        assets: '/src/assets',
        components: '/src/components',
        config: '/src/config',
        hooks: '/src/hooks',
        modules: '/src/modules',
        router: '/src/router',
        services: '/src/services',
        styles: '/src/styles',
        types: '/src/types',
        utils: '/src/utils',
      },
    },
    build: {
      outDir: 'build',
      copyPublicDir: false,
      sourcemap: true,
      assetsInlineLimit: 0,
      modulePreload: false,
      cssCodeSplit: false,
      // rollupOptions: {
      //   output: {
      //     assetFileNames(chunkInfo) {
      //       /**
      //        * NOTE: Since cssCodeSplit is false, we only have one .css file
      //        */
      //       if (chunkInfo.name.endsWith('.css')) return 'static/css/main.[hash:20].[ext]';
      //       return 'static/media/[name].[hash:20].[ext]';
      //     },
      //     chunkFileNames: 'static/js/[name].[hash:20].chunk.js',
      //     entryFileNames(chunkInfo) {
      //       if (chunkInfo.name === 'index') return 'static/js/main.[hash:20].js';
      //       return 'static/js/[name].[hash:20].js';
      //     },
      //   },
      // },
    },
    /**
     * NOTE:
     * For when building in production mode,
     * inject envs from process.env into Vite's import.meta.env special object
     */
    // define: {
    //   REACT_APP_SENTRY_RELEASE: env('REACT_APP_SENTRY_RELEASE'),
    //   REACT_APP_SENTRY_DSN: env('REACT_APP_SENTRY_DSN'),
    //   REACT_APP_STRIPE_KEY_NZ: env('REACT_APP_STRIPE_KEY_NZ'),
    //   REACT_APP_STRIPE_KEY_US: env('REACT_APP_STRIPE_KEY_US'),
    //   REACT_APP_HUBSPOT_TRACKING_ID: env('REACT_APP_HUBSPOT_TRACKING_ID'),
    //   REACT_APP_YABBLE_SLS_API_BASE_URL: env('REACT_APP_YABBLE_SLS_API_BASE_URL'),
    //   REACT_APP_DAGSTER_URL: env('REACT_APP_DAGSTER_URL'),
    //   REACT_APP_GTM_ID: env('REACT_APP_GTM_ID'),
    //   REACT_APP_SEGMENT_KEY: env('REACT_APP_SEGMENT_KEY'),
    //   REACT_APP_ENVIRONMENT: env('REACT_APP_ENVIRONMENT'),
    //   REACT_APP_PUSHER_KEY: env('REACT_APP_PUSHER_KEY'),
    //   REACT_APP_PUSHER_APP_CLUSTER: env('REACT_APP_PUSHER_APP_CLUSTER'),
    // },
  };
});
