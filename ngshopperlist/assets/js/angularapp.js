(function () {
    var myapp = angular.module("myapp", []);

    myapp.factory('products', ['$http', function ($http) {
        var o = {};
        o.products = [];
        o.getProducts = getProductsInfo;

        ////////////////
        function getProductsInfo() {
            $http.get("test.json")
                .success(function (data) {
                    angular.copy(data.ProductsList, o.products);
                    console.log('fetched data');
                });
        }

        return o;
    }]);

    myapp.controller('mainCtrl', function (products) {
        products.getProducts();
        this.products = products.products;
        this.heroDisplayObj = false;
        this.toggleHeroObj = toggleHeroObj;
        this.addToCart = addToCart;


        ///////////////////////////
        function toggleHeroObj(obj) {
            this.heroDisplayObj = obj;
        }

        function addToCart(price) {
            alert("The price of the item is : $ " + price);
        }

    })

    myapp.filter('features', function () {
        return function (arr, ul) {
            var count = 0;
            var a = [];
            for (var i = parseInt(ul); count < 3; i += 1) {
                if (arr[i].Value == "Yes") {
                    a.push(arr[i].Key);
                    count += 1;
                }
            }
            return a;
        }
    })

})();

