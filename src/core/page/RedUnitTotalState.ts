import createDomElement from "../createDomElement";

class RedUnitTotalState {
	#dom: HTMLDivElement
	#passTestCount: number = 0
	#failTestCount: number = 0
	#totalTestCount: number = 0
	#passPageCount: number = 0
	#failPageCount: number = 0
	#totalPageCount: number = 0
	#title: string

	constructor(title: string, testList: { title: string, src: string }[]) {
		this.#title = title
		this.#totalPageCount = testList.length
		this.#dom = createDomElement();
		this.#render();
		document.body.appendChild(this.#dom);
	}

	increaseUnitNum() {
		this.#totalTestCount++
		this.#render()
	}

	increasePassUnitNum() {
		this.#passTestCount++
		this.#render()
	}

	increaseFailUnitNum() {
		this.#failTestCount++
		this.#render()
	}

	#render() {
		this.#dom.innerHTML = `
        <div>${this.#title}</div>
        <div class="red-unit-total-state-box">
          <div>page: ${this.#passTestCount}</div>/<div>fail: ${this.#failTestCount}</div>/<div>total: ${this.#totalTestCount}</div>
        </div>
        <div class="red-unit-total-state-box">
          <div>pass page: ${this.#passPageCount}</div>/<div>fail page: ${this.#failPageCount}</div>/ <div>total page: <span class="unit-total-count">${this.#totalPageCount}</span></div>
        </div>
    `
	}
}

export default RedUnitTotalState
