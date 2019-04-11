<!-- Hides "Space Tools", "Page history", "Page Information" and "View in Hierarchy" from anonymous users -->
<script>
AJS.toInit(function(){ 
  if (AJS.params.remoteUserKey === '') {
    AJS.$('#space-tools-menu-trigger').hide();
    AJS.$('.ia-scrollable-section').css('margin-bottom', '-40px');
    AJS.$('#view-page-info-link').hide();
    AJS.$('#action-view-history-link').hide(); 
    AJS.$('#view-in-hierarchy-link').hide(); 
  }
});
</script>
