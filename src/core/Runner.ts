import RedUnit from "../RedUnit";
import createDomElement from "./createDomElement";
import UnitTest from "./UnitTest";

class Runner {
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
		this.#titleDom = createDomElement()
		this.#titleDom.innerHTML = this.#groupTitle
		this.#stateDom = createDomElement()
		this.#testContainerDom = createDomElement('red-unit-test-runner-test-container')
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

	run(result) {
		if (result) this.#passCount++
		else this.#failCount++
		this.#updateState()
		//
		this.#ingIndex++
		this.#redUnit.updateState(result)
		if (this.#ingIndex < this.#list.length) {
			this.#next()
		}
	}

	#next() {
		this.#list[this.#ingIndex].execute(this)
	}

	#updateState() {
		this.#stateDom.innerHTML = `
			<div class="red-unit-test-suite-state-box" style="background:${this.#failCount ? 'red' : 'green'}">
				<div>PASS : <span class="unit-pass-count">${this.#passCount}</span></div>
				/<div>FAIL : <span class="unit-fail-count">${this.#failCount}</span></div>
				/<div>TOTAL : <span class="unit-total-count">${this.#list.length}</span></div>
			</div>
		`
	}
}

export default Runner
