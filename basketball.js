//  CTCI 6.2 you choose a game 
//  1. one shot to make it
//  2. 3 shots. 2 out of 3 wins
//  if p is probablility of making any shot, what values of p should you pick one over the other

//  Just printing out a bunch of results for the moment. could work on gettng closer, but there's really just a mathmatical solution.
//  It does go down and then back up again though, so not super straghtforward, need to try various things, can't always tell which way to go.
//  And some randomneess will mean near the crossover there will be some runs where it goes one way, some the other way, so again not 100% clear on which way to go
//  Would need to figure out whre close enough was, where the results flip back and forth some amount of time.

let shoot = function(p) {
    return (Math.random() < p);
}

let game1 = function(p) {
    return shoot(p);
}

let game2 = function(p) {
    let made = 0;
    for(let i = 0; i < 3; i++) {
        if (shoot(p)) { 
            made += 1; 
        }
        if (made >= 2) { return true; }
    }
    return false;
}

let runGames = function(p, repeat) {
    let game1Victories = 0;
    let game2Victories = 0;
    for (let i = 0; i < repeat; i++) {
        if (game1(p)) { game1Victories += 1; }
        if (game2(p)) { game2Victories += 1; }
    }
    // console.log(`Game 1 Wins: ${game1Victories}`);
    // console.log(`Game 2 Wins: ${game2Victories}`);
    return game1Victories/game2Victories
}


let findMiddleP = function() {
    let repeat = 1000000;
    let low = 0;
    let high = 1;
    for (let mid = 0; mid <= 100; mid++) {
        let winRatio = runGames(mid/100, repeat);
        console.log(`p: ${mid}. win ratio: ${winRatio}`);
    }
}

findMiddleP();