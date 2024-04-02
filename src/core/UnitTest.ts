import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import createDomElement from "./createDomElement";
import CONST_PAGE_COUNT_EVENT from "./page/CONST_PAGE_COUNT_EVENT";

class UnitTest {
	#dom;
	#testFunc;
	#expect;

	constructor(title, testFunc, expectValue) {
		this.#testFunc = testFunc;
		this.#expect = expectValue;
		this.#initializeDom(title);
		dispatchEvent(new CustomEvent(CONST_PAGE_COUNT_EVENT.ADD_UNIT_NUM));
	}

	get dom() {
		return this.#dom;
	}

	execute(runner) {
		this.#testFunc((resultValue) => {
			const isPass = this.#expect === resultValue;
			this.determinePassFailAndDispatchEvent(isPass);
			this.#dom.querySelector('.result').textContent = `${resultValue}`;
			this.#dom.querySelector('.pass-fail').textContent = `${isPass ? 'PASS' : 'FAIL'}`;
			this.#dom.querySelector('.pass-fail').className = `pass-fail ${isPass ? 'pass' : 'fail'}`;
			runner.run(resultValue)
			Prism.highlightAll()
		});
	}

	determinePassFailAndDispatchEvent(isPass: boolean) {
		console.log(isPass)
		const event = isPass ? CONST_PAGE_COUNT_EVENT.PASS_UNIT_NUM : CONST_PAGE_COUNT_EVENT.FAIL_UNIT_NUM;
		dispatchEvent(new CustomEvent(event));
	}

	#initializeDom(title: string) {
		this.#dom = createDomElement();
		this.#dom.innerHTML = ` 
			<div class="red-unit-test-wrap">
				<div class="red-unit-test-title">${title}</div>
				<pre>${formatCodeSnippet(`${this.#testFunc}`)}</pre>
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

function formatCodeSnippet(input: string): string {
	const options = {};
	const modified = removeLeadingWhitespace(input)
	const highlightedCode = modified
	console.log('highlightedCode2', modified)
	console.log('highlightedCode2', highlightedCode)
	return `<code class="language-javascript red-unit-test-code-wrap">${input}</code>`;
}

function removeLeadingWhitespace(text) {
	return text.replace(/\s+/g, ' ');
}

export default UnitTest;
