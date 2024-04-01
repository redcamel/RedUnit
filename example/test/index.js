import * as RedUnit from '../../dist'

RedUnit.defineGroup(
	'테스트슈트',
	(testSuite)=>{
		let i = Math.ceil(Math.random() * 50)
		while (i--) {
			testSuite.test(`test title ${i}`, {
				run: function () {
					console.log('unitTest',i)
					return Math.random() < Math.random()
				},
				expect: true
			})
		}
	}
)

