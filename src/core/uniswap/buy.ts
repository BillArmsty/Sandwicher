import axios from "axios";
import qs from "qs";


const params = {
    buyToken: 'DAI',
    sellToken: 'ETH',
    sellAmount: 0.05 * 10 ** 18,
}

const URL = 'https://api.0x.org/swap/v1/quote?'
//Get Default Quote 
export const getDefaultQuote = async () => {
    let response: any
    try {
        response = await axios.get(`${URL}${qs.stringify(params)}`)
    }
    catch (error) {
        console.log(error)
    }
   // console.log("Default Quote")
    console.log(response.data)
    console.log(response.data.price)
    
}

//Get quote from specific dex

export const getUniSwapV3Quote = async (inputToken: any, outputToken: any, value: any) => {
    const exchangeList = 'UniswapV3, SushiSwap'
    const params = {
        buyToken: 'DAI',
        sellToken: 'ETH',
        sellAmount: 0.05 * 10 ** 18,
        includedSources: exchangeList
    }
    let response
    try {
        response = await axios.get(`${URL}${qs.stringify(params)}`)
    }
    catch (error) {
        console.log(error)
    }
    console.log("UniswapV3 Quote")
   
    
}

getDefaultQuote()
