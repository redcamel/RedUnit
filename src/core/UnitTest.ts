import CONST_COUNT_EVENT from "./CONST_COUNT_EVENT";
import createDomElement from "./createDomElement";

class UnitTest {
	#dom;
	#run;
	#expect;

	get dom() {
		return this.#dom;
	}

	get expect() {
		return this.#expect;
	}

	constructor(title, testDefine) {
		this.#run = testDefine.run;
		this.#expect = testDefine.expect;
		this.#initializeDom(title);
		dispatchEvent(new CustomEvent('ADD_UNIT_NUM'));
	}

	#initializeDom(title) {
		this.#dom = createDomElement();
		this.#dom.innerHTML = `
			<div class="red-unit-test-wrap">
				<div class="red-unit-test-title">${title}</div>
				<div>${this.#run}</div>
				<div class="red-unit-test-result-wrap">
					<div><span>expect</span>: ${JSON.stringify(this.#expect)}</div>
					<div><span>result</span>: <span class="result"></span></div>
				</div>
				<div class="red-unit-test-result-wrap">
					<span class="pass-fail"></span>
				</div>
			</div>
		`;
		document.body.appendChild(this.#dom);
	}

	run() {
		const resultValue = this.#run();
		const isPass = this.#expect === resultValue;
		this.determinePassFailAndDispatchEvent(isPass);
		this.#dom.querySelector('.result').textContent = `${resultValue}`;
		this.#dom.querySelector('.pass-fail').textContent = `${resultValue}`;
		return resultValue;
	}

	determinePassFailAndDispatchEvent(isPass: boolean) {
		const event = isPass ? CONST_COUNT_EVENT.PASS_UNIT_NUM : CONST_COUNT_EVENT.FAIL_UNIT_NUM;
		dispatchEvent(new CustomEvent(event));
	}
}

export default UnitTest;
