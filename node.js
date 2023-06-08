export default class Node {
	constructor(value, nextNode) {
		this.value = value || null;
		this.nextNode = nextNode || null;
	}
}
