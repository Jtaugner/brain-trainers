import {difficultNames, gamesNames} from "../../projectCommon";

export const selectPlayerLevel = (store) => store.playerLevel;
export const selectExp= (store) => store.exp;

export const selectSettings= (store) => store.settings;
export const selectSounds= (store) => store.sounds;

export const selectGame= (store) => store.game;
export const selectGameName= (store) => gamesNames[store.game];

export const selectDifficult= (store) => store.difficult;
export const selectDifficultName= (store) => difficultNames[selectDifficult(store)].difficultName;

export const selectGameLevel = (store) => store.gameLevel;

export const selectMoney= (store) => store.money;
export const selectPremium= (store) => store.premium;

export const selectProgress= (store) => store.progress;
export const selectGameProgress= (store, game) => store.progress[game];
export const selectGameProgressWithoutGame = (store) => store.progress[selectGame(store)];
export const selectGameProgressByDifficult= (store) => store.progress[selectGame(store)].doneLevels[selectDifficult(store)];


//rand game
export const selectRandGame = (store) => store.randomGame;
//confetti
export const selectShowConfetti = (store) => store.showConfetti;

export const selectNotEnoughMoney = (store) => store.notEnoughMoney;

export const selectPremiumGame = (store) => store.premiumGame;
export const selectLevelInfo = (store) => store.levelInfo;
export const selectPremiumTime = (store) => store.premiumTime;

export const selectNewLevel = (store) => store.newLevel;

export const selectGiftTime = (store) => store.giftTime;
export const selectCanOpenGift = (store) => store.canOpenGift;
export const selectGameSDK = (store) => store.gameSDK;
export const selectGiftOpens = (store) => store.giftOpens;


export const selectRewardedTime = (store) => store.rewardedTime;
export const selectPayments = (store) => store.gamePayments;

export const selectCatalog = (store) => store.catalog;