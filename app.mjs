import { Telegraf } from "telegraf";
import get_golde from "./request.mjs";
var bot = new Telegraf("7031124598:AAEMNUWuC4Z1D_KP6CNMagM_dryEQarYwC4");

let prev=0;
setInterval(()=>{

    get_golde().then(
        function(value){
            if(value){
                if(value[2]["v"][0]!=prev){
                    prev=value[2]["v"][0];
                    try{
                    bot.telegram.sendMessage("@fast_gold_price",value[2]["v"][0]+"$");
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