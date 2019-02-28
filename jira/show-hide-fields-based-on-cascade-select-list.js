<script>
function newField(){
    AJS.$("#customfield_21730").closest('div.field-group').hide();
    AJS.$("#customfield_21731").closest('div.field-group').hide();
    AJS.$("#customfield_21732").closest('div.field-group').hide();
    AJS.$("#customfield_21733").closest('div.field-group').hide();
    AJS.$("#customfield_21734").closest('div.field-group').hide();
    AJS.$("#customfield_21735").closest('div.field-group').hide();
    AJS.$("#customfield_21736").closest('div.field-group').hide();
    AJS.$("#customfield_21737").closest('div.field-group').hide();
    AJS.$("#customfield_21738").closest('div.field-group').hide();
    AJS.$("#customfield_21739").closest('div.field-group').hide();
    AJS.$("#customfield_21740").closest('div.field-group').hide();
    AJS.$("#customfield_21741").closest('div.field-group').hide();
    AJS.$("#customfield_21742").closest('div.field-group').hide();
    AJS.$("#customfield_21743").closest('div.field-group').hide();
    AJS.$("#customfield_21744").closest('div.field-group').hide();
    AJS.$("#customfield_21745").closest('div.field-group').hide();
    AJS.$("#customfield_21746").closest('div.field-group').hide();
    AJS.$("#customfield_21747").closest('div.field-group').hide();
    AJS.$("#customfield_21748").closest('div.field-group').hide();
    AJS.$("#customfield_21749").closest('div.field-group').hide();
    AJS.$("#customfield_21750").closest('div.field-group').hide();
    AJS.$("#customfield_21751").closest('div.field-group').hide();
    AJS.$("#customfield_21752").closest('div.field-group').hide();
    AJS.$("#customfield_21753").closest('div.field-group').hide();
    AJS.$("#customfield_21754").closest('div.field-group').hide();
    AJS.$("#customfield_21756").closest('div.field-group').hide();

    var fOption = document.getElementById("customfield_21729").value
    var sOption = document.getElementById("customfield_21729:1").value
    if (fOption == "24804" && sOption == "24813"){
        AJS.$("#customfield_21730").closest('div.field-group').show();
        AJS.$("#customfield_21731").closest('div.field-group').show();
        AJS.$("#customfield_21732").closest('div.field-group').show();
        AJS.$("#customfield_21738").closest('div.field-group').show();

    }
    if (fOption == "24804" && sOption == "24814"){
        AJS.$("#customfield_21738").closest('div.field-group').show();
        AJS.$("#customfield_21733").closest('div.field-group').show();
        AJS.$("#customfield_21734").closest('div.field-group').show();
        AJS.$("#customfield_21735").closest('div.field-group').show();
        AJS.$("#customfield_21736").closest('div.field-group').show();
        AJS.$("#customfield_21737").closest('div.field-group').show();
    }
    if (fOption == "24805"){
        AJS.$("#customfield_21739").closest('div.field-group').show();
        AJS.$("#customfield_21740").closest('div.field-group').show();
    }
    if (fOption == "24806"){
        AJS.$("#customfield_21740").closest('div.field-group').show();
        if (sOption == "24815"){
            AJS.$("#customfield_21741").closest('div.field-group').show();
        }
        if (sOption == "24816"){
            AJS.$("#customfield_21741").closest('div.field-group').show();
            AJS.$("#customfield_21742").closest('div.field-group').show();
            AJS.$("#customfield_21743").closest('div.field-group').show();
            AJS.$("#customfield_21744").closest('div.field-group').show();
        }
    }
    if (fOption == "24807" || fOption == "24811" ){
        AJS.$("#customfield_21738").closest('div.field-group').show();
        AJS.$("#customfield_21740").closest('div.field-group').show();
    }
    if (fOption == "24808"){
        AJS.$("#customfield_21731").closest('div.field-group').show();
        AJS.$("#customfield_21745").closest('div.field-group').show();
        AJS.$("#customfield_21746").closest('div.field-group').show();
        AJS.$("#customfield_21747").closest('div.field-group').show();
        AJS.$("#customfield_21732").closest('div.field-group').show();
    }
    if (fOption == "24809"){
        AJS.$("#customfield_21748").closest('div.field-group').show();
        AJS.$("#customfield_21749").closest('div.field-group').show();
        AJS.$("#customfield_21750").closest('div.field-group').show();
        AJS.$("#customfield_21751").closest('div.field-group').show();
        AJS.$("#customfield_21740").closest('div.field-group').show();
    }
    if (fOption == "24810"){
        AJS.$("#customfield_21738").closest('div.field-group').show();
        AJS.$("#customfield_21752").closest('div.field-group').show();
        AJS.$("#customfield_21753").closest('div.field-group').show();
        AJS.$("#customfield_21754").closest('div.field-group').show();
        AJS.$("#customfield_21756").closest('div.field-group').show();
        AJS.$("#customfield_21740").closest('div.field-group').show();
    }
}
function getContent(){
newField();
AJS.$(document).on('change', '#customfield_21729',function () {newField();});
AJS.$(document).on('change', '#customfield_21729\\:1',function () {newField();});
}
AJS.$(document).ready(function($){getContent();}); 
AJS.$(document).bind('dialogContentReady', function(event, dialog){getContent()}); 
newField();
AJS.$(document).on('change', '#customfield_21729',function () {newField();});
AJS.$(document).on('change', '#customfield_21729\\:1',function () {newField();});
</script>
