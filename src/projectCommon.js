import React from "react";

const gameLevelOpen = [
    0, 0, 0, 100, 300, 600, 1000, 1400, 1800
];
export const getGameLevelOpenCosts = (lvl) => {
    return gameLevelOpen[lvl];
};
const level = [
    {exp: 100, premium: 24 * 60 * 60 * 1000},
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
    {exp: 9200, premium: 2 * 24 * 60 * 60 * 1000},
];
export const getExpLevel = (lvl) => {
    return level[lvl].exp
};
export const getLevelPrize= (lvl) => {
    return level[lvl];
};

export const gamesNames = {
    'shultz': 'Таблица Шульте',
    'rememberNumbers': 'Запомни числа',
    'findWord': 'Найди слово',
    'field': 'Поле зрения',
    'wordInText': 'Слово в тексте',
    'couple': 'Пары слов',
    'runWords': 'Бегущие слова',
    'chet': 'Чётные числа',
    'findLetters': 'Поиск букв',
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
    {exp: 10, money: 1}, //500 50 с полного уровня
    {exp: 25, money: 2}, //1250 100
    {exp: 40, money: 4}, //2000 200
    {exp: 60, money: 7}, //3000 350
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

const gamesRules = {
    'shultz': <div>
        <p>
            Таблица Шульте - игра, в которой
            вам нужно найти все числа по порядку как можно быстрее.
        </p>
        <p>
            Числа находятся в квадрате от 3 на 3 до 10 на 10.
            Постарайтесь сосредоточить ваш взгляд в центре и искать числа, не отрывая его от середины.
        </p>
        <p>
            Игра расширяет поле зрения, которое помогает замечать различные объекты боковым зрением,
            а также увеличивает скорость чтения.
        </p>
    </div>,
    'rememberNumbers': <div>
        <p>
            Запомни числа - игра, в которой на время показывается
            число, а вам нужно запомнить его и ввести.
        </p>
        <p>
            По ходу игры вам будут попадаться числа длиной от 3 до 9,
            а время на их запоминание будет уменьшаться.
        </p>
        <p>
            Старайтесь запоминать числа группами. К примеру, разделить 976253921 на 976, 253 и 921.
        </p>
    </div>,
    'field': <div>
            <p>Поле зрения - игра, в которой вам нужно
                следить за 4 буквами, которые постоянно меняются.
                Если вы заметите, что буквы различны
                - жмите на кнопку "Ошибка".</p>
            <p>
                Постарайтесь сфокусировать взгляд в центре,
                ваше поле зрение поможет замечать все буквы.
                Доверьтесь вашим глазам и сразу нажимайте на кнопку, заметив ошибку.
            </p>
            <p>
                Игра помогает расширирять поле зрение и замечать мелкие детали.
            </p>
    </div>,
    'wordInText': <div>
        <p>Слово в тексте - игра, в которой вам нужно
            находить различные слова в отрывке текста.
            Нужное слово будет показано над текстом.
        </p>
        <p>
            Чем больше слов вы найдёте, тем быстрее будете находить другие слова, так как мозг начнёт запоминать текст.
        </p>
        <p>
            Это игра направлена на вашу внимательность и память.
        </p>
    </div>,
    'runWords': <div>
        <p>
            На экране появляются быстро сменяющиеся слова.
            Вам нужно запомнить сами слова и их порядок, а затем нажать на них в специальном окне.
        </p>
        <p>
            Это сложная игра. Очень немногие люди способны запомнить больше 7 слов.
        </p>
        <p>
            Понадобится много тренировок, чтобы пройти сложные и экспертные уровни.
            Когда сумеете, знайте - у вас отличная память!
        </p>
    </div>,
    'couple': <div>
        <p>
            На экране расположено определённое количество пар слов.
            Вам нужно найти и нажать на те пары, слова в которых различны.
        </p>
        <p>
            Игра может показаться простой,
            но в ней есть такие пары, в которых очень тяжело найти ошибку.
        </p>
        <p>
            Иногда придётся пристально всматриваться в слова и читать каждую букву,
            но зата ваша внимательность будет возрастать с каждым уровнем!
        </p>
    </div>,
    'findLetters':
        <div>
            <p>
                На экране расположено определённое
                количество букв, а сверху написана та, которую вам нужно найти.
                Найдите и нажмите на все одинаковые буквы.
            </p>
            <p>
                Маленькие и большие буквы - разные,
                если вам нужно найти большую, не нажимайте на маленькую, и наоборот.
            </p>
            <p>
                Если вы читаете этот текст, то вы открыли последнюю игру. Поздравляем!
                В будущих обновлениях появятся новые игры. Развивайтесь играя :)
            </p>
        </div>,
    'chet': <div>
            <p>
                Среди множества чисел на экране вам нужно найти все чётные числа и нажать на них.
            </p>
            <p>
                 Есть несколько способов поиска чётных чисел.
                 К примеру, быстро проходить глазами по вертикали или по горизонтали, захватывая взглядом только последнюю цифру числа.
            </p>
            <p>
                Игра поможет вам стань внимательнее и научит фокусировать взгляд в нужной точке.
            </p>
        </div>,
    'findWord': <div>
        <p>
            В данной игре вам нужно находить слова, спрятанные в таблице.
            Слова, которые нужно найти, написаны над самой таблицей.
        </p>
        <p>
            Найдя слово, выделите его первую букву,
            а затем ведите пальцем или мышкой до следующей буквы.
        </p>
    </div>
};

export const getRules = (game) => {
    return gamesRules[game];
};

const giftPrizes = [
  15, 20, 25, 30, 35
];
export const getRandPrize = () => {
    return giftPrizes[Math.floor(Math.random() * giftPrizes.length)];
};
export const giftTimes = [
    1000 * 60 * 30,
    1000 * 60 * 60,
    1000 * 60 * 60 * 4,
    1000 * 60 * 60 * 24
];