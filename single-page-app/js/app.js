'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('index-page', 'index-page.html', true),    
            new Route('page-1', 'page-1.html'),            
            new Route('page-2', 'page-2.html')
        ]);
    }
    init();
}());
