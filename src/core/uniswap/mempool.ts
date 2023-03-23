import {
  ethers,
  WebSocketProvider,
  JsonRpcProvider,
  Contract,
  Wallet,
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

export class Mempool {
  public wsprovider: WebSocketProvider;
  public contract: Contract;
  public abi: any;
  public address: string;
  public router: string;
  public provider: JsonRpcProvider;
  public signer: Wallet;

  constructor() {
    this.abi = ROUTER_ABI;
    this.address = CONFIGS.CONTRACT_ADDRESS;
    this.wsprovider = new WebSocketProvider(CONFIGS.WSS_URL);
    this.contract = new Contract(this.address, this.abi, this.wsprovider);
    this.router = CONFIGS.UNISWAP_ROUTER_ADDRESS;
    this.provider = new JsonRpcProvider(CONFIGS.JSON_RPC);
    this.signer = new Wallet(CONFIGS.PRIVATE_KEY, this.wsprovider);
  }

  /**
   * Implement the mempool monitoring here
   *
   * Listen for the mempool transactions
   */
  public async monitorMempool() {
    try {
      this.wsprovider.on("pending", async (txHash: string) => {
        let receipt = await this.provider.getTransaction(txHash);
        let message = `*MEMPOOL ALERT* ${txHash} is a mempool transaction`;

        sendMessage(message);
        receipt?.hash && this.processMempool(receipt);

      });
    } catch (error) {
      console.log(error);

    }
  }

    /**
     * Implement the mempool processing here
     * @param receipt
     */
    public async processMempool(receipt: any) {
        try {
          
        } catch (error) {
          console.log(error);
        }
      }
}
