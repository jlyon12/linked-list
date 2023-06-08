/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
import Node from './node.js';

export default class LinkedList {
	constructor(head) {
		this.head = head || null;
	}

	append(value) {
		let currentNode;
		let newNode = new Node(value);
		if (this.head === null) {
			this.head = newNode;
		} else {
			currentNode = this.head;
			while (currentNode.nextNode) {
				currentNode = currentNode.nextNode;
			}
			currentNode.nextNode = newNode;
		}
	}

	prepend(value) {
		const newNode = new Node(value);
		newNode.nextNode = this.head;
		this.head = newNode;
	}

	size() {
		let count = 0;
		let currentNode = this.head;
		if (currentNode) {
			count += 1;
			while (currentNode.nextNode) {
				currentNode = currentNode.nextNode;
				count += 1;
			}
		}
		return count;
	}
}
