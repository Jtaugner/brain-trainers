export const selectLevel = (store) => store.level;
export const selectExp= (store) => store.exp;
export const selectMoney= (store) => store.money;
export const selectPremium= (store) => store.purchases.isPremium;
export const selectGameProgress= (store, game) => store.progress[game];