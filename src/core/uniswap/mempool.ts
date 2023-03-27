import {
  ethers,
  WebSocketProvider,
  JsonRpcProvider,
  Contract,
  Wallet,
  TransactionResponse,
  TransactionReceipt,
} from "ethers";
import { sendMessage } from "../telegram/telegram";
import { CONFIGS } from "../../config";
import { ROUTER_ABI } from "../../config/abis";

/**
 *
 *  mempool.ts
 * @description This class is used to handle the mempool transactions i.e  monitoring & processing
 *
 */

let txpool = (): void => {
  const customWsProvider = new WebSocketProvider(CONFIGS.WSS_URL);

  customWsProvider.on("pending", (tx: string) => {
    customWsProvider
      .getTransaction(tx)
      .then((transaction: TransactionResponse | null) => {
        if (transaction !== null) {
          //console.log(transaction);
        }
      });
  });

 
};

txpool();

export { txpool };

