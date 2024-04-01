import RedUnit from "../RedUnit";
import UnitTest from "./UnitTest";

class Runner {
	#passCount: number = 0
	#failCount: number = 0
	#ingIndex: number = 0
	#list: UnitTest[] = []
	#dom
	#state
	#redUnit: RedUnit

	constructor(redUnit: RedUnit, title: string, initFunc) {
		this.#redUnit = redUnit
		this.#dom = document.createElement('div')
		this.#dom.className = 'red-unit-test-runner-root'

		this.#state = document.createElement('div')
		this.#dom.appendChild(this.#state)
		document.body.appendChild(this.#dom)
		initFunc(this)
		this.#next()
	}

	define = (title, testFunc, expectValue) => {
		const t0 = new UnitTest(title, testFunc, expectValue)
		this.#list.push(t0)
		this.#dom.appendChild(t0.dom)
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
		this.#state.innerHTML = `
			<div class="red-unit-test-suite-state-box">
				<div>pass : <span class="unit-pass-count">${this.#passCount}</span></div>
				/<div>fail : <span class="unit-fail-count">${this.#failCount}</span></div>
				/<div>total : <span class="unit-total-count">${this.#list.length}</span></div>
			</div>
		`
	}
}

export default Runner
