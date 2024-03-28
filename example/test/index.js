import * as RedUnit from '../../dist'

let i = Math.ceil(Math.random()*50)
while(i--){
	RedUnit.test(`test title ${i}`,function(){console.log('unitTest')})
}
