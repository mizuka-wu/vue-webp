class WebP {
	constructor() {
		this.isSupportWebp = false
		try {
			this.isSupportWebp = (document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0);
		} catch (err) {
			console.info('This browser not support Webp')
		}
	}
	install(Vue, config) {
		Vue.directive('webp', (el, binding, vnode) => {
			if (vnode.tag !== 'img') {
				return
			}
			if (this.isSupportWebp) {
				try {
					el.src = binding.value.toString().replace(/(\.jpg|\.png)/g, ".webp")
				} catch (e) {
					console.error(e)
				}
			}
		})
	}
}
export default new WebP()