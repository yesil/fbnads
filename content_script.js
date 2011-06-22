var doIt = function(){
	var pagelet_ego_pane = $('#pagelet_ego_pane')[0];
	if(pagelet_ego_pane) {
		var parent = pagelet_ego_pane.firstChild;
		if(parent){
			var children = parent.children;
			for(var i= 0; i < children.length; i++)
			{
				var child = children[i];
				if(child && child.className.indexOf('egoOrganicColumn')==-1) parent.removeChild(child);
			}
		}
	}
	var adsContainer = $('.adsContainer')[0];
	if(adsContainer){
		var clearfix = adsContainer.firstChild;
		if(clearfix) {
			adsContainer.removeChild(clearfix);
		}
	}
}
$(function() {
	doIt();
	$('#globalContainer').bind('DOMSubtreeModified', doIt);
});
