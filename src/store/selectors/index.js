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
export const selectPremium= (store) => store.purchases.isPremium;

export const selectGameProgress= (store, game) => store.progress[game];
export const selectGameProgressByDifficult= (store) => store.progress[selectGame(store)].doneLevels[selectDifficult(store)];