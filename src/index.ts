import { CONFIGS } from "./config";
import { Mempool } from "./core/uniswap/mempool";
import { bot, sendMessage } from "./core/telegram/telegram";

const Main = async () => {
    sendMessage("Sandwiching Bot is running")
    let mempool = new Mempool();
    mempool.monitorMempool();
};



bot.start((ctx) => {
    ctx.reply("Welcome to Sandwiching Bot");
}
);

bot.launch();
Main();