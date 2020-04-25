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
    [{"width":4,"sec":30},{"width":4,"sec":29},{"width":4,"sec":28},{"width":4,"sec":27},{"width":4,"sec":26},{"width":5,"sec":87},{"width":5,"sec":84},{"width":5,"sec":81},{"width":5,"sec":78},{"width":5,"sec":75},{"width":5,"sec":72},{"width":5,"sec":69},{"width":5,"sec":66},{"width":5,"sec":63},{"width":5,"sec":60},{"width":6,"sec":120},{"width":6,"sec":115},{"width":6,"sec":110},{"width":6,"sec":105},{"width":6,"sec":100},{"width":4,"sec":25},{"width":4,"sec":24},{"width":4,"sec":23},{"width":4,"sec":22},{"width":4,"sec":21},{"width":5,"sec":60},{"width":5,"sec":58},{"width":5,"sec":56},{"width":5,"sec":54},{"width":5,"sec":52},{"width":5,"sec":50},{"width":5,"sec":48},{"width":5,"sec":46},{"width":5,"sec":44},{"width":5,"sec":42},{"width":6,"sec":100},{"width":6,"sec":97},{"width":6,"sec":94},{"width":6,"sec":91},{"width":6,"sec":88},{"width":4,"sec":21},{"width":4,"sec":20},{"width":4,"sec":19},{"width":4,"sec":18},{"width":4,"sec":16},{"width":4,"sec":14},{"width":4,"sec":12},{"width":4,"sec":10},{"width":4,"sec":8},{"width":4,"sec":6}],
    [{"width":5,"sec":42},{"width":5,"sec":41},{"width":5,"sec":40},{"width":5,"sec":39},{"width":5,"sec":38},{"width":5,"sec":37},{"width":5,"sec":36},{"width":5,"sec":35},{"width":5,"sec":34},{"width":5,"sec":33},{"width":5,"sec":32},{"width":5,"sec":31},{"width":5,"sec":30},{"width":5,"sec":29},{"width":5,"sec":28},{"width":6,"sec":88},{"width":6,"sec":86},{"width":6,"sec":84},{"width":6,"sec":82},{"width":6,"sec":80},{"width":6,"sec":78},{"width":6,"sec":76},{"width":6,"sec":74},{"width":6,"sec":72},{"width":6,"sec":70},{"width":6,"sec":68},{"width":6,"sec":66},{"width":6,"sec":64},{"width":6,"sec":62},{"width":6,"sec":60},{"width":7,"sec":140},{"width":7,"sec":135},{"width":7,"sec":130},{"width":7,"sec":125},{"width":7,"sec":120},{"width":5,"sec":28},{"width":5,"sec":27},{"width":5,"sec":26},{"width":5,"sec":25},{"width":5,"sec":24},{"width":6,"sec":60},{"width":6,"sec":58},{"width":6,"sec":56},{"width":6,"sec":54},{"width":6,"sec":52},{"width":5,"sec":24},{"width":5,"sec":23},{"width":5,"sec":22},{"width":5,"sec":21},{"width":5,"sec":20}],
    [{"width":5,"sec":20},{"width":5,"sec":19},{"width":5,"sec":18},{"width":5,"sec":17},{"width":5,"sec":16},{"width":6,"sec":52},{"width":6,"sec":51},{"width":6,"sec":50},{"width":6,"sec":49},{"width":6,"sec":48},{"width":6,"sec":47},{"width":6,"sec":46},{"width":6,"sec":45},{"width":6,"sec":44},{"width":6,"sec":43},{"width":7,"sec":120},{"width":7,"sec":115},{"width":7,"sec":110},{"width":7,"sec":105},{"width":7,"sec":100},{"width":8,"sec":180},{"width":8,"sec":175},{"width":8,"sec":170},{"width":8,"sec":165},{"width":8,"sec":160},{"width":5,"sec":16},{"width":5,"sec":15},{"width":5,"sec":14},{"width":5,"sec":13},{"width":5,"sec":12},{"width":6,"sec":43},{"width":6,"sec":41},{"width":6,"sec":39},{"width":6,"sec":37},{"width":6,"sec":35},{"width":7,"sec":100},{"width":7,"sec":95},{"width":7,"sec":90},{"width":7,"sec":85},{"width":7,"sec":80},{"width":5,"sec":12},{"width":5,"sec":12},{"width":5,"sec":11},{"width":5,"sec":11},{"width":5,"sec":10},{"width":6,"sec":32},{"width":6,"sec":30},{"width":7,"sec":75},{"width":7,"sec":70},{"width":9,"sec":240}]
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