async function get_golde(){
    try{
    var ssid= await fetch("https://balancer11.netdania.com/StreamingServer/StreamingServer?xstream=1&v=3&dt=0&h=eyJnIjoibS5uZXRkYW5pYS5jb20iLCJhaSI6ImpzTVcgdjEuMiIsInByIjoiMyIsImF1IjoiaHR0cHM6Ly9tLm5ldGRhbmlhLmNvbS9jb21tb2RpdGllcyIsInF1cCI6MX0.&xcmd=W3sidCI6MSwiaSI6MSwibSI6MSwicyI6IlRSSkNSQlRSLm55IiwicCI6InNnX2RsYiIsImZsdCI6eyJtIjoxLCJmIjpbMSwyLDMsNiwxMCwxNywyNSwxMzhdfX0seyJ0IjoxLCJpIjoyLCJtIjoxLCJzIjoiWEFVVVNET1oiLCJwIjoiaWRjIiwiZmx0Ijp7Im0iOjEsImYiOlsxLDIsMyw2LDEwLDE3LDI1LDEzOF19fSx7InQiOjEsImkiOjMsIm0iOjEsInMiOiJYQUdVU0RPWiIsInAiOiJpZGMiLCJmbHQiOnsibSI6MSwiZiI6WzEsMiwzLDYsMTAsMTcsMjUsMTM4XX19LHsidCI6MSwiaSI6NCwibSI6MSwicyI6IkJUQ1VTRCIsInAiOiJjcnlwdG94Y2hhbmdlIiwiZmx0Ijp7Im0iOjEsImYiOlsxLDIsMyw2LDEwLDE3LDI1LDEzOF19fSx7InQiOjEsImkiOjUsIm0iOjEsInMiOiJVS09pbCIsInAiOiJmeGNtIiwiZmx0Ijp7Im0iOjEsImYiOlsxLDIsMyw2LDEwLDE3LDI1LDEzOF19fV0.&cb=?&ts=1715004542500");
    }
    catch(err){
        console.log("bad request")
    }
    if(ssid?.ok){
    let res=await ssid.json();
    
    return res;
    }

    return "";
}

export default get_golde;

