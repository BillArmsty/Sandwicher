import { CONFIGS } from "./config";
import { txpool } from "./core/uniswap/mempool";
import { bot, sendMessage } from "./core/telegram/telegram";

const Main = async () => {
  try {
    txpool();
    console.info(`Starting mempool monitoring`);

    await bot.launch();
    console.info(`Bot started`);
  } catch (error) {
    console.log(error);
  }
};

Main();
