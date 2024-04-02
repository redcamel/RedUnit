import RedUnit from '../../dist/'

const redUnit = new RedUnit('Test PageTitle')
redUnit.testGroup(
	'testGroup 1',
	(runner) => {
		let i = 10
		while (i--) {
			runner.defineTest(`test title ${i} sdfsdfsdfsdfsdfsdfsdf sdfsd sdf sdf`, function (run) {
					/**
					 * test
					 */
					// test
					run(true)
				},
				true
			)
		}
	}
)
redUnit.testGroup(
	'testGroup 2',
	(runner) => {
		let i = 10
		while (i--) {
			runner.defineTest(`test title ${i}`, function (run) {
					// run(Math.random() < Math.random())
					run(true)
				},
				true
			)
		}
	}
)
