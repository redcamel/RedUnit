import createDomElement from "../core/createDomElement";
import UnitTest from "../UnitTest";

class RedUnitTotalState {
	#dom: HTMLDivElement
	#pass: number = 0
	#fail: number = 0
	#total: number = 0
	#passPageCount: number = 0
	#failPageCount: number = 0
	#totalPageCount: number = 0


	constructor(title: string, testList: { title: string, src: string }[]) {
		this.#totalPageCount = testList.length
		this.#dom = createDomElement();
		this.#render(title);
		document.body.appendChild(this.#dom);
	}

	addTotalPageCount() {
		this.#totalPageCount++
		this.#dom.querySelector('.unit-total-count').innerHTML = this.#totalPageCount.toLocaleString()
	}

	#render(title: string) {
		this.#dom.innerHTML = `
        <div>${title}</div>
        <div class="red-unit-total-state-box">
          <div>page: ${this.#pass}</div>/<div>fail: ${this.#fail}</div>/<div>total: ${this.#total}</div>
        </div>
        <div class="red-unit-total-state-box">
          <div>pass page: ${this.#passPageCount}</div>/<div>fail page: ${this.#failPageCount}</div>/ <div>total page: <span class="unit-total-count">${this.#totalPageCount}</span></div>
        </div>
    `
	}
}

export default RedUnitTotalState
