function hideitems() {
    var user;
AJS.$.ajax({
	url: "/rest/gadget/1.0/currentUser",
	type: 'get',
	dataType: 'json',
	async: false,
	success: function(data) { user = data.username; } });
var groups;
AJS.$.ajax({
	url: "/rest/api/latest/user?username="+user+"&expand=groups",
	type: 'get',
	dataType: 'json',
	async: false,
	success: function(data) { groups = data.groups.items; }});
var group ;
group = "SchaefferPoeschlClient";
for (i = 0; i < groups.length; i++){
console.log(groups[i].name);
	if (groups[i].name==group){ 
		AJS.$("#jeti-trigger").hide(); //hide email button
        AJS.$("#wrap-labels").hide(); //hide labels
        AJS.$("#assignee-val").parents("dl").hide(); //hide assignee
		AJS.$("#resolution-val").parents("li").hide(); //hide resolution
		
        }
	}
};
AJS.$(document).toInit(function(){hideitems()});
JIRA.bind(JIRA.Events.NEW_CONTENT_ADDED, function (e, context) {
    hideitems();
});
