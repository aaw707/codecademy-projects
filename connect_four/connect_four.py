class Connect_Four():

    # grid size: 6x7
    grid = [[0 for i in range(7)] for j in range(6)]

    # create a new game with 2 players
    def __init__(self, player_name_1, player_name_2):
        self.player_1 = player_name_1
        self.player_2 = player_name_2
        self.current_player = player_name_1

    # one player drops a disc into the suspended grid
    def drop_disc(self, column_id):
        
        try:
            column_id = int(column_id) - 1

            for i in range(6):
                if Connect_Four.grid[5-i][column_id] == 0:
                    if self.current_player == player_name_1:
                        Connect_Four.grid[5-i][column_id] = 1
                    else:
                        Connect_Four.grid[5-i][column_id] = -1

                    row_id = 5-i
                    column_id = column_id
                    return row_id, column_id

            print('This column is already full. Please try again')
            return None

        except:
            print('This is not a valid column. Please put in a number between 1 - 7.')
            return None

    # determine if there is a win
    def rule(self, row_id, column_id):
        

        # horizontally
        horizontal_line = Connect_Four.grid[row_id]

        # vertically
        vertical_line = [Connect_Four.grid[i][column_id] for i in range(6)]

        # diagonally 1
        diagonal_line_1 = []
        d1_row_id = row_id
        d1_column_id = column_id
        while (d1_row_id > 0) & (d1_column_id > 0):
            d1_row_id -= 1
            d1_column_id -= 1
        while (d1_row_id < 5) & (d1_column_id < 6):
            diagonal_line_1.append(Connect_Four.grid[d1_row_id][d1_column_id])
            d1_row_id += 1
            d1_column_id += 1

        # diagonally 2
        diagonal_line_2 = []
        d2_row_id = row_id
        d2_column_id = column_id
        while (d2_row_id < 5) & (d2_column_id > 0):
            d2_row_id += 1
            d2_column_id -= 1
        while (d2_row_id > 0) & (d2_column_id < 6):
            diagonal_line_2.append(Connect_Four.grid[d2_row_id][d2_column_id])
            d2_row_id -= 1
            d2_column_id += 1
        
        # 4 continuous discs in the same color wins the game
        for line in [horizontal_line, vertical_line, diagonal_line_1, diagonal_line_2]:
            for i in range(0, len(line) - 3):
                if abs(sum(line[i:i+4])) == 4:
                    return True

        return False

    # visually show the grid
    def show_grid(self):
        print('\n')

        # convert the digits to visuals
        for i in range(6):
            visual_row = "|"

            for j in range(7):
                if Connect_Four.grid[i][j] == 0:
                    visual_row += "   "
                elif Connect_Four.grid[i][j] == 1:
                    visual_row += " X "
                else:
                    visual_row += " O "
                
                visual_row += "|"

            print(visual_row)
            print("-"*(1+4*7))
        print("  1   2   3   4   5   6   7  ")
        print('\n')

# greetings
print("Hello, welcome to Connect Four.")
print("This is a game for two players. Please find a friend, or pretend to be two people.")

print("Are there two players standby? (y/n)")
answer = input()

if answer == 'n':
    print('\n')
    print("Maybe spend less time gaming and more time making friends...")
    exit()

elif answer == 'y':

    # explain the rules
    print('\n')
    print('The vertically suspended grid has 6 rows and 7 columns.')
    print('Player 1 will be using this disc: X')
    print('Player 2 will be using this disc: O')

    print('\n')
    print('Players take turns to drop discs into the grid. The pieces fall straight down, occupying the lowest available space within the column.')
    print('The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one\'s own discs.')
    
    print('\n')
    print('Any questions before we start the game? (y/n)')
    answer = input()

    if answer == 'y':
        print('\n')
        print('You can check out the wiki page for this game. That\'s where I pulled off the rules, anyway.')
        print('https://en.wikipedia.org/wiki/Connect_Four')
    if answer == 'n':
        print('\n')
        print('Great! Let\'s start playing! :)')

print('\n')
player_name_1 = input('Please enter the name for Player 1:')
print('Player 1:', player_name_1)
print('\n')

player_name_2 = player_name_1
while player_name_2 == player_name_1:
    player_name_2 = input('Please enter the name for Player 2 (must be different from Player 1):') # same name will disturb the drop_disc function
print('Player 2:', player_name_2)
print('\n')

input('Press Enter to start the game...')

print('GAME START!!!')
game = Connect_Four(player_name_1, player_name_2)
game.show_grid()
counter = 0

while counter < 42: # 42 discs fill the grid
        
    print(f"It's {game.current_player}'s turn. Please select a column to drop the disc (1-7):")

    # drop the disc
    column_id = input()
    try:
        row_id, column_id = game.drop_disc(column_id)
        counter += 1
        game.show_grid()
        if game.rule(row_id, column_id) == True:
            print(f'Four discs are in a line. {game.current_player} wins the game!!!')
            print('❀ ❀ ❀ ❀ ❀')
            break
            
        # switch the player
        if game.current_player == player_name_1:
            game.current_player = player_name_2
        else:
            game.current_player = player_name_1
    except TypeError:
        pass
        

print('Game ends. Thanks for playing!')
print('\n')
print("This script is written by Angel Wang on Oct 28, 2021. ")
print("She might come back in a few months and be astonished for how lame it is as her first CS project... but for now, it's fun :)")
exit()

