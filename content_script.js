var style = document.createElement("style");
style.innerText+="#pagelet_ego_pane_w .ego_column {display:none;}";
style.innerText+="#pagelet_ego_pane .ego_column {display:none;}";
style.innerText+="#pagelet_ego_pane .ego_column {display:none;}";
style.innerText+=".fbTimelineSideAds .ego_column {display:none;}";
style.innerText+=".egoOrganicColumn {display:block !important;}";
var head = document.getElementsByTagName("head").item(0);
head.appendChild(style);
