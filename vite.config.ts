import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	base: "./",
  plugins: [react()],
	server: {
		proxy: {
			"/api": {
				target: "http://127.0.0.1:3000",
				changeOrigin: true,
				ws: true,
				rewrite: (path) => path.replace(/^\/api/, "")
			}
		}
	}
})
