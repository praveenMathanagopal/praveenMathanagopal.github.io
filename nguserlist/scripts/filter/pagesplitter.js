/**
 * Created by Praveen on 7/6/2015.
 */
(function IIFE() {
    angular.module('userapp')
        .filter('pagesplitter', pageSplitter);

    function pageSplitter() {
        return splitter;

        /////////////////////
        function splitter(arr, pageno) {
            var final = [];
            var start = pageno * 14;
            var end = start + 13;

            for (var i = start; i <= end; i++) {
                if (arr[i])
                    final.push(arr[i]);
            }
            return final;
        }
    }
})();