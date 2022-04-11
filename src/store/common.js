export const SHOW_ADV = "SHOW_ADV";
export const SHOW_VIDEO = "SHOW_VIDEO";



export const TOGGLE_SETTINGS = "TOGGLE_SETTINGS";
export const TOGGLE_SOUNDS = "TOGGLE_SOUNDS";


export const CHOOSE_GAME = "CHOOSE_GAME";
export const CHOOSE_DIFFICULT = "CHOOSE_DIFFICULT";
export const CHOOSE_LEVEL = "CHOOSE_LEVEL";


//Покупки за монеты
export const SUBTRACT_MONEY = "SUBTRACT_MONEY";
export const ADD_MONEY = "ADD_MONEY";

export const BUY_GAME = "BUY_GAME";
export const BUY_LEVELS_DIFF = "BUY_LEVELS_DIFF";

//Уровень
export const ADD_EXP = "ADD_EXP";
export const GET_NEW_LEVEL = "GET_NEW_LEVEL";

export const ADD_DONE_LEVEL = "ADD_DONE_LEVEL";

//Данные
export const CHANGE_PROGRESS_FROM_PLAYER_DATA = "CHANGE_PROGRESS_FROM_PLAYER_DATA";
export const CHANGE_LEVEL_FROM_PLAYER_DATA = "CHANGE_LEVEL_FROM_PLAYER_DATA";
export const CHANGE_EXP_FROM_PLAYER_DATA = "CHANGE_EXP_FROM_PLAYER_DATA";
export const CHANGE_MONEY_FROM_PLAYER_DATA = "CHANGE_MONEY_FROM_PLAYER_DATA";
export const CHANGE_GIFT_OPENS_FROM_PLAYER_DATA = "CHANGE_GIFT_OPENS_FROM_PLAYER_DATA";
//Рандомная игра
export const CHANGE_RAND_GAME = "CHANGE_RAND_GAME";
//Конфетти
export const SWITCH_OFF_CONFETTI =  "SWITCH_OFF_CONFETTI";
//Не хватает денег
export const CHANGE_NOT_ENOUGH_MONEY = "CHANGE_NOT_ENOUGH_MONEY";

export const CHANGE_LEVEL_INFO = "CHANGE_LEVEL_INFO";
export const CHANGE_PREMIUM_GAME = "CHANGE_PREMIUM_GAME";

export const CHANGE_PREMIUM_TIME= "CHANGE_PREMIUM_TIME";

export const CLOSE_NEW_LEVEL= "CLOSE_NEW_LEVEL";
export const SET_PREMIUM = "SET_PREMIUM";

export const CHANGE_GIFT_TIME = "CHANGE_GIFT_TIME";
export const CHANGE_CAN_OPEN_GIFT = "CHANGE_CAN_OPEN_GIFT";
export const CHANGE_GAME_SDK = "CHANGE_GAME_SDK";
export const CHANGE_GAME_PAYMENTS = "CHANGE_GAME_PAYMENTS";
export const ADD_OPEN_GIFT = "ADD_OPEN_GIFT";

export const CHANGE_REWARDED_TIME = "CHANGE_REWARDED_TIME";


export const CHANGE_GAME_CATALOG = "CHANGE_GAME_CATALOG";

export const getFromLocalStorage = (name, defaultVal, simpleValue) => {
  try{
    let val = localStorage.getItem(name);

    if(val) {
      if(simpleValue) return val;
      return Number(val);
    }

    if(!simpleValue) localStorage.setItem(name, defaultVal);
  }catch(e){}
  return defaultVal;
};

export const setToLocalStorage = (name, value) => {
  try{
    localStorage.setItem(name, value);
  }catch(e){}
}