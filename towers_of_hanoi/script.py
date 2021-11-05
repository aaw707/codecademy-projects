from stack import Stack

print("\nLet's play Towers of Hanoi!!")
print("Towers of Hanoi is an ancient mathematical puzzle that starts off with three stacks and many disks.")
print("The objective of the game is to move the stack of disks from the leftmost stack to the rightmost stack.")
print("The game follows three rules:")
print("  1. Only one disk can be moved at a time.")
print("  2. Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod.")
print("  3. No disk may be placed on top of a smaller disk.")

#Create the Stacks
stacks = []
left_stack = Stack("Left")
middle_stack = Stack("Middle")
right_stack = Stack("Right")
stacks.append(left_stack)
stacks.append(middle_stack)
stacks.append(right_stack)

#Set up the Game
num_disks = 0
while num_disks < 3:
  num_disks = int(input('\nHow many disks do you want to play with?\n'))
  print("The game is only fun with at least 3 disks!")
for i in range(num_disks):
  disk_size = num_disks - i
  left_stack.push(disk_size)
print('The disks are set up.')
# the number of optimal moves is always 2^number_of_disks - 1
num_optimal_moves = 2**(num_disks) - 1
#print(f'\nThe fastest you can solve this game is in {num_optimal_moves} moves')

#Get User Input
def get_input():
  choices = [x.get_name()[0] for x in stacks]
  
  while True:
    for i in range(len(stacks)):
      name = stacks[i].get_name()
      letter = choices[i]
      print(f"Enter {letter} for {name}")
    user_input = input("").upper()
    if user_input in choices:
      for i in range(len(stacks)):
        if user_input == choices[i]:
          return stacks[i]
    else:
      print('Invalid input')

#Play the Game
num_user_moves = 0
while right_stack.get_size() != num_disks:
  print("\n\n\n...Current Stacks...")
  for i in range(len(stacks)):
    stacks[i].print_items()
  while True:
    print("\nWhich stack do you want to move from?\n")
    from_stack = get_input()
    print('\nWhich stack do you want to move to?\n')
    to_stack = get_input()
    
    if from_stack.is_empty():
      print("\n\nInvalid Move. Try again.")
      print("You can't move a disk from an empty stack.")
    elif (to_stack.is_empty()) or (from_stack.peek() < to_stack.peek()):
      disk = from_stack.pop()
      to_stack.push(disk)
      num_user_moves += 1
      break
    else:
      print("\n\nInvalid Move. Try again.")
      print("You can only put a smaller disk on a larger disk.")
print(f"\n\nYou completed the game in {num_user_moves} moves, and the optimal number of moves is {num_optimal_moves}.")
print("Thanks for playing! This script is written by Angel on Nov 1st, 2021 as a project on Codecademy.")
