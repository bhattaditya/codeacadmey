/*
 */
const team = {

  _players : [
    {
      firstName : 'Zach',
      lastName : 'Dempesy',
      age : 23
    },
    {
      firstName : 'Alex',
      lastName : 'Standall',
      age : 24
    },
    {
      firstName : 'Clay',
      lastName : 'Jenson',
      age : 22
    }
  ],
  
  _games : [
    {
      oppenent : 'Montey',
      teamPoints : 50,
      opponenPoints : 45
    }
  ],
  
  get players(){
    return this._players;
  },
  
  get games(){
    return this._games;
  },
  
  addPlayer(firstName, lastName, age){
    const newPlayer = {
      firstName : firstName,
      lastName : lastName,
      age : age
    };
    this._players.push(newPlayer);
  },
  
  addGame(opponentName, myTeamPoints, opponentsPoints){
    const newGame = {
      opponentName : opponentName,
      myTeamPoints : myTeamPoints,
      opponentsPoints : opponentsPoints
    };
    this._games.push(newGame);
  }
};

team.addPlayer('Steph','Curry',28);
team.addPlayer('Lisa','Leslie',44);
team.addPlayer('Buga','Bunny',76);

console.log(team.players);

team.addGame('Wolves',500,100);
team.addGame('Monster',400,340);
team.addGame('root',300,80);

console.log(team.games); 
