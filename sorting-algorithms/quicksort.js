function sort(list) {
  const copiedList = [...list];

  // Daca arrayul are 1 sau mai putine elemente, returneazal in starea initiala.
  if (copiedList.length <= 1) {
    return copiedList;
  }
  // Se initializeaza cele 3 arrayuri, small, big si middle numbers(cu pivotul in middle), plus
  // elementul pivot extras primul din array
  const smallElementsList = [];
  const largeElementsList = [];
  const pivotElement = copiedList.shift();
  const middleElementsList = [pivotElement];
  // in timp ce arrayul contine ceva extrage elementul curent, adica primul din lista, si verifica
  // daca elementul curent ii egal cu pivotul sa se duca in middle elements si daca ii mai mic in small elemenets, daca nu in large.
  while (copiedList.length) {
    const currentElement = copiedList.shift();
    if (currentElement === pivotElement) {
      middleElementsList.push(currentElement);
    } else if (currentElement < pivotElement) {
      smallElementsList.push(currentElement);
    } else {
      largeElementsList.push(currentElement);
    }
  }
  // sorteaza lista small si lista mare dupa care returnezi lista mica impreuna cu middle si large
  const sortedSmallElementsList = sort(smallElementsList);
  const sortedLargeElementsList = sort(largeElementsList);
  return sortedSmallElementsList.concat(
    middleElementsList,
    sortedLargeElementsList
  );
}

const output = sort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
console.log(output);
