chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({num: 3});
});

chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
    conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'www.producthunt.com'},
    })
    ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
});
