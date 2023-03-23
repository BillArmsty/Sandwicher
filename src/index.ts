import { CONFIGS } from "./config";
import { mempool } from "./core/uniswap/mempool";
import { bot, sendMessage } from "./core/telegram/telegram";

// const startBot = async () => {
//   try {

//     console.log("Bot started");
//   } catch (error) {
//     console.log(error);
//   }
// };

// startBot();

const Main = async () => {
  try {
    await mempool.monitorMempool();
    console.info(`Starting mempool monitoring`);

    await bot.launch();
    console.info(`Bot started`);
  } catch (error) {
    console.log(error);
  }
};

Main();
