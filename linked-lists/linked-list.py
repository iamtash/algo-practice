class Node:
    def __init__(self, value, next_ptr=None):
        self.value = value
        self.next = next_ptr
    
    def __repr__(self):
        return str(self.value) + ' -> ' + str(self.next)