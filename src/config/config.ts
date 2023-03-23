import 'dotenv/config';

if (!process.env.PRIVATE_KEY) {
    throw new Error(
      'PRIVATE_KEY is not defined and must be set in the .env file'
    );
  }
  
  export const CONFIGS = {
    /**
     * @description PRIVATE_KEY is the private key of the account that will be used to sign transactions
     */
    PRIVATE_KEY: process.env.PRIVATE_KEY!,
  
    /**
     * @description JSON RPC endpoint
     * @type {string}
     */
    JSON_RPC: process.env.JSON_RPC!,

    /**
     * @description WALLET_ADDRESS is the address of the account that will be used to sign transactions
     * @type {string}
     */
    WALLET_ADDRESS: process.env.WALLET_ADDRESS!,
  
    /**
     * @description WSS_URL is the websocket endpoint of the WSS  endpoint
     */
  
    WSS_URL: process.env.WSS_URL!,
  
    /**
     * @description Contract address
     * @type {string}
     */
    CONTRACT_ADDRESS: '',
  
    /**
     * STABLE TOKENS addresses e.g BUSD, USDT, USDC, etc
     */
    STABLE_TOKENS: [''],

    /**
     * @description Telegram Bot Token
     */
  
    BOT_TOKEN: process.env.BOT_TOKEN!,
  
    /**
     * @description Telegram Chat IDs for users to receive notifications
     * @type {string[]}
     */
    WHITELISTED_USERS: ['884205932'],
  
    /**
     * @description UniSwap Router address
     * @type {string}
     * @default 0xE592427A0AEce92De3Edee1F18E0157C05861564
     */
    UNISWAP_ROUTER_ADDRESS: '0xE592427A0AEce92De3Edee1F18E0157C05861564',
  };