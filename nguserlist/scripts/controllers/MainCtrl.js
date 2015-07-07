/**
 * Created by Praveen on 7/6/2015.
 */

(function IIFE() {

    angular.module("userapp")
        .controller('MainCtrl', ['DataBank', mainController]);


    function mainController(DataBank) {
        var main = this;
        this.userData = null;
        //fetch the data from the factory
        DataBank.getData();
        this.userData = DataBank.userData;

        this.setCurrent = setCurrent;
        this.setPage = setPage;
        this.setPage(0);


        ////////////////////////////////////
        function setCurrent(user) {
            this.current = user;
        }

        function setPage(pageno) {
            this.pageno = pageno;
            console.log(pageno);
        }

    }
})();