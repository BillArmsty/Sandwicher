import axios from 'axios';
import { sendMessage } from '../core/telegram/telegram';



export const rugChecker = async (address: string) => {
    let {data} = await axios.get(`https://aywt3wreda.execute-api.eu-west-1.amazonaws.com/default/IsHoneypot?chain=eth&token=${address}`)
    console.log(data)
    let rugStatus = data.IsHoneypot
     if (data.IsHoneypot === false) {
        let message = `*RUG CHECKER ALERT* ${address} is a GOOD Token`
        sendMessage(message)
         console.log("This is a GOOD Token")
     } else {
        let message = `*RUG CHECKER ALERT* ${address} is a FAKE Token`
        sendMessage(message)
         console.log("This is a FAKE Token")
     }
     
 return rugStatus
}