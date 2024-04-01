import createDomElement from "../createDomElement";

class TotalPageState {
	#rootDom: HTMLDivElement
	//
	#passTestCount: number = 0
	#failTestCount: number = 0
	#totalTestCount: number = 0
	//
	#passPageCount: number = 0
	#failPageCount: number = 0
	#totalPageCount: number = 0
	//
	#title: string

	constructor(title: string, testList: { title: string, src: string }[]) {
		this.#title = title
		this.#totalPageCount = testList.length
		this.#rootDom = createDomElement();
		this.#render();
		document.body.appendChild(this.#rootDom);
	}

	increaseTotalUnitNum() {
		this.#totalTestCount++
		this.#render()
	}

	increaseTotalPassUnitNum() {
		this.#passTestCount++
		this.#render()
	}

	increaseTotalFailUnitNum() {
		this.#failTestCount++
		this.#render()
	}

	#render() {
		this.#rootDom.innerHTML = `
        <div>${this.#title}</div>
        <div class="red-unit-total-state-box">
          <div>Pass: ${this.#passTestCount}</div>/<div>Fail: ${this.#failTestCount}</div>/<div>Total: ${this.#totalTestCount}</div>
        </div>
        <div class="red-unit-total-state-box">
          <div>Pass page: ${this.#passPageCount}</div>/<div>Fail page: ${this.#failPageCount}</div>/ <div>Total page: <span class="unit-total-count">${this.#totalPageCount}</span></div>
        </div>
    `
	}
}

export default TotalPageState
