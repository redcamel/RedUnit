import './core/RedUnit.css'
import RedUnitIframe from "./core/page/RedUnitIframe";
import RedUnitTotalState from "./core/page/RedUnitTotalState";
import Runner from "./core/Runner";

class RedUnit {
	#passCount: number = 0
	#failCount: number = 0
	#totalCount: number = 0
	#rootDom
	#titleRootDom
	#titleDom
	#title: string
	#stateDom

	constructor() {
	}

	testGroup = (title, initFunc) => {
		this.#title = title
		this.#initDom()
		new Runner(this, title, initFunc)
	}

	#initDom() {
		if (!this.#rootDom) {
			this.#rootDom = document.createElement('div')
			this.#rootDom.className = 'red-unit-root'
			{
				this.#titleRootDom = document.createElement('div')
				this.#titleRootDom.className = 'red-unit-test-group-title-wrap'
				this.#titleDom = document.createElement('div')
				this.#titleDom.className = 'red-unit-test-group-title'
				this.#titleDom.innerHTML = this.#title
				this.#stateDom = document.createElement('div')
				this.#stateDom.className ='red-unit-test-suite-state-box'
				this.#titleRootDom.appendChild(this.#titleDom)
				this.#titleRootDom.appendChild(this.#stateDom)
			}
			this.#rootDom.appendChild(this.#titleRootDom)
			document.body.appendChild(this.#rootDom)
		}
	}

	increaseTotalCount() {
		this.#totalCount++
	}

	updateState(result) {
		if (result) this.#passCount++
		else this.#failCount++
		//
		this.#stateDom.innerHTML = `
				<div>pass : <span class="unit-pass-count">${this.#passCount}</span></div>
				/<div>fail : <span class="unit-fail-count">${this.#failCount}</span></div>
			  /<div>total : <span class="unit-total-count">${this.#totalCount}</span></div>	
		`
	}

	static pageLoader(testName: string, testList: { title: string, src: string }[]) {
		const totalState = new RedUnitTotalState(testName, testList)
		testList.forEach(item => {
			new RedUnitIframe(item.title, item.src, totalState)
		});
	}
}

Object.freeze(RedUnit)
export default RedUnit
