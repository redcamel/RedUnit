import './core/RedUnit.css'
import RedUnitIframe from "./core/page/RedUnitIframe";
import RedUnitTotalState from "./core/page/RedUnitTotalState";
import Runner from "./core/Runner";

const init = (testName: string, testList: { title: string, src: string }[]) => {
	console.log('testList', testList)
	const totalState = new RedUnitTotalState(testName, testList)
	testList.forEach(item => {
		new RedUnitIframe(item.title, item.src, totalState)
	});
}
const defineGroup = (title, initFunc) => {
	const runner = new Runner(title)
	initFunc(runner)
	runner.start()
}
export {
	init,
	defineGroup
}

