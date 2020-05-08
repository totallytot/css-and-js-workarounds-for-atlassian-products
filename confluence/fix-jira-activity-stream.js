// Autohor: Ben Shamsian 
// https://jira.atlassian.com/browse/JRASERVER-41293?focusedCommentId=1062090&page=com.atlassian.jira.plugin.system.issuetabpanels%3Acomment-tabpanel#comment-1062090

function updateActivityStreamUrls() {
    var id = jQuery(this).attr('id');
    var decodediFrameSrc = decodeURIComponent(jQuery(this).attr('src')).match(/^[htps]+(:\/\/[^\.]+\.).*\&url=([htps]+(:\/\/[^\.]+\.)[^\/]+)/);
    var confluenceSubdomain = decodediFrameSrc[1];
    var jiraBaseUrl = decodediFrameSrc[2];
    var jiraSubdomain = decodediFrameSrc[3];
    // update URL href 
    jQuery("iframe[id^='" + id + "']").contents().find(".activity-stream-container a[href^=\'\/\']").prop("href", function(_idx, oldHref) {
        return oldHref.replace(confluenceSubdomain, jiraSubdomain);
    });
    // update image tag src
    jQuery("iframe[id^='" + id + "']").contents().find(".activity-stream-container img[src^=\'\/\']").attr("src", function(_idx, oldSrc) {
        return jiraBaseUrl.concat(oldSrc);
    });
    // Need to keep checking since it could be a self updating gadget or 
    // the user presses the "See more" button at the button of the gadget
    setTimeout(updateActivityStreamUrls.bind(this), 5000);
}

jQuery(document).ready(function() {
    // Fix broken links in Jira activity stream gadget
    jQuery("iframe[id^='gadget'][src*='activitystream']").bind('load', function() {
        var decodediFrameSrc = decodeURIComponent(jQuery(this).attr('src')).match(/^[htps]+(:\/\/[^\.]+\.).*\&url=([htps]+(:\/\/[^\.]+\.)[^\/]+)/);
        // Check to make sure we are not trying to update confluence activity stream
        if (decodediFrameSrc && (decodediFrameSrc.length >= 3) && (decodediFrameSrc[1] != decodediFrameSrc[3])) {
            // Not updating confluence activity stream so set a timer to call the function to update the URL's
            setTimeout(updateActivityStreamUrls.bind(this), 2000);
        }
    });
});
