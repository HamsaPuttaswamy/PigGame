# Do not edit the class below except for the buildHeap,
# siftDown, siftUp, peek, remove, and insert methods.
# Feel free to add new properties and methods to the class.
class MinHeap:
    def __init__(self, array):
        # Do not edit the line below.
        self.heap = self.buildHeap(array)

 

    def buildHeap(self, array):
        print(array)
        # Write your code here.
        pass

 

    def siftDown(self):
        # Write your code here.
        pass

 

    def siftUp(self):
        # Write your code here.
        pass

 

    def peek(self):
        # Write your code here.
        pass

 

    def remove(self):
        # Write your code here.
        pass

 

    def insert(self, value):
        # Write your code here.
        pass


import unittest


def isMinHeapPropertySatisfied(array):
    for currentIdx in range(1, len(array)):
        parentIdx = (currentIdx - 1) // 2
        if array[parentIdx] > array[currentIdx]:
            return False
    return True

 


class TestProgram(unittest.TestCase):
    def test_case_1(self):
        minHeap = MinHeap([48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41])
        minHeap.insert(76)
        self.assertTrue(isMinHeapPropertySatisfied(minHeap.heap))
        self.assertEqual(minHeap.peek(), -5)
        self.assertEqual(minHeap.remove(), -5)
        self.assertTrue(isMinHeapPropertySatisfied(minHeap.heap))
        self.assertEqual(minHeap.peek(), 2)
        self.assertEqual(minHeap.remove(), 2)
        self.assertTrue(isMinHeapPropertySatisfied(minHeap.heap))
        self.assertEqual(minHeap.peek(), 6)
        minHeap.insert(87)
        self.assertTrue(isMinHeapPropertySatisfied(minHeap.heap))
 