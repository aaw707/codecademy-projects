# We'll be using our Node class
class Node:
  def __init__(self, value, next_node=None):
    self.value = value
    self.next_node = next_node
    
  def get_value(self):
    return self.value
  
  def get_next_node(self):
    return self.next_node
  
  def set_next_node(self, next_node):
    self.next_node = next_node

# Our LinkedList class
class LinkedList:
  def __init__(self, value=None):
    self.head_node = Node(value)
  
  def get_head_node(self):
    return self.head_node
  
# Add your insert_beginning and stringify_list methods below:
  def insert_beginning(self, new_value):
    new_node = Node(new_value)
    new_node.set_next_node(self.head_node)
    self.head_node = new_node

  def stringify_list(self):
    str_ = ""
    current_node = self.get_head_node()
    while current_node != None:
      str_ += str(current_node.get_value())
      str_ += "\n"
      current_node = current_node.get_next_node()
    return str_[:-1]

  def remove_node(self, value_to_remove):
    current_node = self.get_head_node()
    if self.head_node.get_value() == value_to_remove:
      self.head_node = self.head_node.get_next_node()
    else:
      while current_node.get_next_node() != None:        
        if current_node.get_next_node().get_value() == value_to_remove:
          current_node.set_next_node(current_node.next_node.get_next_node())
          #current_node = None
        
        current_node = current_node.get_next_node()
  
  def swap_nodes(self, val1, val2):

    # if val1 == val2, no need for swapping
    if val1 == val2:
      print('The two values are the same. No need for swapping.')
      return

    # iterate through the list looking for the node matching val1
    node1 = self.get_head_node()
    node1_prev = None
    while node1 != None:
      if node1.get_value() == val1:
        break
      else:
        node1_prev = node1
        node1 = node1.get_next_node()

    # iterate through the list again looking for the node matching val2
    node2 = self.get_head_node()
    node2_prev = None
    while node2 != None:
      if node2.get_value() == val2:
        break
      else:
        node2_prev = node2
        node2 = node2.get_next_node()
    
    # if at least one val is not found, the swapping can't be performed
    if (node1 == None) or (node2 == None):
      print('At least one value is not found in the linked list.')
      print("The swapping can't be performed.")
      return

    else:

      # node1 is the head of the list
      if node1_prev == None:
        # set the list's head to node2
        self.head_node = node2

      # node1 is not the head of the list
      else:
        # set node1_prev's next node to node2
        node1_prev.set_next_node(node2)

      # node2 is the head of the list
      if node2_prev == None:
        # set the list's head to node1
        self.head_node = node1

      # node2 is not the head of the list
      else:
        # set node2_prev's next node to node1
        node2_prev.set_next_node(node1)

      # set node1's next node to node2's next node
      tmp = node1.get_next_node()
      node1.set_next_node(node2.get_next_node())

      # set node2's next node to node1's next node
      node2.set_next_node(tmp)

  def nth_last_node(self, n):
    tailer_pointer = self.get_head_node()
    nth_last_pointer = None
    counter = 1

    while tailer_pointer != None:

      tailer_pointer = tailer_pointer.get_next_node()
      counter += 1

      if counter >= n + 1: 
        if nth_last_pointer == None:
          nth_last_pointer = self.get_head_node()
        else:
          nth_last_pointer = nth_last_pointer.get_next_node()
    
    return nth_last_pointer

  def find_middle(self):
    one_step_pointer = self.get_head_node()
    two_step_pointer = self.get_head_node()

    while two_step_pointer != None:
      two_step_pointer = two_step_pointer.get_next_node()

      if two_step_pointer != None:
        one_step_pointer = one_step_pointer.get_next_node()
        two_step_pointer = two_step_pointer.get_next_node()

    return one_step_pointer