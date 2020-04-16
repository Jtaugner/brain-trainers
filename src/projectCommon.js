const valueForDoneLevel = [
    {money: 1, exp: 10},
    {money: 2, exp: 25},
    {money: 4, exp: 40},
    {money: 6, exp: 70}
];
export const getMoneyForGameLevel = (difficult) => {
    return valueForDoneLevel[difficult].money;
};
export const getExpForGameLevel = (difficult) => {
    return valueForDoneLevel[difficult].exp;
};
const gameLevelOpen = [
    {money: 0, level: 0},
    {money: 0, level: 0},
    {money: 0, level: 0},
    {money: 100, level: 3},
    {money: 300, level: 5},
    {money: 600, level: 7},
    {money: 1000, level: 9},
    {money: 1400, level: 11},
    {money: 1800, level: 12},
    {money: 2300, level: 15},
];
export const getGameLevelOpenCosts = (lvl) => {
    return gameLevelOpen[lvl].money;
};
export const getGameLevelOpenLevel = (lvl) => {
    return gameLevelOpen[lvl].level;
};
const level = [
    {exp: 50, money: 5},
    {exp: 100, money: 10},
    {exp: 250, money: 15},
    {exp: 400, money: 25},
    {exp: 700, money: 35},
    {exp: 1000, money: 50},
    {exp: 1400, money: 65},
    {exp: 1900, money: 75},
    {exp: 2500, money: 90},
    {exp: 3500, money: 110},
    {exp: 4700, money: 140},
    {exp: 6000, money: 180},
    {exp: 7500, money: 230},
    {exp: 9200, money: 300},
];

export const getExpLevel = (lvl) => {
    return level[lvl].exp
};
export const getMoneyLevel= (lvl) => {
    return level[lvl].money
};
