chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({'url': 'https://duckduckgo.com', 'active': true});
});
