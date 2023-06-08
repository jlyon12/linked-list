/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
import Node from './node.js';

export default class LinkedList {
	constructor(head) {
		this._head = head || null;
	}

	append(value) {
		let currentNode;
		let newNode = new Node(value);
		if (this._head === null) {
			this._head = newNode;
		} else {
			currentNode = this._head;
			while (currentNode.nextNode) {
				currentNode = currentNode.nextNode;
			}
			currentNode.nextNode = newNode;
		}
	}

	prepend(value) {
		const newNode = new Node(value);
		newNode.nextNode = this._head;
		this._head = newNode;
	}

	size() {
		let count = 0;
		let currentNode = this._head;
		if (currentNode) {
			count += 1;
			while (currentNode.nextNode) {
				currentNode = currentNode.nextNode;
				count += 1;
			}
		}
		return count;
	}

	get head() {
		return this._head;
	}

	get tail() {
		let currentNode = this._head;
		if (currentNode !== null) {
			while (currentNode.nextNode) {
				currentNode = currentNode.nextNode;
			}
		}
		return currentNode;
	}
}
