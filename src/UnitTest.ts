import createDomElement from "./core/createDomElement";

class UnitTest {
	#dom
	#runner

	constructor(title, runner) {
		this.#dom = createDomElement()
		this.#dom.innerHTML = `
			<div>${title}</div>
			<div>${runner}</div>
		`
		document.body.appendChild(this.#dom)
		this.#runner = runner
		dispatchEvent(new CustomEvent('ADD_UNIT_NUM',this))
	}

	run() {
		console.log('run',title,this.#runner)
	}
}

export default UnitTest
