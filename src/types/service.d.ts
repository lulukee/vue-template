export type Method = 'get' | 'post' | 'put' | 'delete' | 'patch'

export type ReqFn = (url: string, isMock?: boolean, data?: any) => AxiosPromise

export type ReqExec = {
	[x: string]: any
	get: ReqFn
	post: ReqFn
	put: ReqFn
	delete: ReqFn
	patch: ReqFn
}
