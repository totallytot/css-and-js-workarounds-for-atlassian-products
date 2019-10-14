<script type='text/javascript'>
// To use just place in JIRA Announcement Banner
// Disables 'Any Logged in user' option when sharing filters AND dashboards
// Fires on page load
// Last tested for Jira 7.12.1 - 8.2.3

AJS.toInit(function()
{
// Scrapes URL path 
var urlPath = $(location).attr('pathname');
// Sets variable for later use to disable checking for tag presence
var intervalID;

// check url if we are editing a filter 
if (urlPath.toLowerCase().indexOf("editfilter") >= 0){
intervalID = window.setInterval(callBack, 10);
}
// Listens for edit filter dialog
AJS.$(".edit-filter").click(function() {
intervalID = window.setInterval(callBack, 10);
})

//check url for dashboard create
if (urlPath.toLowerCase().indexOf("addportalpage") >= 0){
intervalID = window.setInterval(callBack, 10);
}
//check url for dashboard edit
if (urlPath.toLowerCase().indexOf("editportalpage") >= 0){
intervalID = window.setInterval(callBack, 10);
}
// Listens for edit dashboard dialog
AJS.$(".edit-dashboard").click(function() {
intervalID = window.setInterval(callBack, 10);
});

// Removes unwanted elements
function callBack() 
{
var loggedin = AJS.$("#share_type_selector_viewers option[value='loggedin']");
var warning = AJS.$("#share_warning");
var addGlobal = AJS.$("#share_add_global");
var desc = AJS.$("#share_type_description");
var groupShare = AJS.$("#share_group");

if (loggedin.length > 0) {
clearInterval(intervalID);
loggedin.remove();
warning.remove();
addGlobal.remove();
desc.remove();
groupShare.removeAttr("style");
}
}
});
</script>
