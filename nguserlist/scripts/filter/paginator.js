/**
 * Created by Praveen on 7/6/2015.
 */
(function IIFE() {
    angular.module("userapp")
        .filter('paginator', paginator);


    function paginator() {
        return pageFilter;

        //////////////////////////////////
        function pageFilter(arr) {
            var final = [];
            console.log("paginator:"+arr.length);
            var pages = arr.length / 14;
            if (arr.length % 14 != 0)
                pages++;
            for (var i = 1; i <= pages; i++)
                final.push(i);
            return final;

        }
    }

})();