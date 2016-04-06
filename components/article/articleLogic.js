(function() {
    App.createArticle = function(data) {
        var figure = document.createElement('figure');
        figure.classList.add('Article');
        
        var figCaption = document.createElement('figcaption');
        var img = document.createElement('img');
        img.src = data.link;
        img.classList.add('Article-img');

        var headLine = document.createElement('h1');
        headLine.textContent = data.title;
        headLine.classList.add('Article-title');


        var author = document.createElement('author');
        author.textContent = data.name;
        author.classList.add('Article-author');

        figCaption.appendChild(headLine);
        figCaption.appendChild(author);

        figure.appendChild(img);
        figure.appendChild(figCaption);

        return figure;
    }
})();