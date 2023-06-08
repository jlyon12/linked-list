/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
import Node from './node.js';

export default class LinkedList {
	constructor(head) {
		this.head = head || null;
		this.size = 0;
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
		this.size += 1;
	}

	prepend(value) {
		const newNode = new Node(value);
		newNode.nextNode = this.head;
		this.head = newNode;
		this.size += 1;
	}
}
