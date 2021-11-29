# https: // runestone.academy/runestone/books/published/pythonds/BasicDS/ConvertingDecimalNumberstoBinaryNumbers.html

class Stack:
    def __init__(self):
        self.items = []

    def isEmpty(self):
        return self.items == []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop()

    def peek(self):
        return self.items[len(self.items)-1]

    def size(self):
        return len(self.items)


def divideByTwo(decNumber):
    remstack = Stack()

    while decNumber > 0:
        rem = decNumber % 2
        remstack.push(rem)
        decNumber //= 2

    binString = ""
    while not remstack.isEmpty():
        binString += str(remstack.pop())

    return binString


print(divideByTwo(10))

print('--------------------------------')

# convert to any base 2(binary, 8 octal, 10 decimal, 16 hexadecimal)


def baseConverter(decNumber, base):
    digits = "0123456789ABCDEF"

    remstack = Stack()

    while decNumber > 0:
        rem = decNumber % base
        remstack.push(rem)
        decNumber //= base

    newString = ""
    while not remstack.isEmpty():
        newString += digits[remstack.pop()]

    return newString


print("binary: ", baseConverter(25, 2))
print("hexDec: ", baseConverter(25, 16))
print("octal: ", baseConverter(25, 8))
print("decimal: ", baseConverter(25, 10))
