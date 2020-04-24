const shultzGames = [
    [
        {width: 3}, {width: 3}, {width: 3}, {width: 3}, {width: 3},
        {width: 4}, {width: 4}, {width: 4}, {width: 4}, {width: 4},
        {width: 4}, {width: 4}, {width: 4}, {width: 4}, {width: 4},
        {width: 5}, {width: 5}, {width: 5}, {width: 5}, {width: 5},
        {width: 5}, {width: 5}, {width: 5}, {width: 5}, {width: 5},
        {width: 5}, {width: 5}, {width: 5}, {width: 5}, {width: 5},
        {width: 5}, {width: 5}, {width: 5}, {width: 5}, {width: 5},
        {width: 5}, {width: 5}, {width: 5}, {width: 5}, {width: 5},
        {width: 6}, {width: 6}, {width: 6}, {width: 6}, {width: 6},
        {width: 6}, {width: 6}, {width: 6}, {width: 7}, {width: 7}
    ],
    [{"width":4,"sec":30},{"width":4,"sec":29},{"width":4,"sec":28},{"width":4,"sec":27},{"width":4,"sec":26},{"width":5,"sec":87},{"width":5,"sec":84},{"width":5,"sec":81},{"width":5,"sec":78},{"width":5,"sec":75},{"width":5,"sec":72},{"width":5,"sec":69},{"width":5,"sec":66},{"width":5,"sec":63},{"width":5,"sec":60},{"width":6,"sec":120},{"width":6,"sec":115},{"width":6,"sec":110},{"width":6,"sec":105},{"width":6,"sec":100},{"width":4,"sec":25},{"width":4,"sec":24},{"width":4,"sec":23},{"width":4,"sec":22},{"width":4,"sec":21},{"width":5,"sec":60},{"width":5,"sec":58},{"width":5,"sec":56},{"width":5,"sec":54},{"width":5,"sec":52},{"width":5,"sec":50},{"width":5,"sec":48},{"width":5,"sec":46},{"width":5,"sec":44},{"width":5,"sec":42},{"width":6,"sec":100},{"width":6,"sec":97},{"width":6,"sec":94},{"width":6,"sec":91},{"width":6,"sec":88},{"width":4,"sec":21},{"width":4,"sec":20},{"width":4,"sec":19},{"width":4,"sec":18},{"width":4,"sec":17},{"width":4,"sec":16},{"width":4,"sec":15},{"width":4,"sec":14},{"width":4,"sec":13},{"width":4,"sec":12}],
    [{width: 5}, {width: 5}, {width: 5}],
    [{width: 6}, {width: 6}, {width: 6}, {width: 6}, {width: 6}]
];
export const getAllLevelsByGame = (game) => {
    switch (game) {
        case 'shultz': return shultzGames.reduce((acc, arr)=>acc+arr.length, 0);
    }
};
export const getLevelsAmountByGameAndDiff = (game, diff) => {
    switch (game) {
        case 'shultz': return shultzGames[diff].length;
    }
};
export const getLevelsInfoByGameDiffAndLevel = (game, diff, level) => {
    switch (game) {
        case 'shultz': return shultzGames[diff][level];
    }
};