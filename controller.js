(function() {
    document.addEventListener('DOMContentLoaded', domReady);

    function domReady() {
        var viewType = App.json.viewType;
        App.ViewLogic.create(viewType);
    }
    
})();