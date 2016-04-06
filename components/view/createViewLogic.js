// change switch to object!
(function() {
    App.createView = function(viewType) {
        cleanView();
        switch (viewType) {
            case "articleList":
                createArticleListView();
                break;
            case "carousel":
                createArticleCarouselView();
                break;
            case "carouselWithBanner":
                createArticleCarouselWithBanner();
                break;
            default:
                console.log("view is not defined");
        }

        function createArticleListView(finalWrapper) {
            var data = App.json.data,
                wrapper = document.createElement('div');
                
            for (var i = 0; i < data.length; i++) {
                wrapper.appendChild(App.createArticle(data[i]));
            }
            
            finalWrapper = finalWrapper || document.body;
            finalWrapper.appendChild(wrapper);
            return finalWrapper;
        }

        function createArticleCarouselView(finalWrapper) {
            var data = App.json.data,
                wrapper = App.createCarouselWrapper(),
                leftButton = document.createElement('button'),
                rightButton = document.createElement('button'),
                itemsWrapper = App.createCarouselItemsWrapper();
            
            wrapper.appendChild(createArticleListView(itemsWrapper));
            
            App.resizeItems(wrapper.firstChild);
            
            wrapper.insertBefore(App.createSliderButton("left", data, wrapper, itemsWrapper ), wrapper.childNodes[0]);
            wrapper.appendChild(App.createSliderButton("right", data, wrapper, itemsWrapper ));
            
            finalWrapper = finalWrapper || document.body;
            return finalWrapper.appendChild(wrapper);
        }

        function createArticleCarouselWithBanner() {

        }

        function cleanView() {
            var body = document.body;
            while (body.firstChild) {
                body.removeChild(body.firstChild);
            }
        }
    }
})();