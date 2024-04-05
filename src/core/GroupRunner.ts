import RedUnit from "../RedUnit";
import createDomElement from "./createDomElement";
import UnitTest from "./UnitTest";

class GroupRunner {
	#passCount: number = 0
	#failCount: number = 0
	#ingIndex: number = 0
	#list: UnitTest[] = []
	#rootDom
	#titleDom
	#stateDom
	#testContainerDom
	#redUnit: RedUnit
	#groupTitle: string

	constructor(redUnit: RedUnit, groupTitle: string, initFunc) {
		this.#redUnit = redUnit
		this.#groupTitle = groupTitle
		this.#rootDom = createDomElement('red-unit-test-runner-root')
		this.#titleDom = createDomElement('red-unit-test-runner-test-container-title')
		this.#titleDom.innerHTML = this.#groupTitle
		this.#stateDom = createDomElement()
		this.#testContainerDom = createDomElement('red-unit-test-runner-test-container')
		if(window.self !== window.top) this.#rootDom.style.display = 'none'
		this.#rootDom.appendChild(this.#titleDom)
		this.#rootDom.appendChild(this.#stateDom)
		this.#rootDom.appendChild(this.#testContainerDom)
		document.body.appendChild(this.#rootDom)
		initFunc(this)
		this.#next()
	}

	defineTest = (title, testFunc, expectValue) => {
		const t0 = new UnitTest(title, testFunc, expectValue)
		this.#list.push(t0)
		this.#testContainerDom.appendChild(t0.dom)
		this.#updateState()
		this.#redUnit.increaseTotalCount()
	}

	run(passYn:boolean) {
		if (passYn) this.#passCount++
		else this.#failCount++
		this.#updateState()
		//
		this.#ingIndex++
		this.#redUnit.updateState(passYn)
		if (this.#ingIndex < this.#list.length) {
			requestAnimationFrame(()=>{
				this.#next()
			})
		}
	}

	#next() {
		this.#list[this.#ingIndex].execute(this)
	}

	#updateState() {
		const ingYn = this.#list.length !== (this.#passCount + this.#failCount)
		this.#titleDom.innerHTML = `${this.#groupTitle} - <span style="color:${this.#failCount ? 'red' : ''}">${ingYn ? 'ing...' : this.#failCount ? 'Fail!' : 'All Pass!'}</span>`

		this.#stateDom.innerHTML = `
			<div class="red-unit-test-container-state-box" style="background:${this.#failCount ? 'red' : ''}">
				<div>PASS : <span class="unit-pass-count">${this.#passCount.toLocaleString()}</span></div>
				/<div>FAIL : <span class="unit-fail-count">${this.#failCount.toLocaleString()}</span></div>
				/<div>TOTAL : <span class="unit-total-count">${this.#list.length.toLocaleString()}</span></div>
			</div>
		`
	}
}
Object.freeze(GroupRunner)
export default GroupRunner
