import LinkedList from './linkedList.js';

const list = new LinkedList();
list.append('Node 1');
list.append('Node 2');
list.append('Node 3');
list.prepend('Node Z');
list.append('Node 4');
list.prepend('Node Y');
list.append('Node 5');
console.log(list.size());
