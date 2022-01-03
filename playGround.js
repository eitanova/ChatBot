// Global variabels
let g_JSON = null;

// Open & Close chat bot window
$('#chatbot_icon').click(function(){
   
    let currIcon = $("#chatbot_icon").attr("src");
    if(currIcon.includes("icon.png"))
    {    
        $(".chatbot_window").slideDown("normal");
        
        $("#chatbot_icon").attr("src", "images/X.png");
    }
    else
    {
        $(".chatbot_window").slideUp("normal");
        $("#chatbot_icon").attr("src", "images/icon.png"); 
    }
})

// User clicked on option
$("body").on("click", ".chatbot_option", function () {

    if(g_JSON.children)
    {
        g_JSON = g_JSON.children[this.title];
        chatbot_createObjects(g_JSON);
    }
});

// init function
$(document).ready(function() { 
       $.getJSON("dataFile.json")
   .done(function(json){
       g_JSON = json;

       // Dont change json arg to g_JSON
       chatbot_createObjects(json);
    });

})

function chatbot_createObjects(data)
{
    let frame = "<div class='chatbot_frame'><div class='chatbot_frame_text'>";

    if(data.question)
    {
        let index = 0;
        frame += data.question;

        data.answer.forEach(answer => {
            frame +=  "<div class='chatbot_option' title="+ index +">" + answer + "</div>";
            index++;
        });
        
    }
    else // When no question's left
    {
        frame += data.answer + "<br>";
        frame += "DONE";
    }

    frame += "</div>";
    $(".chatbot_content").append(frame);
}
