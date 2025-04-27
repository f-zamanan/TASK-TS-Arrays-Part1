// 🌶️🌶️🌶️ **Challenge**

// Step 1:
// Write a deleteThirdItem function that deletes the third item from the groceries argument
// and returns the modified groceries list
function deleteThirdItem(groceries: string[]): string[] {
  // write your code here...
  // delete groceries[2]; this will produce an undefined value baaddd practice
  groceries.splice(2, 1); // at index 2 delete one element, it will update the array length accordingly, look into mdn docs for splice

  return groceries;
}

// Step 2:
// Write a insertItemAtBeginning function that inserts a new grocery item at the beginning of the groceries argument
// and returns the modified groceries array
function insertItemAtBeginning(groceries: string[], item: string): string[] {
  // write your code here...
  groceries.unshift(item);
  return groceries;
}

// Step 3:
// Write a replaceFirstTwoItems function that replace the first two elements with 'ketchup' and 'chili'
// and return the modified groceries array
function replaceFirstTwoItems(groceries: string[]): string[] {
  // write your code here...
  // this will replace not append new items
  groceries[0] = "ketchup";
  groceries[1] = "chili";
  return groceries;
}

export { deleteThirdItem, insertItemAtBeginning, replaceFirstTwoItems };
