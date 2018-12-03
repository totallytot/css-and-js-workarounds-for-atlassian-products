function newField(){
    AJS.$("#customfield_20701").closest('div.field-group').hide();
    AJS.$("#customfield_20702").closest('div.field-group').hide();
    AJS.$("#customfield_20703").closest('div.field-group').hide();
    AJS.$("#customfield_20704").closest('div.field-group').hide();
    AJS.$("#customfield_20705").closest('div.field-group').hide();
    AJS.$("#customfield_20706").closest('div.field-group').hide();
    AJS.$("#customfield_20707").closest('div.field-group').hide();
    AJS.$("#customfield_20708").closest('div.field-group').hide();
    AJS.$("#customfield_20709").closest('div.field-group').hide();
    AJS.$("#customfield_20710").closest('div.field-group').hide();
    AJS.$("#customfield_20711").closest('div.field-group').hide();
    var fOption = document.getElementById("customfield_20700").value
    var sOption = document.getElementById("customfield_20700:1").value
    if (fOption == "23700" && sOption == "23701"){
        AJS.$("#customfield_20701").closest('div.field-group').show();
        AJS.$("#customfield_20702").closest('div.field-group').show();
        AJS.$("#customfield_20703").closest('div.field-group').show();
        AJS.$("#customfield_20709").closest('div.field-group').show();

    }
    if (fOption == "23700" && sOption == "23702"){
        AJS.$("#customfield_20709").closest('div.field-group').show();
        AJS.$("#customfield_20704").closest('div.field-group').show();
        AJS.$("#customfield_20705").closest('div.field-group').show();
        AJS.$("#customfield_20706").closest('div.field-group').show();
        AJS.$("#customfield_20707").closest('div.field-group').show();
        AJS.$("#customfield_20708").closest('div.field-group').show();
    }
    if (fOption == "23703"){
        AJS.$("#customfield_20710").closest('div.field-group').show();
        AJS.$("#customfield_20711").closest('div.field-group').show();
    }
}

AJS.$(document).ready(function(){newField()});
AJS.$(document).bind('dialogContentReady', function(event, dialog){newField()});
AJS.$('#customfield_20700').change(function () {newField();});
AJS.$('#customfield_20700\\:1').change(function () {newField();});
