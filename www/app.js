// This is a JavaScript file
require([

    "esri/WebMap",

    "esri/views/MapView",

    "dojo/domReady!"

], function(WebMap, MapView) {

    var map = new WebMap({

        portalItem: {

            id: "33b1033fe2d5415482f8d72d939978ec"  // Web マップのアイテム ID を指定

        }

    });

        

    var view = new MapView({

        container: "viewDiv",  // ビューを表示する DOM ノードへの参照

        map: map  // 「マップの作成」のステップで作成した WebMap オブジェクト

    });

    

    ons.ready(function() {

        document.addEventListener('postchange', function (event) {

            if (event.index === 0) {

                map.basemap = "streets"  // 背景地図を道路地図に変更

            } else if (event.index === 1) {

                map.basemap = "satellite"  // 背景地図を衛星画像に変更

            } else {

                map.basemap = "osm"  // 背景地図をオープンストリートマップに変更

            }

        });

    });

    

});
