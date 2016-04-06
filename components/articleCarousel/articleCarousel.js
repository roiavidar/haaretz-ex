(function() {
    function ArticleCarousel() {
        var itemsPerSlide = 3,
            viewCarousel,
            itemsArray,
            index = 0;

        var createSliderButton = function(side) {
            var button = document.createElement('button');

            if (side === "left") {
                button.textContent = "<";
                button.addEventListener('click', moveCarouselRight);
            }
            else {
                button.textContent = ">";
                button.addEventListener('click', moveCarouselLeft);
            }

            function moveCarouselLeft() {
                if (index + itemsPerSlide < itemsArray.length) {
                    viewCarousel.removeChild(viewCarousel.firstChild.nextSibling);
                    viewCarousel.insertBefore(itemsArray[index + itemsPerSlide], viewCarousel.lastChild);
                    index++;
                }
            }

            function moveCarouselRight() {
                if (index > 0) {
                    viewCarousel.removeChild(viewCarousel.lastChild.previousSibling);
                    viewCarousel.insertBefore(itemsArray[index - 1], viewCarousel.firstChild.nextSibling);
                    index--;
                }
            }

            return button;
        };

        var createCarouselWrapper = function() {
            var carouselWrapper = document.createElement('div');

            carouselWrapper.classList.add('Carousel');

            return carouselWrapper;
        };

        var setCarouselView = function(carouselItems) {
            var width = 100 / (itemsPerSlide + 1);

            _setItemsWrapper(carouselItems);
            _setView(carouselItems);

            itemsArray.forEach(function(article) {
                article.style = "width:" + width + "%; box-sizing: border-box;";
            });

            return carouselItems;
        };

        var _setView = function(carouselItems) {
            var nextItem;

            for (var i = 1, item = carouselItems.firstChild; i <= itemsPerSlide; i++) {
                item = item.nextSibling;
            }

            while (item) {
                nextItem = item.nextSibling;
                carouselItems.removeChild(item);
                item = nextItem;
            }
        };

        var _setItemsWrapper = function(carouselItems) {
            itemsArray = Array.prototype.slice.call(carouselItems.childNodes);
            viewCarousel = carouselItems;
        };

        var setCssForItemsWrapper = function(itemsWrapper) {
            itemsWrapper.classList.add("CarouselItems");
            return itemsWrapper;
        };


        return {
            createSliderButton: createSliderButton,
            createCarouselWrapper: createCarouselWrapper,
            setCarouselView: setCarouselView,
            setCssForItemsWrapper: setCssForItemsWrapper
        };
    }

    App.ArticleCarousel = ArticleCarousel();

})();