from linked_list import Node, LinkedList
from blossom_lib import flower_definitions

class HashMap():

  def __init__(self, size):
    self.array_size = size 
    self.array = [LinkedList() for x in range(size)]

  # get hash code
  def hash(self, key):
    key_bytes = key.encode()
    hash_code = sum(key_bytes)
    return hash_code

  # get index
  def compress(self, hash_code):
    return hash_code % self.array_size

  # assign new value to the array
  def assign(self, key, value):
    hash_code = self.hash(key)
    array_index = self.compress(hash_code)

    # collision prevention
    payload = Node([key, value])
    list_at_array = self.array[array_index]
    for item in list_at_array:
      # if key is existed in the linkedlist at this index
      if item[0] == key:
        item[1] = value
        return
    # the key is not existed at this index
    list_at_array.insert(payload)

  # retrieve value from array
  def retrieve(self, key):
    hash_code = self.hash(key)
    array_index = self.compress(hash_code)
    
    list_at_index = self.array[array_index]
    for item in list_at_index:
      # found the key
      if item[0] == key:
        return item[1]
    # don't have the key in the array
    return f'{key} is not in our library.'

blossom = HashMap(len(flower_definitions))
for element in flower_definitions:
  blossom.assign(element[0], element[1])

print(blossom.retrieve('daisy'))
print(blossom.retrieve('rose'))
print(blossom.retrieve('sunflower'))
print(blossom.retrieve('my_flower'))

# add a new flower
blossom.assign("my_flower", "my_definition")
print(blossom.retrieve('my_flower'))