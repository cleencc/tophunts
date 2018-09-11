function hideHunts(num = 3)
{
    var lists = document.querySelectorAll("[class^=postsList]");

    [].forEach.call(lists, function (list) {
        var items = list.querySelectorAll("li");
    
        var i = 0;
    
        for (i=0; i<items.length; i++) {
            if (i < num) continue;
    
            items[i].style.display = 'none';
        }
    });
}

setInterval(function () {
    chrome.storage.sync.get('num', function (data) {
        hideHunts(data.num);
    });
}, 1000);
