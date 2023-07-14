let telegram_bot_id = "6189574670:AAF6_AfceRuiuG3ZrSo_CSwfYyiY4hrpPb8"; 
let chat_id = -1001892280247; 
let u_name, email, message;
let ready = function() {
    u_name = document.getElementById("name").value;
    email = document.getElementById("tel").value;
    message = document.getElementById("message").value;
    message = "Ismi: " + u_name + "\nTelfon raqami: " + email + "\nIzoh: " + message;
};
let sendtelegram = function() {
    ready();
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("tel").value = "";
    document.getElementById("message").value = "";
    return false;
};