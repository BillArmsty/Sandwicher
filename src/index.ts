import { CONFIGS } from "./config";
import { txpool } from "./core/uniswap/mempool";
import { bot, sendMessage } from "./core/telegram/telegram";
import { getDefaultQuote } from "./core/uniswap/buy";


const Main = async () => {
  try {
    txpool();
    console.info(`Starting mempool monitoring`);
    getDefaultQuote();

    await bot.launch();
    console.info(`Bot started`);
  } catch (error) {
    console.log(error);
  }
};

Main();
