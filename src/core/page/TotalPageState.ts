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
		this.#rootDom = createDomElement('red-unit-total-state-wrap');
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

	increaseTotalPassPageNum() {
		this.#passPageCount++
		this.#render()
	}

	increaseTotalFailPageNum() {
		this.#failPageCount++
		this.#render()
	}

	#render() {
		const ingYn = this.#totalTestCount !== (this.#passTestCount + this.#failTestCount)
		this.#rootDom.innerHTML = `
        <div class="red-unit-total-title">
        	${this.#title} - <span style="color:${ingYn ? 'white' : this.#failTestCount ? 'red' : ''}">${ingYn ? 'ing...' : this.#failTestCount ? 'Fail!' : 'All Pass!!!'}</span>
				</div>
        <div class="red-unit-total-state-box">
          <div>Pass: ${this.#passTestCount.toLocaleString()}</div>
          /<div style="color:${this.#failTestCount ? 'red' : ''}">Fail: ${this.#failTestCount.toLocaleString()}</div>
          /<div>Total: ${this.#totalTestCount.toLocaleString()}</div>
        </div>
        <div class="red-unit-total-state-box">
          <div>PASS page: ${this.#passPageCount.toLocaleString()}</div>
          /<div style="color:${this.#failTestCount ? 'red' : ''}">FAIL page: ${this.#failPageCount.toLocaleString()}</div>
          / <div>TOTAL page: <span class="unit-total-count">${this.#totalPageCount.toLocaleString()}</span></div>
        </div>
    `
	}
}
Object.freeze(TotalPageState)
export default TotalPageState
