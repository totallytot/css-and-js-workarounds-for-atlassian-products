AJS.toInit(function () {	
 if (window.location.href.endsWith("/secure/project/ViewProjects.jspa") || window.location.href.search("plugins/servlet/project-config/") > -1) {
   AJS.$("#view_delete_project").hide();
   AJS.$(".delete-project").hide();    
   AJS.$.get("/rest/auth/1/session", function (data) {
     var userName = data.name
	 AJS.$.get("/rest/api/latest/user", {username: userName, expand: "groups"}, function (data) {
	   var groups = data.groups;
	   var userGroups = jQuery.map(groups.items, function (val, j) { return val.name });
	   if (jQuery.inArray("jira-system-administrators", userGroups) > -1) {
	     AJS.$("#view_delete_project").show();
	     AJS.$(".delete-project").show();
       } 
     });
   });
 }
}); 

//another modification
AJS.toInit(function () {  
 if (window.location.href.search("secure/project/BrowseProjects") > -1 || window.location.href.search("plugins/servlet/project-config/") > -1) {
   AJS.$("#view_delete_project").hide();
   AJS.$("#dropdown2-more-11700 > ul > li:nth-child(2)").css("display", "none");   
 }
}); 
