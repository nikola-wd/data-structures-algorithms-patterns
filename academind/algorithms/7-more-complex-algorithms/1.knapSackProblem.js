// WIthout memoization -> this is a Brute Force approach
function knapSack(items, cap, itemIndex) {
  // base case
  if (cap === 0 || itemIndex < 0) {
    return { items: [], value: 0, weight: 0 };
  }

  // item is too heavy - NO case (couldn't add the item)
  if (cap < items[itemIndex].weight) {
    // knapSack without this item -> move to next
    return knapSack(items, cap, itemIndex - 1);
  }

  // we add the item - YES case (added the item)
  const sackWithItem = knapSack(
    items,
    cap - items[itemIndex].weight,
    itemIndex - 1
  );

  // we don't add the item - NO case (because other items are better choices)
  const sackWIthoutItem = knapSack(items, cap, itemIndex - 1);

  // Evaluate values to find out what the best combination is
  const valueWithItem = sackWithItem.value + items[itemIndex].value;
  const valueWithoutItem = sackWIthoutItem.value;

  if (valueWithItem > valueWithoutItem) {
    const updatedSack = {
      items: sackWithItem.items.concat(items[itemIndex]),
      value: sackWithItem.value + items[itemIndex].value,
      weight: sackWithItem.weight + items[itemIndex].weight,
    };

    return updatedSack;
  } else {
    return sackWIthoutItem;
  }
}

const items = [
  { name: 'a', value: 3, weight: 3 },
  { name: 'b', value: 6, weight: 8 },
  { name: 'c', value: 10, weight: 3 },
];

const maxCap = 8;

const sack = knapSack(items, maxCap, items.length - 1);
console.log(sack);
