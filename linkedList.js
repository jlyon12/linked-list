/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
import Node from './node.js';

export default class LinkedList {
	constructor(head) {
		this._head = head || null;
		this._size = 0;
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
		this._size += 1;
	}

	prepend(value) {
		const newNode = new Node(value);
		newNode.nextNode = this._head;
		this._head = newNode;
		this._size += 1;
	}

	get size() {
		return this._size;
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

	at(index) {
		const _index = index;
		let currentNode = this._head;
		if (this._head === null) {
			return undefined;
		}
		for (let i = 0; i < _index; i += 1) {
			currentNode = currentNode.nextNode;
		}
		return currentNode;
	}

	pop() {
		let currentNode = this._head;

		for (let i = 2; i < this._size; i += 1) {
			currentNode = currentNode.nextNode;
		}
		currentNode.nextNode = null;
		this._size -= 1;
	}

	contains(value) {
		let currentNode = this._head;
		if (!currentNode) return false;

		while (currentNode.nextNode) {
			if (currentNode.value === value) return true;
			currentNode = currentNode.nextNode;
		}
		if (currentNode.value === value) return true;
		return false;
	}
}
