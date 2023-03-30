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


let decodeAbi = new ethers.Interface(ROUTER_ABI);

async function txpool() {
  const wsProvider = new WebSocketProvider(CONFIGS.WSS_URL);

  wsProvider.on("pending", async (tx) => {
    const txnData = await wsProvider.getTransaction(tx);
    if (txnData) {
      let gas = txnData['gasPrice']
      if (txnData.to == CONFIGS.UNISWAP_ROUTER_ADDRESS && txnData['data'].includes("0x414bf389")) {
        console.log("hash: ", txnData['hash']);
        let decoded = decodeAbi.decodeFunctionData("exactInputSingle((address,address,uint24,address,uint256,uint256,uint256,uint160))",  txnData['data']);
        logTxn(decoded, gas)
        
      }
    }
  });
};

async function logTxn(data: ethers.Result, gas: bigint) {
  console.log("tokenIn: ", data['params']['tokenIn']);
  console.log("tokenOut: ", data['params']['tokenOut']);
  console.log("amount: ", data['params']['amountOutMinimum'].toString());
  console.log("gasPrice: ", gas.toString());
  console.log("-------------");
}
txpool();

export { txpool };
