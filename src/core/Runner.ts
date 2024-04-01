import UnitTest from "./UnitTest";

class Runner {
	#passCount: number = 0
	#failCount: number = 0
	#list: UnitTest[] = []
	#ingIndex: number = 0
	#dom
	#state

	constructor(title) {
		this.#dom = document.createElement('div')
		this.#state = document.createElement('div')
		this.#dom.appendChild(this.#state)
		document.body.appendChild(this.#dom)
	}

	define = (title, testDefine) => {
		const t0 = new UnitTest(title, testDefine)
		this.#list.push(t0)
		this.#dom.appendChild(t0.dom)
		this.#updateState()
	}

	start() {
		this.#next()
	}

	run(result) {
		if (result) this.#passCount++
		else this.#failCount++
		this.#updateState()
		//
		this.#ingIndex++
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
