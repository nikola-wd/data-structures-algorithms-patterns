# https://runestone.academy/runestone/books/published/pythonds/SortSearch/TheSelectionSort.html

# The selection sort improves on the bubble sort by making only one exchange for every
# pass through the list. In order to do this, a selection sort looks for the largest value
# as it makes a pass and, after completing the pass, places it in the proper location.
# As with a bubble sort, after the first pass, the largest item is in the correct place.
# After the second pass, the next largest is in place. This process continues and
# requires n−1 passes to sort n items,
# since the final item must be in place after the (n−1) st pass.

# You may see that the selection sort makes the same number of comparisons as
# the bubble sort and is therefore also O(n2). However, due to the reduction in
# the number of exchanges, the selection sort typically executes faster in
# benchmark studies. In fact, for our list, the bubble sort makes 20 exchanges,
# while the selection sort makes only 8.


def selectionSort(alist):
    for fillslot in range(len(alist)-1, 0, -1):
        positionOfMax = 0
        for location in range(1, fillslot+1):
            if alist[location] > alist[positionOfMax]:
                positionOfMax = location

        temp = alist[fillslot]
        alist[fillslot] = alist[positionOfMax]
        alist[positionOfMax] = temp


alist = [54, 26, 93, 17, 77, 31, 44, 55, 20]
print(alist)
selectionSort(alist)
print(alist)
