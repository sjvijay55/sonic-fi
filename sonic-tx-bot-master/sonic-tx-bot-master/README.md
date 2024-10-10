# SONIC TX BOT

Sonic TX bot for adding more tx on chain

## BOT FEATURE

- Auto Check In
- Auto TX until 100 Times
- Auto Claim TX Milestone
- Auto Draw Lottery
- Auto Opening Mystery Box
- Run Account 1 by 1 or Mass run (posible got forbidden if to much account)

## PREREQUISITE

- Git
- Node JS > v18

## SETUP

- run `git clone https://github.com/Widiskel/sonic-tx-bot.git`
- run `cd sonic-tx-bot`
- run `npm install`
- run `cp account_tmp.js account.js`
- fill up account.js `nano account.js` fill with your account private key

## CONFIGURATION

im adding config file for you to configure, open `src config/config.js` and adjust config. Here some configurable variables.

```js
export class Config {
  static sendAmount = 0.0001; //amount to send in sol
  static destAddress = addressList; //address destination list
  static drawAmount = 3; //lottery draw ammount
  static maxRetry = 3; // max error retry for claiming
  static useLottery = false; // if you want use lottery feature, it still experimental so it may be broken because of Sonic API is sometimes down.
}
```

to configure destination address list, open `src config/address_list.js` adjust the list with yours. the bot will pick random destination address from that list to send token or it will send to its own wallet address.

## HOW TO UPDATE

to update just run `git pull` or if it failed because of unstaged commit, just run `git stash` and then `git pull`. after that do `npm install` or `npm update`.

## CONTRIBUTE

Feel free to fork and contribute adding more feature thanks.

## NOTE

Bot running using twister, so if you run multiple account maybe some account not showed on your terminal because it depens on your windows screen, but it still running. you can check on `app.log`.

## SUPPORT

want to support me for creating another bot ?
buy me a coffee on

EVM : `0x0fd08d2d42ff086bf8c6d057d02d802bf217559a`

SOLANA : `3tE3Hs7P2wuRyVxyMD7JSf8JTAmEekdNsQWqAnayE1CN`
