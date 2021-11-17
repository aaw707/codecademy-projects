'''
Given two strings: "ABAZDC" and "BACBAD", how can we determine the longest common subsequence?

In other words, what series of letters from left to right do they share? The letters don’t need 
to be directly next to each other. In this example, the longest sequence is "ABAD" for a length of 4.

Longest Common Subsequence may seem like an obscure problem, but it has applications in genomics. 
“A”, “C”, “G”, and “T” represent the four nucleotide bases of a DNA strand. The longest common 
subsequence of among these letters would provide valuable information about two people’s genetics.

A naive approach would be to generate every subsequence of each string. We then check the longest 
generated subsequence of each string to see if they match, checking smaller and smaller subsequences 
if they don’t. This approach has a big O runtime of O(2^N).

Let’s apply what we’ve learned about Dynamic Programming to produce a more efficient solution!
'''

# Similar to the knapsack problem
dna_1 = "ACCGTT"
dna_2 = "CCAGCA"

def longest_common_subsequence(string_1, string_2):
  print("Finding longest common subsequence of {0} and {1}".format(string_1, string_2))
  
  # build up the grid depending on the length of the strings
  grid = [[0 for column in range(len(string_1) + 1)] for row in range(len(string_2) + 1)]

  for row in range(1, len(string_2) + 1):
    print(f"Comparing: {string_2[row - 1]}")

    for col in range(1, len(string_1) + 1):
      print(f"Against: {string_1[col - 1]}")

      if string_1[col - 1] == string_2[row - 1]:
        grid[row][col] = grid[row - 1][col - 1] + 1
      else:
        grid[row][col] = max(grid[row - 1][col], grid[row][col - 1])
  
  for row_line in grid:
    print(row_line)

  print("longest common subsequence:",grid[-1][-1])

  common_subsequence = ""
  column = len(string_1) - 1 
  row = len(string_2) - 1
  while row >= 0 and column >= 0:
    if string_1[column] == string_2[row]:
      common_subsequence = string_1[column] + common_subsequence
      row -= 1
      column -= 1
    else:
      if grid[row - 1][col] < grid[row][column - 1]:
        column  -= 1
      elif grid[row - 1][col] > grid[row][column - 1]:
        row -= 1
      else:
        row -= 1
        column -= 1
  print(common_subsequence)

longest_common_subsequence(dna_1, dna_2)