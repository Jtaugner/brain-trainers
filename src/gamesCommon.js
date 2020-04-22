const shultzGames = [
    [{width: 3}, {width: 3}, {width: 3},{width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},
        {width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},{width: 3}, {width: 3}, {width: 3},


    ],
    [{width: 4}, {width: 4}, {width: 4}, {width: 4}],
    [{width: 5}, {width: 5}, {width: 5}],
    [{width: 6}, {width: 6}, {width: 6}, {width: 6}, {width: 6}]
];

export const getLevelsAmountByGameAndDiff = (game, diff) => {
    switch (game) {
        case 'shultz': return shultzGames[diff].length;
    }
};