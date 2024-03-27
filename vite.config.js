import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import eslintPlugin from "vite-plugin-eslint";
import { VitePluginRadar } from 'vite-plugin-radar'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 5176,
    },
    plugins: [vue(), eslintPlugin(),VitePluginRadar({
        analytics: {
            id: process.env.VITE_APP_GOOGLE_ANALYTICS_ID,
        },
    })],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    }
})
