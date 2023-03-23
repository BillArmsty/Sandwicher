import { Context, Markup, Telegraf } from "telegraf";
import { CONFIGS } from "../../config";
import { normalizeMessage } from "../../helpers/telegram";

const bot = new Telegraf(CONFIGS.BOT_TOKEN);

bot.use(async (ctx: Context, next) => {
  try {
    let userId = ctx.message?.from?.id || "";
    if (CONFIGS.WHITELISTED_USERS.includes(userId.toString())) {
      await next();
      return;
    } else {
      return ctx.reply("You are not authorized to use this bot");
    }
  } catch (error) {
    console.log(error);
  }
});

const sendMessage = async (message: string) => {
    for (const userId of CONFIGS.WHITELISTED_USERS) {
        try {
      await bot.telegram.sendMessage(userId, normalizeMessage(message), {
        parse_mode: "MarkdownV2",
        disable_web_page_preview: true,
        });

    } catch (error) {
      console.log(error);
    }
    }
};

export { bot, sendMessage };
