console.log('js is functioning');

console.log('something else');

$(document).ready(onReady);

function onReady() {
    console.log('jquery is ON!');
    //event
    $('#sendButton').on('click', sendMessage);

};

function sendMessage(){
    var messageText = $('#messageText').val();
    $.ajax({
        method: 'POST',
        url: '/message',
        data: { message: messageText },
        success: function (response) {
            console.log('its a success!');
        },
        error: function (response) {
            console.log('post ajax failed');
            //console.log('response', response);
        }
    });
}