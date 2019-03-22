AJS.toInit(function () {
  AJS.$("#view_delete_project").hide();
  AJS.$(".delete-project").hide();
  var userName = AJS.params.loggedInUser;
  AJS.$.get("/rest/api/latest/user", {username: userName, expand: "groups"}, function (data) {
	  var groups = data.groups;
	  var userGroups = jQuery.map(groups.items, function (val, j) { return val.name });
	  if (jQuery.inArray("jira-system-administrators", userGroups) > -1) {
	    AJS.$("#view_delete_project").show();
	    AJS.$(".delete-project").show();
    }
  });
});
