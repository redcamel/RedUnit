import './core/RedUnit.css'
import RedUnitIframe from "./core/page/RedUnitIframe";
import RedUnitTotalState from "./core/page/RedUnitTotalState";
import TestSuite from "./core/TestSuite";

const init = (testName: string, testList: { title: string, src: string }[]) => {
	console.log('testList', testList)
	const totalState = new RedUnitTotalState(testName, testList)
	testList.forEach(item => {
		new RedUnitIframe(item.title, item.src, totalState)
	});
}
const defineGroup = (title, initFunc) => {
	const testSuite = new TestSuite(title)
	initFunc(testSuite)
	testSuite.run()
}
export {
	init,
	defineGroup
}

