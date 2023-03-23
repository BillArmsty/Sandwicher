import { CONFIGS } from "./config";
import { Mempool } from "./core/uniswap/mempool";
import { bot, sendMessage } from "./core/telegram/telegram";

const startBot = async () => {
    try {
        await bot.launch();
        console.log("Bot started");
    } catch (error) {
        console.log(error);
    }
};

startBot();

const Main = async () => {
   
   
};






Main();