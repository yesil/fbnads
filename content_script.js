var head = document.getElementsByTagName("head").item(0);
var style = document.createElement("style");
head.appendChild(style);
var styles = document.getElementsByTagName("style");
style = styles.item(styles.length-1);
style.innerText+="#pagelet_ego_pane_w .ego_column {display:none;}";
style.innerText+="#pagelet_ego_pane .ego_column {display:none;}";
style.innerText+="#pagelet_ego_pane .ego_column {display:none;}";
style.innerText+=".fbTimelineSideAds .ego_column {display:none;}";
style.innerText+=".egoOrganicColumn {display:block !important;}";

