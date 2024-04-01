const createDomElement = (className: string = '', tagName: string = 'div'): any => {
	let element = document.createElement(tagName);
	element.setAttribute('class', className);
	return element;
}
export default createDomElement
