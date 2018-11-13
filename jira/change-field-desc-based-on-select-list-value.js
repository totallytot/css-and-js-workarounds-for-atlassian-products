var defaultDesc = "Select value in order to see description.";
AJS.toInit(function () {
    changeFieldDesc();
});
AJS.$("#customfield_10938").change(function () {
    changeFieldDesc();
});
function changeFieldDesc(){
	var messageA = "Security patch to a third-party component\n\Replacement of an infrastructure element (router, firmware) determined to present no risk and have no functional impact\n\Manual correction of an erroneous data field.";
	var messageB = "Change to database values or configuration file without impact on documented functionality (defect correction).";
	var messageC = "Any code change / deployment of a new software executable\n\Any change that could potentially affect the safety, performance or functionality of a software device";
	if (AJS.$("#customfield_10938").val() == 10632) AJS.$("#customfield_10938").next().text(messageA);
	else if (AJS.$("#customfield_10938").val() == 10633) AJS.$("#customfield_10938").next().text(messageB);
	else if (AJS.$("#customfield_10938").val() == 10634) AJS.$("#customfield_10938").next().text(messageC);
	else AJS.$("#customfield_10938").next().text(defaultDesc);
}
