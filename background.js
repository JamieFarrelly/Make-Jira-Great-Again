chrome.webNavigation.onBeforeNavigate.addListener(function (obj) {

    var tabId = obj.tabId;
    var url = obj.url;
	
    if (url.indexOf("oldIssueView") < 0) {
        chrome.tabs.update(tabId, { url: url + "?oldIssueView=true"});
    }

}, { url: [{ hostContains: 'myjira.atlassian.net' }] }); // update this with your jira URL (eg. myjira.atlassian.net)