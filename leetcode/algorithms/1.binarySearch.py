# XXX: Template 1: https://leetcode.com/explore/learn/card/binary-search/125/template-i/938/
# Most basic and elementary form of Binary Search
# Search Condition can be determined without comparing to the element's neighbors (or use specific elements around it)
# No post-processing required because at each step, you are checking to see if the element has been found. If you reach the end, then you know the element is not found
def binarySearch(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: int
    """
    if len(nums) == 0:
        return -1

    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    # End Condition: left > right
    return -1


# XXX: Template 2:
# Template  # 2 is an advanced form of Binary Search. It is used to search for an element or condition which requires accessing the current index and its immediate right neighbor's index in the array.


# Key Attributes:

# An advanced way to implement Binary Search.
# Search Condition needs to access element's immediate right neighbor
# Use element's right neighbor to determine if condition is met and decide whether to go left or right
# Gurantees Search Space is at least 2 in size at each step
# Post-processing required. Loop/Recursion ends when you have 1 element left. Need to assess if the remaining element meets the condition.


# Distinguishing Syntax:

# Initial Condition: left = 0, right = length
# Termination: left == right
# Searching Left: right = mid
# Searching Right: left = mid+1
def binarySearch(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: int
    """
    if len(nums) == 0:
        return -1

    left, right = 0, len(nums)
    while left < right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid

    # Post-processing:
    # End Condition: left == right
    if left != len(nums) and nums[left] == target:
        return left
    return -1


# XXX: Template 3:
# Template  # 3 is another unique form of Binary Search. It is used to search for an element or condition which requires accessing the current index and its immediate left and right neighbor's index in the array.

# Key Attributes:

# An alternative way to implement Binary Search
# Search Condition needs to access element's immediate left and right neighbors
# Use element's neighbors to determine if condition is met and decide whether to go left or right
# Gurantees Search Space is at least 3 in size at each step
# Post-processing required. Loop/Recursion ends when you have 2 elements left. Need to assess if the remaining elements meet the condition.


# Distinguishing Syntax:

# Initial Condition: left = 0, right = length-1
# Termination: left + 1 == right
# Searching Left: right = mid
# Searching Right: left = mid
def binarySearch(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: int
    """
    if len(nums) == 0:
        return -1

    left, right = 0, len(nums) - 1
    while left + 1 < right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid
        else:
            right = mid

    # Post-processing:
    # End Condition: left + 1 == right
    if nums[left] == target:
        return left
    if nums[right] == target:
        return right
    return -1
