var WALL = "WALL";
var FLOOR = "FLOOR";
var TARGET = "TARGET";
var GAMER = "GAMER";
var BOX = "BOX";
var gGamerPos;
var gBoard;

//$(document).ready(function () {
"use strict";

function startGameEasy() {
    gBoard = buildBoardEasy();
    var spnStepsCount = document.getElementById('spnStepsCount');
    spnStepsCount.innerHTML = 0;
    printBoard();
}

function startGameHard() {
    gBoard = buildBoardHard();
    var spnStepsCount = document.getElementById('spnStepsCount');
    spnStepsCount.innerHTML = 0;
    printBoard();
}

function buildBoardEasy() {
    // Create the matrix
    var board = new Array(10); // Y
    for (var i = 0; i < board.length; i++) {
        board[i] = new Array(12); // X
    }
    // Put FLOOR everywhere and WALL edges
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            var cell = { type: FLOOR, gameElement: null };
            // if at edge
            if (i == 0 || i == board.length - 1 || j == 0 || j == board[0].length - 1) {
                cell.type = WALL;
            }
            board[i][j] = cell;
        }
    }
    // Put some targets
    board[3][7].type = TARGET;
    board[5][7].type = TARGET;

    // Place the gamer
    gGamerPos = { i: 2, j: 9 };
    board[gGamerPos.i][gGamerPos.j].gameElement = GAMER;

    // Place the boxes
    board[3][8].gameElement = BOX;
    board[7][4].gameElement = BOX;
    return board;
}

function buildBoardHard() {
    // Create the matrix
    var board = new Array(16); // Y
    for (var i = 0; i < board.length; i++) {
        board[i] = new Array(19); // X
    }
    // Put FLOOR everywhere
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            var cell = { type: FLOOR, gameElement: null };
            board[i][j] = cell;
        }
    }
    // Adding Walls     //board[Y][X]
    board[3][4].type = WALL;
    board[3][5].type = WALL;
    board[3][6].type = WALL;
    board[3][7].type = WALL;
    board[3][8].type = WALL;
    board[4][4].type = WALL;
    board[4][8].type = WALL;
    board[5][4].type = WALL;
    board[5][8].type = WALL;
    board[6][2].type = WALL;
    board[6][3].type = WALL;
    board[6][4].type = WALL;
    board[6][8].type = WALL;
    board[6][9].type = WALL;
    board[7][2].type = WALL;
    board[7][9].type = WALL;
    board[8][0].type = WALL;
    board[8][1].type = WALL;
    board[8][2].type = WALL;
    board[8][4].type = WALL;
    board[8][6].type = WALL;
    board[8][7].type = WALL;
    board[8][9].type = WALL;
    board[8][13].type = WALL;
    board[8][14].type = WALL;
    board[8][15].type = WALL;
    board[8][16].type = WALL;
    board[8][17].type = WALL;
    board[8][18].type = WALL;
    board[9][0].type = WALL;
    board[9][4].type = WALL;
    board[9][6].type = WALL;
    board[9][7].type = WALL;
    board[9][9].type = WALL;
    board[9][10].type = WALL;
    board[9][11].type = WALL;
    board[9][12].type = WALL;
    board[9][13].type = WALL;
    board[9][18].type = WALL;
    board[10][0].type = WALL;
    board[10][18].type = WALL;
    board[11][0].type = WALL;
    board[11][1].type = WALL;
    board[11][2].type = WALL;
    board[11][3].type = WALL;
    board[11][4].type = WALL;
    board[11][6].type = WALL;
    board[11][7].type = WALL;
    board[11][8].type = WALL;
    board[11][10].type = WALL;
    board[11][12].type = WALL;
    board[11][13].type = WALL;
    board[11][18].type = WALL;
    board[12][4].type = WALL;
    board[12][10].type = WALL;
    board[12][11].type = WALL;
    board[12][12].type = WALL;
    board[12][13].type = WALL;
    board[12][14].type = WALL;
    board[12][15].type = WALL;
    board[12][16].type = WALL;
    board[12][17].type = WALL;
    board[12][18].type = WALL;
    board[13][4].type = WALL;
    board[13][5].type = WALL;
    board[13][6].type = WALL;
    board[13][7].type = WALL;
    board[13][8].type = WALL;
    board[13][9].type = WALL;
    board[13][10].type = WALL;

    // Put some targets
    board[9][16].type = TARGET;
    board[9][17].type = TARGET;
    board[10][16].type = TARGET;
    board[10][17].type = TARGET;
    board[11][16].type = TARGET;
    board[11][17].type = TARGET;

    // Place the gamer
    gGamerPos = { i: 11, j: 11 };
    board[gGamerPos.i][gGamerPos.j].gameElement = GAMER;

    // Place the boxes
    board[5][5].gameElement = BOX;
    board[6][7].gameElement = BOX;
    board[7][5].gameElement = BOX;
    board[7][7].gameElement = BOX;
    board[10][2].gameElement = BOX;
    board[10][5].gameElement = BOX;
    return board;
}

function printBoard() {
    var tblBoard = document.getElementById('tblBoard');
    var strHTML = '';
    for (var i = 0; i < gBoard.length; i++) {
        strHTML += "<tr>";
        for (var j = 0; j < gBoard[0].length; j++) {
            var currCell = gBoard[i][j];
            var cellClass;
            if (currCell.type == FLOOR) {
                cellClass = "floor";
            } else if (currCell.type == WALL) {
                cellClass = "wall";
            } else if (currCell.type == TARGET) {
                cellClass = "target";
            }
            strHTML += "<td class='cell " + cellClass + "' onclick='handleClick(" + i + "," + j + ")' >";
            if (currCell.gameElement == GAMER) {
                strHTML += "<img src='img/gamer.png'>";
            } else if (currCell.gameElement == BOX) {
                strHTML += "<img src='img/box.png'>";
            }
            strHTML += "</td>";
        }
        strHTML += "</tr>";
    }
    tblBoard.innerHTML = strHTML;
}

function handleClick(i, j) {
    var iDiff = i - gGamerPos.i;
    var jDiff = j - gGamerPos.j;
    var iAbsDiff = Math.abs(i - gGamerPos.i);
    var jAbsDiff = Math.abs(j - gGamerPos.j);

    // If the clicked Cell is one of the four allowed
    if ((iAbsDiff == 1 && jAbsDiff == 0) || (iAbsDiff == 0 && jAbsDiff == 1)) {
        if (gBoard[i][j].type != WALL) {
            var canMove = true;
            if (gBoard[i][j].gameElement == BOX) {

                // In the next pos, if there is no WALL, and also no other game element
                if (gBoard[i + iDiff][j + jDiff].type != WALL && gBoard[i + iDiff][j + jDiff].gameElement == null) {

                    // Move the Box
                    gBoard[i][j].gameElement = null;
                    gBoard[i + iDiff][j + jDiff].gameElement = BOX;
                } else {

                    // Can't move - there's a WALL behind the BOX!
                    canMove = false;
                }
            }
            if (canMove) {

                // Moving
                gBoard[gGamerPos.i][gGamerPos.j].gameElement = null;
                gGamerPos.i = i;
                gGamerPos.j = j;
                gBoard[gGamerPos.i][gGamerPos.j].gameElement = GAMER;

                // Update steps count
                var spnStepsCount = document.getElementById('spnStepsCount');
                spnStepsCount.innerHTML++;

                printBoard();
                checkVictory();
            }
        }
    }
}

function checkVictory() {
    var isVictory = true;
    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 0; j < gBoard[0].length; j++) {
            var currCell = gBoard[i][j];
            if (currCell.type == TARGET && currCell.gameElement != BOX) {
                isVictory = false;
            }
        }
    }
    if (isVictory) {
        alert("Victorious!");
    }
}

function handleKeyDown(event) {
    switch (event.keyCode) {
        case 37:
            event.preventDefault();
            break;
        case 38:
            event.preventDefault();
            break;
        case 39:
            event.preventDefault();
            break;
        case 40:
            event.preventDefault();
            break;
    }
}

function handleKeyUp(event) {
    var i = gGamerPos.i;
    var j = gGamerPos.j;
    switch (event.keyCode) {
        case 37:
            event.preventDefault();
            handleClick(i, j - 1);
            break;
        case 38:
            event.preventDefault();
            handleClick(i - 1, j);
            break;
        case 39:
            event.preventDefault();
            handleClick(i, j + 1);
            break;
        case 40:
            event.preventDefault();
            handleClick(i + 1, j);
            break;
    }
}
//});
