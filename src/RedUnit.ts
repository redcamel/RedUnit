import 'prismjs/themes/prism-tomorrow.css'; // 스타일
import './core/RedUnit.css'
import createDomElement from "./core/createDomElement";
import PageContainer from "./core/page/PageContainer";
import TotalPageState from "./core/page/TotalPageState";
import GroupRunner from "./core/GroupRunner";

class RedUnit {
	#passCount: number = 0
	#failCount: number = 0
	#totalCount: number = 0
	#groupCount: number = 0
	#title: string
	#rootDom!: HTMLElement
	#titleRootDom!: HTMLElement
	#titleDom!: HTMLElement
	#stateDom!: HTMLElement

	constructor(title: string) {
		this.#title = title
	}

	static pageLoader(testName: string, testList: { title: string, src: string }[], parentDom?: HTMLElement) {
		const totalState = new TotalPageState(testName, testList)
		let targetDom: HTMLElement;
		if (!parentDom) {
			targetDom = createDomElement('red-unit-pages-root')
			document.body.appendChild(targetDom)
		} else {
			targetDom = parentDom;
		}
		testList.forEach(item => {
			const t0 = new PageContainer(item.title, item.src, totalState)
			targetDom.appendChild(t0.wrap)
		});
	}

	testGroup = (groupTitle: string, initFunc: (runner: GroupRunner) => void) => {
		this.#initDom()
		this.#groupCount++
		new GroupRunner(this, groupTitle, initFunc)
	}

	increaseTotalCount() {
		this.#totalCount++
	}

	updateState(result: boolean) {
		if (result) this.#passCount++
		else this.#failCount++
		//
		const ingYn = this.#totalCount !== (this.#passCount + this.#failCount)
		this.#titleDom.innerHTML = `${this.#title} - <span style="color:${ingYn ? 'white' : this.#failCount ? 'red' : ''}">${ingYn ? 'ing...' : this.#failCount ? 'Fail!' : 'All Pass!!'}</span>`
		this.#stateDom.style.background = this.#failCount ? 'red' : ''
		//
		this.#stateDom.innerHTML = `
				<div>pass : <span class="unit-pass-count">${this.#passCount.toLocaleString()}</span></div>
				/<div>fail : <span class="unit-fail-count">${this.#failCount.toLocaleString()}</span></div>
			  /<div>total : <span class="unit-total-count">${this.#totalCount.toLocaleString()}</span></div>	
			  ${this.#groupCount > 1 ? `/<div>group : <span class="unit-group-count">${this.#groupCount.toLocaleString()}</span></div>` : ''}	
		`
	}

	#initDom() {
		if (!this.#rootDom) {
			this.#rootDom = createDomElement('red-unit-root')
			{
				this.#titleRootDom = createDomElement('red-unit-test-runner-title-wrap')
				this.#titleDom = createDomElement('red-unit-test-runner-title')
				this.#titleDom.innerHTML = this.#title
				this.#stateDom = createDomElement('red-unit-test-runner-state-box')
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
