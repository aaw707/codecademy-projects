// the griffindor quidditch team!
let team = {

    // players of the team
    _players: [
        {
            firstName: 'Oliver',
            lastName: 'Wood',
            age: 15
        },
        {
            firstName: 'Katie',
            lastName: 'Bell',
            age: 12
        },
        {
            firstName: 'Harry',
            lastName: 'Potter',
            age: 11
        }
    ],

    // games the team has played
    _games: [
        {
            opponent: 'Slytherin',
            teamPoints: 210,
            opponentPoints: 50
        },
        {
            opponent: 'Hufflepuff',
            teamPoints: 20,
            opponentPoints: 170
        },
        {
            opponent: 'Ravenclaw',
            teamPoints: 190,
            opponentPoints: 50
        }
    ],

    // show the players
    get players () {
        if (this._players) {
            return this._players
        }
    },

    // show the games
    get games () {
        if (this._games) {
            return this._games
        }
    },

    // add a player to the team
    addPlayer (firstName, lastName, age) {
        const player = {
            firstName,
            lastName,
            age 
        }
        this.players.push(player)
    },

    // add a game the team has played
    addGame (opponent, teamPoints, opponentPoints) {
        const game = {
            opponent, 
            teamPoints,
            opponentPoints
        }
        this.games.push(game)
    }
}

// add 3 more players to the team
team.addPlayer('George', 'Weasley', 13)
team.addPlayer('Fred', 'Weasley', 13)
team.addPlayer('Angelina', 'Jonson', 13)
// show all the players
console.log(team.players)

// add 3 more games to the team
team.addGame('Slythern (again)', 100, 100)
team.addGame('Hufflepuff (again)', 200, 200)
team.addGame('Ravenclaw (again)', 300, 300)
// show all the games the team has played
console.log(team.games)
