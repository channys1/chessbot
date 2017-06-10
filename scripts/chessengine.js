//creating piece objects

var whitePawn = {
  type: 'pawn',
  color: 'white'
};

var whiteKnight = {
  type: 'knight',
  color: 'white'
};

var whiteBishop = {
  type: 'bishop',
  color: 'white'
};

var whiteRook = {
  type: 'rook',
  color: 'white'
};

var whiteQueen = {
  type: 'queen',
  color: 'white'
};

var whiteKing = {
  type: 'king',
  color: 'white'
};

var blackPawn = {
  type: 'pawn',
  color: 'black'
};

var blackKnight = {
  type: 'knight',
  color: 'black'
};

var blackBishop = {
  type: 'bishop',
  color: 'black'
};

var blackRook = {
  type: 'rook',
  color: 'black'
};

var blackQueen = {
  type: 'queen',
  color: 'black'
};

var blackKing = {
  type: 'king',
  color: 'black'
};

//building an array for the chess board

var board = [
  ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
  ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
  ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
  ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
  ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
  ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
  ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
  ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"]
];

//setting the board

/* //output debug
for(var i = 0; i < board.length; i++){
  for(var x = 0; x < board.length; x++){
    console.log(board[i][x]);
  };
};
*/

function boardSetup(player1, player2){
  board[0][0] = whiteRook;
  board[0][1] = whiteKnight;
  board[0][2] = whiteBishop;
  board[0][3] = whiteQueen;
  board[0][4] = whiteKing;
  board[0][5] = whiteBishop;
  board[0][6] = whiteKnight;
  board[0][7] = whiteRook;
  for (var i = 0; i < 8; i++) {
    board[1][i] = whitePawn;
  }

  board[7][0] = blackRook;
  board[7][1] = blackKnight;
  board[7][2] = blackBishop;
  board[7][3] = blackQueen;
  board[7][4] = blackKing;
  board[7][5] = blackBishop;
  board[7][6] = blackKnight;
  board[7][7] = blackRook;
  for (var i = 0; i < 8; i++) {
    board[6][i] = blackPawn;
  }

};

boardSetup();

/* //output debug
for(var i = 0; i < board.length; i++){
  for(var x = 0; x < board.length; x++){
    console.log(board[i][x]);
  };
};
*/
