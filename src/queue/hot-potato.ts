import Queue from './queue';

function hotPotato(elementsList: Array<string>, num: number) {
  const queue = new Queue<string>();
  const elimitatedList = [];

  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i]);
  }

  console.log('Testando lista', queue.toString());

  while (queue.size() > 1) {
    let name;

    for (let i = 0; i < num; i++) {
      name = queue.dequeue();

      if (name !== undefined) {
        queue.enqueue(name);
      }
    }
    elimitatedList.push(queue.dequeue());
  }

  return {
    eliminated: elimitatedList,
    winner: queue.dequeue(),
  };
}

const names2 = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result2 = hotPotato(names2, 7);
result2.eliminated.forEach((name) => {
  console.log(`${name} was eliminated from the Hot Potato`);
});
console.log(`The winner is: ${result2.winner}`);
