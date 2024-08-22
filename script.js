let user = prompt("Enter R,P or S");
let cpuI = Math.floor(Math.random() * 3);
let cpu = ["R", "P","S"][cpuI]

const match =(cpu,user)=>{
    if(cpu === user){
        return "It's a Tie...😜"
    }
    else if(cpu ==="R" && user==="P"){
        return "cpu...😔"
    }
    else if(cpu ==="R" && user==="S"){
        return "user...🎉"
    }
    else if(cpu ==="P"&& user==="R"){
        return "cpu...😔"
    }
    else if(cpu ==="P" && user==="S"){
        return "user...🎉"
    }
    else if(cpu ==="S" && user==="R"){
        return "user...🎉"
    }
    else if(cpu ==="S" && user==="P"){
        return "cpu...😔"
    }
}
let result = match(cpu,user)
a=document.getElementById("mydiv")
a.innerHTML=`CPU: ${cpu}<br> User: ${user}<br> The winner is: ${result}`
// document.write(`CPU:${cpu}<br> User:${user}<br> The winner is:${result}`)