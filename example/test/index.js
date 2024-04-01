import RedUnit from '../../dist'

const redUnit = new RedUnit()
redUnit.testGroup(
	'테스트슈트',
	(runner) => {
		let i = 10
		while (i--) {
			runner.define(`test title ${i}`, function (run) {
					console.log('unitTest', i)
					run(Math.random() < Math.random())
				},
				true
			)
		}
	}
)
redUnit.testGroup(
	'테스트슈트2',
	(runner) => {
		let i = 10
		while (i--) {
			runner.define(`test title ${i}`, function (run) {
					console.log('unitTest', i)
					run(Math.random() < Math.random())
				},
				true
			)
		}
	}
)
