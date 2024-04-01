import CONST_COUNT_EVENT from "./CONST_COUNT_EVENT";
import createDomElement from "./createDomElement";

class UnitTest {
	#dom;
	#test;
	#expect;

	constructor(title, testDefine) {
		this.#test = testDefine.test;
		this.#expect = testDefine.expect;
		this.#initializeDom(title);
		dispatchEvent(new CustomEvent('ADD_UNIT_NUM'));
	}

	get dom() {
		return this.#dom;
	}

	get expect() {
		return this.#expect;
	}

	execute(runner) {
		this.#test((resultValue) => {
			const isPass = this.#expect === resultValue;
			this.determinePassFailAndDispatchEvent(isPass);
			this.#dom.querySelector('.result').textContent = `${resultValue}`;
			this.#dom.querySelector('.pass-fail').textContent = `${resultValue}`;
			runner.run(resultValue)
		});
	}

	determinePassFailAndDispatchEvent(isPass: boolean) {
		console.log(isPass)
		const event = isPass ? CONST_COUNT_EVENT.PASS_UNIT_NUM : CONST_COUNT_EVENT.FAIL_UNIT_NUM;
		dispatchEvent(new CustomEvent(event));
	}

	#initializeDom(title) {
		this.#dom = createDomElement();
		this.#dom.innerHTML = `
			<div class="red-unit-test-wrap">
				<div class="red-unit-test-title">${title}</div>
				<div>${this.#test}</div>
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
}

export default UnitTest;
