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
 * @class mempool.ts
 * @description This class is used to handle the mempool transactions i.e  monitoring & processing
 *
 */

 class Mempool {
  public wsProvider: WebSocketProvider;
  public contract: Contract;
  public abi: any;
  public address: string;
  public router: string;
  public provider: JsonRpcProvider;
  public signer: Wallet;

  constructor() {
    this.abi = ROUTER_ABI;
    this.address = CONFIGS.CONTRACT_ADDRESS;
    this.wsProvider = new WebSocketProvider(CONFIGS.WSS_URL);
    this.contract = new Contract(this.address, this.abi, this.wsProvider);
    this.router = CONFIGS.UNISWAP_ROUTER_ADDRESS;
    this.provider = new JsonRpcProvider(CONFIGS.JSON_RPC);
    this.signer = new Wallet(CONFIGS.PRIVATE_KEY, this.wsProvider);
  }

  /**
   * Implement the mempool monitoring here
   *
   * Listen for the mempool transactions
   */
   monitorMempool = async () => {
    let wsProvider = new WebSocketProvider(CONFIGS.WSS_URL);
    wsProvider.on('pending', async (hash) => {
      try {
        let receipt = await wsProvider.getTransactionReceipt(hash);
        receipt && this.processMempool(receipt);
      } catch (error) {
        console.log(error);
      }
    });
  };

  /**
   * Implement the mempool transaction processing here
   * @param receipt
   * 
   * Process the mempool transactions
   */

  processMempool = async (receipt: TransactionReceipt) => {
    
    console.info(`Processing mempool transaction: ${receipt.hash}`);
    }
  

 
}

export  const mempool = new Mempool();
