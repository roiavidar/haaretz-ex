// change to module pattern!

(function() {

    var itemsPerSlide = 3,
        viewCarousel,
        itemsWrapper,
        index = 0;

    App.createSliderButton = function(side, data, wrapper, itemsWrapper) {
        var button = document.createElement('button');

        if (side === "left") {
            button.textContent = "<";
            button.addEventListener('click', moveCarouselLeft);
        }
        else {
            button.textContent = ">";
            button.addEventListener('click', moveCarouselRight);
        }

        function moveCarouselLeft() {
            if(index + itemsPerSlide < itemsWrapper.length) {
                viewCarousel.removeChild(viewCarousel.firstChild);
                viewCarousel.appendChild(itemsWrapper.childNodes[index + itemsPerSlide]);
            }
        }

        function moveCarouselRight() {
            if(index > 0) {
                viewCarousel.removeChild(viewCarousel.lastChild);
                viewCarousel.insertBefore(itemsWrapper[index-1], viewCarousel.firstChild);
            }
        }

        return button;
    };

    App.createCarouselWrapper = function() {
        var carouselWrapper = document.createElement('div');

        carouselWrapper.classList.add('Carousel');

        return carouselWrapper;
    };

    App.createCarouselItemsWrapper = function() {
        var carouselItemsWrapper = document.createElement('div');

        carouselItemsWrapper.classList.add('Carousel-items');

        return carouselItemsWrapper;
    };

    App.resizeItems = function(carouselItems) {
        var width = 100 / itemsPerSlide;
        var carouselItemsArr = Array.prototype.splice.call(carouselItems.childNodes);
    
        carouselItemsArr.childNodes.forEach(function(article) {
            article.style = "width:" + width + "px; box-sizing: border-box;";
        });
    };

})();