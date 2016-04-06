(function() {

    function ViewLogic() {

        var views = {
                "articleList": createArticleListView,
                "carousel": createArticleCarouselView,
                "carouselWithBanner": createArticleCarouselWithBanner
            },
            data = App.json.data;

        function create(viewType) {
            var view,
                viewFunc = views[viewType];

            cleanView();

            if (viewFunc) {
                view = viewFunc();
                document.body.appendChild(view);
            }
            else {
                console.log("view not found");
            }
        }


        function createArticleListView() {
            var wrapper = document.createElement('div');

            for (var i = 0; i < data.length; i++) {
                wrapper.appendChild(App.Article.create(data[i]));
            }

            return wrapper;
        }

        function createArticleCarouselView() {
            var ArticleCarousel = App.ArticleCarousel,
                wrapper = ArticleCarousel.createCarouselWrapper(),
                leftButton = ArticleCarousel.createSliderButton("left"),
                rightButton = ArticleCarousel.createSliderButton("right"),
                itemsWrapper;

            itemsWrapper = createArticleListView();
            itemsWrapper = ArticleCarousel.setCssForItemsWrapper(itemsWrapper);
            itemsWrapper = ArticleCarousel.setCarouselView(itemsWrapper);
            
            itemsWrapper.insertBefore(leftButton, itemsWrapper.childNodes[0]);
            itemsWrapper.appendChild(rightButton);

            return itemsWrapper;
        }

        function createArticleCarouselWithBanner() {

        }

        function cleanView() {
            var body = document.body;
            while (body.firstChild) {
                body.removeChild(body.firstChild);
            }
        }

        return {
            create: create
        };
    }

    App.ViewLogic = ViewLogic();

})();