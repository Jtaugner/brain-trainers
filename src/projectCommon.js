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
    0, 0, 0, 100, 300, 600, 1000, 1400, 1800
];
export const getGameLevelOpenCosts = (lvl) => {
    return gameLevelOpen[lvl];
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
    console.log(lvl, level[lvl], level[lvl].exp);
    return level[lvl].exp
};
export const getMoneyLevel= (lvl) => {
    return level[lvl].money
};

export const gamesNames = {
    'shultz': 'Таблица Шульте',
    'rememberNumbers': 'Запомни числа',
    'findWord': 'Найди слово',
    'wordInText': 'Слово в тексте',
    'field': 'Поле зрения',
    'runWords': 'Бегущие слова',
    'chet': 'Чётные числа',
    'findLetters': 'Поиск букв',
    'couple': 'Пары слов',
};
export const moneyPrice = [
    //монеты - рубли
    {money:150, price:59},
{money:400, price:129, className: 'double-money'},
    {money:1000, price:249, className: 'bag-money'},
    {money:2000, price:399, className: 'bags-money'}
];
export const premiumPrice = [
    //дни - рубли
    [1, 49],
    [7, 149],
    [30, 299]
];
export const difficultNames = [
    {key: 'easy', difficultName: 'Легко'},
    {key: 'medium', difficultName: 'Средне'},
    {key: 'hard', difficultName: 'Сложно'},
    {key: 'expert', difficultName: 'Эксперт'}
];

export const moneyAndExpPerDifficult = [
    {exp: 10, money: 1},
    {exp: 25, money: 3},
    {exp: 40, money: 5},
    {exp: 70, money: 10},
];

export const shuffle = (arr)=> {
    let j, temp;
    for (let i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
};