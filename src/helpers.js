function choice(items) {
  let randomItem = Math.floor(Math.random() * items.length);

  return items[randomItem];
}

function remove(items, item) {
  let remainingItems = [];
  for (let i of items) {
    if (i !== item) {
      remainingItems.push(i);
    }
  }
  if (remainingItems.length === 0) return undefined;
  return remainingItems;
}

export { choice, remove };
