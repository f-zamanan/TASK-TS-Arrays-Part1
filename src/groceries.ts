// Step 1:
// Write a createGroceries function that returns an array with 6 groceries items (each item is a string)
function createGroceries(): string[] {
  // write your code here...
  let groceries: string[] = [
    "eggs",
    "milk",
    "flour",
    "butter",
    "vanilla extract",
    "cocoa powder",
  ];
  return groceries; // replace empty array with what you see is fit
}

// Step 2:
// Write a getSecondGroceryItem function that returns the second grocery item from `groceries` argument
function getSecondGroceryItem(groceries: string[]): string {
  // write your code here...

  return groceries[1]; // replace empty string with what you see is fit
}

// Step 3:
// Write a getGroceriesCount that returns the length of the `groceries` argument
function getGroceriesCount(groceries: string[]): number {
  // write your code here...
  let GroceriesCount: number = groceries.length;
  return GroceriesCount; // replace zero with what you see is fit
}

// Step 4:
// Write a getLastGroceryItem function that returns the last grocery item from `groceries` argument
function getLastGroceryItem(groceries: string[]): string {
  // write your code here...

  let lastGroceryItem: string = groceries[groceries.length - 1];

  return lastGroceryItem; // replace empty string with what you see is fit
}

// Step 5:
// Write a removeLastGroceryItem function that removes the last grocery item and return it
function removeLastGroceryItem(groceries: string[]): string | undefined {
  // the OR undefined type added because the return function was throwing an error that pop returns either string or undefined
  // write your code here...
  let removedLastGroceryItem = groceries.pop();
  return removedLastGroceryItem; // replace empty string with what you see is fit
}

// Step 6:
// Write a addNewGroceries function that adds two new and different grocery items to the end of the groceries argument
// and returns the modified array
function addNewGroceries(
  groceries: string[],
  itemOne: string,
  itemTwo: string
): string[] {
  // write your code here...

  groceries.push(itemOne);
  groceries.push(itemTwo);

  return groceries; // replace empty array with what you see is fit
}

// Step 7:
// Write a getFirstThreeGroceryItems function that returns a new array that contains the first three grocery items
function getFirstThreeGroceryItems(groceries: string[]): string[] {
  // write your code here...
  let firstThreeGroceryItems: string[] = [
    groceries[0],
    groceries[1],
    groceries[2],
  ];
  return firstThreeGroceryItems; // replace empty array with what you see is fit
}

export {
  createGroceries,
  getSecondGroceryItem,
  getGroceriesCount,
  getLastGroceryItem,
  removeLastGroceryItem,
  addNewGroceries,
  getFirstThreeGroceryItems,
};
