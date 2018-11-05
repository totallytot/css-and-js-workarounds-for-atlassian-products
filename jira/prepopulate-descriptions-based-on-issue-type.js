/*
The following JS snippet will add template in description field based on issue type:
Service Request and project name - VTB-DBO-ArchDesign (VTBDBOADES)
*/
JIRA.bind(JIRA.Events.NEW_CONTENT_ADDED, function (e, context) {
    if (AJS.$("#project-field").val() == "VTB-DBO-ArchDesign (VTBDBOADES)") {
        if (AJS.$("#issuetype-field").val() == "Service Request") {
        template();
        }
        else {
        templateEmpty();
        }
    }
    else {
    templateEmpty();
    }
});
  
AJS.$(document).ready(function () {
    if (AJS.$("#project-field").val() == "VTB-DBO-ArchDesign (VTBDBOADES)") {
        if (AJS.$("#issuetype-field").val() == "Service Request") {
        template();
        }
        else {
        templateEmpty();
        }
    }
    else {
    templateEmpty();
    }
});
  
function template(){
    document.getElementById("description").value = "*Постановка проблемы*:\n\
    _1. Что нужно:_\n\
    _2. Для чего нужно:_\n\
    \n\
    *Известные ограничения*\n\
    \n\
    *Пример сценария* [_ссылка на детальное описание_]\n\
    \n\
    *Что нужно сделать \ DoD \ Критерии приемки*\n\
    \n\
    *Заинтересованные направления (стримы)*";
    }
  
function templateEmpty(){
    document.getElementById("description").value = "";
    }
