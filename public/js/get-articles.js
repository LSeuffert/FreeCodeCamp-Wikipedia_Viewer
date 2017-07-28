var printArticle = function (element) {
    return `<div class="article"><h2>${element.title}</h2><p>${element.snippet}</p></div>`;
};

var listArticles = function (json) {
    $('.results').html('');
    json.query.search.forEach(function (element) {
        $('.results').append(printArticle(element));
    });
};

$('#article-search').submit(function (event) {
    event.preventDefault();
    $.ajax({
        url: 'https://en.wikipedia.org/w/api.php',
        data: { 
            action: 'query',
            list: 'search',
            srsearch: $('#article-search input').val(),
            format: 'json',
            srlimit: 5
        },
        dataType: 'jsonp',
        success: listArticles
    });
});