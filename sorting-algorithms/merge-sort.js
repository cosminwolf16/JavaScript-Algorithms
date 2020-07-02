function sort(arr) {
  console.log('FUNCTION START');
  console.log(arr);
  // se verifica daca marimea listei e mai mica decat 2, daca da, se returneaza lista initiala.
  if (arr.length < 2) {
    return arr;
  }
  // se verifica daca lungimea listei este egala cu 2, si daca da, se returneaza lista sortata.
  if (arr.length === 2) {
    console.log('EXACTLY 2 ITEMS');
    console.log(arr[0] > arr[1] ? [arr[1], arr[0]] : arr);
    return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
  }
  // se afla middle indexul listei si se creeaza lista 2 liste, left si right. Dupa care se sorteaza
  const middle = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, middle);
  const rightArray = arr.slice(middle);

  const leftSortedArray = sort(leftArray);
  const rightSortedArray = sort(rightArray);

  console.log('AFTER RECURSIVE STEP');
  console.log(leftSortedArray);
  console.log(rightSortedArray);
  // Se initializeaza arrayul final impreuna cu indexul 0 de la lista left si lista right.
  const mergedArr = [];
  let leftArrIndex = 0;
  let rightArrIndex = 0;
  // atata timp cat indexul stang e mai mic decat lungimea listei sortate left sau
  // indexul drept e mai mic decat lungimea listei sortate right
  // daca indexul listei left e mai mare sau egal cu lungimea listei sortate left sau
  // daca indexul curent din lista sortata left e mai mare decat indexul curent din lista sortata right
  // atunci se adauga in arrayul final indexul curent din lista sortata right
  // daca nu se adauga in arryul final indexul curent din lista left
  while (
    leftArrIndex < leftSortedArray.length ||
    rightArrIndex < rightSortedArray.length
  ) {
    if (
      leftArrIndex >= leftSortedArray.length ||
      leftSortedArray[leftArrIndex] > rightSortedArray[rightArrIndex]
    ) {
      mergedArr.push(rightSortedArray[rightArrIndex]);
      rightArrIndex++;
    } else {
      mergedArr.push(leftSortedArray[leftArrIndex]);
      leftArrIndex++;
    }
  }

  console.log('AFTER MERGE');
  console.log(mergedArr);
  // se returneaza arrayul final
  return mergedArr;
}

// Recursive Step Time Complexity: O(n^logb(a)) => O(n^log2(2)) => O(n^1) => O(n)
// Time Complexity outside of the Recursion: O(n)
// Algorithm Time Complexity: O(n^logb(a) * log n) => O(n * log n)

// const sortedArray = sort([-10, 33, 5, 10, 9, 3, -19, -99, 100]);
const sortedArray = sort([-10, 33, 100, 5]);
console.log(sortedArray);
