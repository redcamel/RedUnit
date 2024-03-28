
import './RedUnit.css'
import RedUnitIframe from "./page/RedUnitIframe";
import RedUnitTotalState from "./page/RedUnitTotalState";
import UnitTest from "./UnitTest";
const init = (testName:string,testList: { title: string, src: string }[]) => {
	console.log('testList', testList)
	const totalState = new RedUnitTotalState(testName,testList)
	testList.forEach(item => {
		new RedUnitIframe(item.title,item.src,totalState)
	});
}
const test = (title, runner)=>{
	new UnitTest(title,runner)
}
export {
	init,
	test
}

