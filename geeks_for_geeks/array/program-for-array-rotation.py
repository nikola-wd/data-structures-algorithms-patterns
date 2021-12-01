# https://www.geeksforgeeks.org/array-rotation/
# Write a function rotate(ar[], d, n) that rotates arr[] of size n by d elements.

originalArr = [1, 2, 3, 4, 5, 6, 7]

# Rotation of the above array by 2 will make array
# [3,4,5,6,7,1,2]

# My solution


def leftRotateArrByD(arr, shiftBy, d):
    tempVal = arr[0]
    while shiftBy > 0:
        for index in range(d):
            rootShiftIndex = index + 1
            shiftIndex = rootShiftIndex
            if shiftIndex >= len(arr):
                shiftIndex = rootShiftIndex - 1 - len(arr)
            else:
                shiftIndex = rootShiftIndex

            tempVal = arr[index]
            arr[index] = arr[shiftIndex]
            arr[shiftIndex] = tempVal
        shiftBy -= 1
    return arr


print(leftRotateArrByD(originalArr, 5, 10))

# My optimized solution

""" 
def optimizedLeftRotateArrByD(arr, shiftBy, n):
    while shiftBy > 0:
        temp = arr[0]
        for i in range(n-1):
            arr[i] = arr[i + 1]
        arr[n-1] = temp
        shiftBy -= 1
    return arr


print(optimizedLeftRotateArrByD(originalArr, 5, 10)) """


# BETTER SOLUTION ------------------------------
# Function to left rotate arr[] of size n by d*/
""" def leftRotate(arr, d, n):
    for i in range(d):
        leftRotatebyOne(arr, n)

# Function to left Rotate arr[] of size n by 1*/


def leftRotatebyOne(arr, n):
    temp = arr[0]
    for i in range(n-1):
        arr[i] = arr[i + 1]
    arr[n-1] = temp


print(leftRotate(originalArr, 5, 10))
 """

# FASTEST SOLUTION --------------------------

""" 
def leftRotate(arr, d, n):
    d = d % n
    g_c_d = gcd(d, n)
    for i in range(g_c_d):

        # move i-th values of blocks
        temp = arr[i]
        j = i
        while 1:
            k = j + d
            if k >= n:
                k = k - n
            if k == i:
                break
            arr[j] = arr[k]
            j = k
        arr[j] = temp


# Function to get gcd of a and b
def gcd(a, b):
    if b == 0:
        return a
    else:
        return gcd(b, a % b)


leftRotate(originalArr, 5, len(originalArr)) """
