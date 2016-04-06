(function() {
    document.addEventListener('DOMContentLoaded', domReady);

    function domReady() {
        //send Async request to get data from the server
        var viewType = App.json.viewType;
        App.createView(viewType);
    }
})();