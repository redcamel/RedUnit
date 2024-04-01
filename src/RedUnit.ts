import './core/RedUnit.css'
import createDomElement from "./core/createDomElement";
import PageContainer from "./core/page/PageContainer";
import TotalPageState from "./core/page/TotalPageState";
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

	constructor(title: string) {
		this.#title = title
	}

	static pageLoader(testName: string, testList: { title: string, src: string }[]) {
		const totalState = new TotalPageState(testName, testList)
		testList.forEach(item => {
			new PageContainer(item.title, item.src, totalState)
		});
	}

	testGroup = (groupTitle: string, initFunc) => {
		this.#initDom()
		new Runner(this, groupTitle, initFunc)
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

	#initDom() {
		if (!this.#rootDom) {
			this.#rootDom = createDomElement('red-unit-root')
			{
				this.#titleRootDom = createDomElement('red-unit-test-group-title-wrap')
				this.#titleDom = createDomElement('red-unit-test-group-title')
				this.#titleDom.innerHTML = this.#title
				this.#stateDom = createDomElement('red-unit-test-suite-state-box')
				this.#titleRootDom.appendChild(this.#titleDom)
				this.#titleRootDom.appendChild(this.#stateDom)
			}
			this.#rootDom.appendChild(this.#titleRootDom)
			document.body.appendChild(this.#rootDom)
		}
	}
}

Object.freeze(RedUnit)
export default RedUnit
