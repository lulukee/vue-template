import { ConfigEnv, defineConfig, ServerOptions } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import dotenv, { DotenvParseOutput } from 'dotenv'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig((env: ConfigEnv) => {
	const mode = env.mode
	const envFileName = '.env'
	const curEnvFileName = `${envFileName}.${mode}`
	let server: ServerOptions = {}
	const data = fs.readFileSync(curEnvFileName)
	const envData: DotenvParseOutput = dotenv.parse(data)

	if (mode === 'development') {
		server = {
			host: envData.VITE_HOST,
			port: envData.VITE_PORT,
		}
	}

	return {
		plugins: [vue()],
		server,
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
			},
		},
	}
})
