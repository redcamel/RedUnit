import * as RedUnit from '../../dist'

RedUnit.defineGroup(
	'테스트슈트',
	(runner)=>{
		let i = Math.ceil(Math.random() * 50)
		while (i--) {
			runner.define(`test title ${i}`, {
				test: function (run) {
					console.log('unitTest',i)
					run(Math.random() < Math.random())
				},
				expect: true
			})
		}
	}
)

