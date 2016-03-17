/**
 * Created by Samuel on 1/12/2016.
 */

mainApp.controller("SeminarController", ["$scope", "$http", function ($scope, $http) {

    $scope.imgsRoot = "/resources/imgs/"

    $scope.infoTitle = "主僕疏效平簡介";

    $scope.infoText = "一九五四年出生於台灣，一九九一年六月二十九日在聖神內領洗，感主厚恩，為愛祂獻上一生，單單為祂而活。" +
        "一九九七年蒙主召叫，" +
        "跟隨祂奔走於美國、加拿大、臺灣、馬來西亞、新加坡、汶萊、羅馬、德國、澳洲、香港、中國…等地，為主見證、傳主福音。" +
        "如果您要邀請主僕疏效平為您的團體服務，請按這裡。";

    $scope.icon = 'info_outline';

    function getData(name, url, scope) {
        var trys = 3 + 1;

        function actualMethod() {
            $http({
                method: 'GET',
                url: url
            }).then(function (response) {

                $scope[scope] = response.data;

                console.info('[ ' + name + ' ]', response.data);

            }, function (response) {

                console.log(response);

                if (trys != 0) {
                    getPastSeminars();

                    console.warn('[ ' + name + ' ] Try ' + (5 - trys) + ' to get data failed... attempting ' + trys + ' more times');

                    trys--;
                } else {
                    console.warn('[ ' + name + ' ] All tries failed... either your connection is unstable or it\'s our fault <br/>If so, please contact us');
                }
            });
        }

        actualMethod();
    }

    getData('Past Seminars', '/mobile/json/seminars/past', 'pastSeminars');

    getData('Future Seminars', '/mobile/json/seminars/coming', 'comingSeminars');

    (function() {
        var tabs = document.querySelector('.mdl-tabs__tab-bar').children;
        var tabsLength = tabs.length;

        for (var i = 0; i < tabsLength; i++) {
            tabs[i].addEventListener('click', function() {
                var title = this.getAttribute('data-title');

                document.querySelector('#title').innerText = title;
                document.querySelector('#header-title').innerText = title;
            });
        }
    }());

    $scope.open = function(page) {
        globalFrame.open("/mobile/seminar/info.html?path=" + page);
    };

}]).directive('seminarInfoText', function () {
    return {
        restrict: 'E',
        templateUrl: '/resources/templates/seminar-info-text.html'
    };
}).directive('seminarComingSeminars', function () {
    return {
        restrict: 'E',
        templateUrl: '/resources/templates/coming-seminars.html'
    };
}).directive('seminarPastSeminars', function () {
    return {
        restrict: 'E',
        templateUrl: '/resources/templates/past-seminars.html'
    };
});

window.onload = function () {
    var mainContent = document.querySelector('.mdl-layout__content');

    setTimeout(function () {
        componentHandler.upgradeElement(document.getElementById('seminar-info-button'));
    }, 250);

    var topFab = document.getElementById('top-fab');

    mainContent.addEventListener('scroll', function () {
        if (this.scrollTop >= 150)
            topFab.classList.add('active');
        else
            topFab.classList.remove('active');
    });

    function openSeminar() {
        console.log('test');
    }

    window.openSeminar = openSeminar;

    topFab.addEventListener('click', function () {
        mainContent.scrollTop = 0;
    });
};