import { Telegraf } from "telegraf";
import get_gold from "./request.mjs";
// set bot token here
var bot = new Telegraf("7031124598:AAEMNUWuC4Z1D_KP6CNMagM_dryEQarYwC4");
let prev=0;
// set a interval with 5secs time
setInterval(()=>{
    // call get_gold function
    get_gold().then(
        function(value){
            if(value){
                if(value[2]["v"][0]!=prev){
                    prev=value[2]["v"][0];
                    try{
                    bot.telegram.sendMessage("@fast_gold_price",parseFloat(value[2]["v"][0]).toFixed(2)+" $");
                    }
                    catch(err){
                        console.log("not found the channel")
                    }
                }
            }
        }
    )
    },5000);



bot.launch();