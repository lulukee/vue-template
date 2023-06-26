import { CacheKeyType, CacheType } from '@/types/utils'

class Cache<T extends string> {
	storage!: Storage
	constructor(type: CacheType) {
		if (type === 'localCache') {
			this.storage = localStorage
		} else if (type === 'sessionCache') {
			this.storage = sessionStorage
		}
	}

	getCache(key: T) {
		const res = this.storage.getItem(key)

		return res === 'undefined' ? undefined : JSON.parse(res!)
	}

	setCache(key: T, value: any) {
		this.storage.setItem(key, JSON.stringify(value))
	}

	removeCache(key: T) {
		this.storage.removeItem(key)
	}

	clearCache() {
		this.storage.clear()
	}
}

export const localCache = new Cache<CacheKeyType>('localCache')
export const sessionCache = new Cache<CacheKeyType>('sessionCache')
