import { Method, ReqExec } from '@/types/service'
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

class AxiosUtil {
	static axiosUtil: AxiosUtil = new AxiosUtil()
	axiosInstance!: AxiosInstance
	request!: ReqExec
	constructor() {
		this.request = {
			get: (): any => {},
			post: (): any => {},
			put: (): any => {},
			delete: (): any => {},
			patch: (): any => {},
		}
		this.createAxiosInstance()
		this.beforeReqIntercept()
		this.beforResIntercept()
		this.reqPrepare()
	}
	createAxiosInstance() {
		this.axiosInstance = axios.create({
			timeout: 15000,
		})
	}

	// 1. 请求拦截器
	beforeReqIntercept() {
		this.axiosInstance.interceptors.request.use((request) => {
			return request
		})
	}
	// 2. 响应拦截器
	beforResIntercept() {
		this.axiosInstance.interceptors.response.use(
			(response) => {
				const { code } = response.data
				if (code === 200) {
					return response.data
				} else if (code === 500) {
					console.error('发生了错误')
					return
				} else {
					console.error('发生了未知错误')
					return
				}
			},
			() => {
				console.error('服务器错误')
			}
		)
	}

	// 3. 发送请求
	sendRequest(options: AxiosRequestConfig) {
		this.axiosInstance.defaults.baseURL = 'http://codercba.com:5000'
		return this.axiosInstance(options)
	}

	// 4. 扩展方法
	reqPrepare() {
		const methods: Method[] = ['get', 'post', 'put', 'delete', 'patch']

		return methods.forEach((method) => {
			this.request[method] = (url, isMock, data) => {
				return this.sendRequest({
					method,
					url,
					data,
				})
			}
		})
	}
}

export default AxiosUtil.axiosUtil.request
