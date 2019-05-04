/**
 * Created by 30947 on 2018/7/20.
 */
var map = new BMap.Map("map_box");    // 创建Map实例
$(function () {
    getHt();
    initMap();
    mapActive();
    char1();
    page();
    mapRestList();
    rightChange();
})



function add_point() {

    if (!$("#renyuan").prop("checked")) {
        deletePoint()
    } else {

        // 随机向地图添加25个标注
        var bounds = map.getBounds();
        var sw = bounds.getSouthWest();
        var ne = bounds.getNorthEast();
        var lngSpan = Math.abs(sw.lng - ne.lng);
        var latSpan = Math.abs(ne.lat - sw.lat);
        for (var i = 0; i < 10; i++) {
            var point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
            var label = new BMap.Label(i);
            addMarker(point,label);
        }
    }
}

// 编写自定义函数,创建标注
function addMarker(point) {
    var marker = new BMap.Marker(point);
    map.addOverlay(marker);
}
function addMarker(point,label){
    var marker = new BMap.Marker(point);
    map.addOverlay(marker);
    marker.setLabel(label);
}

function deletePoint(){
    var allOverlay = map.getOverlays();
    alert(allOverlay.length -1)
    var j =0;
    for (var i = 0; i < allOverlay.length -1; i++) {
        // alert(allOverlay[i]._hasPointLabels)
        if (allOverlay[i]._hasPointLabels != null){
            alert(allOverlay[i].getLabel().content)
            if (allOverlay[i].getLabel().content = j++) {
                map.removeOverlay(allOverlay[i]);

            }
    }
}
}

//控制标注显示
function setter(flag) {
    this.flag = flag;
}
//获取div的高度
function getHt() {
    var all_height = $(window).height();
    var div_height = all_height - 84;
    $("#car_control").css("height", div_height + "px");


}



//加载地图
function initMap() {

// 百度地图API功能

    map.centerAndZoom(new BMap.Point(122.400, 30.900), 9);  // 初始化地图,设置中心点坐标和地图级别
    //添加地图类型控件
    var size1 = new BMap.Size(10, 50);
    map.addControl(new BMap.MapTypeControl({
        offset: size1,
        mapTypes: [
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP,

        ]
    }));


    // 启用滚轮放大缩小
    map.enableScrollWheelZoom();

    //添加地面叠加层
    // 西南角和东北角
    // var SW = new BMap.Point(19.926544,-34.864315);
    // var NE = new BMap.Point(165.099614,62.477103);
    //
    // groundOverlayOptions = {
    //     opacity: 1,
    //     displayOnMinLevel: 1,
    //     displayOnMaxLevel: 14
    // }
    // // 初始化GroundOverlay
    // var groundOverlay = new BMap.GroundOverlay(new BMap.Bounds(SW, NE), groundOverlayOptions);
    //
    // // 设置GroundOverlay的图片地址
    // groundOverlay.setImageURL('img/部分抠图1.png');
    //
    // map.addOverlay(groundOverlay);

    // function addGroundOverlay() {
    //     // 添加GroundOverlay
    //     map.addOverlay(groundOverlay);
    // }
    //
    // function removeGroundOverlay() {
    //     // 移除GroundOverlay
    //     map.removeOverlay(groundOverlay);
    // }

    function addMarker6(point, image) {  // 创建图标对象
        var myIcon = new BMap.Icon(image, new BMap.Size(23, 25), {
            // 指定定位位置。
            // 当标注显示在地图上时，其所指向的地理位置距离图标左上
            // 角各偏移10像素和25像素。您可以看到在本例中该位置即是
            // 图标中央下端的尖角位置。
            anchor: new BMap.Size(10, 25),
            // 设置图片偏移。
            // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您
            // 需要指定大图的偏移位置，此做法与css sprites技术类似。
            imageOffset: new BMap.Size(0, 0 - 0 * 25)   // 设置图片偏移
        });
        // 创建标注对象并添加到地图
        var marker = new BMap.Marker(point, {icon: myIcon});
        map.addOverlay(marker);
    }





    var point2 = new Array(
        new BMap.Point(121.9290161133, 31.1329014011),
        new BMap.Point(121.9757080078, 31.0576398141),
        new BMap.Point(122.1624755859, 31.0376384361),
        new BMap.Point(122.0251464844, 30.8114491306),
        new BMap.Point(122.4261474609, 30.9034030434),
        new BMap.Point(121.7079162598, 30.7276708950),
        new BMap.Point(121.9180297852, 30.4794499966),
        new BMap.Point(123.1951904297, 30.4865508426),
        new BMap.Point(123.1677246094, 31.1423049058),
        new BMap.Point(123.3764648438, 30.3586564208),
        new BMap.Point(122.9040527344, 31.9428399729)
    );
    for (var i = 0; i < 10; i++) {
        //var point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
        addMarker6(point2[i], "img/boat.png");
    }

    var point3 = new Array(
        new BMap.Point(121.486561, 31.239022),
        new BMap.Point(121.810813, 31.136212),
        new BMap.Point(121.870605, 31.017445),
        new BMap.Point(121.797015, 30.981786),
        new BMap.Point(121.930396, 31.513287),
        new BMap.Point(121.401474, 31.296309),
        new BMap.Point(121.343982, 30.209871),
        new BMap.Point(121.573948, 32.057422),
        new BMap.Point(120.631087, 31.377242),
        new BMap.Point(120.631087, 31.377242),
        new BMap.Point(120.290737, 30.397451)
    );
    for (var i = 0; i < 10; i++) {
        //var point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
        addMarker6(point3[i], "img/observation.png");
    }

    var point4 = new Array(
        new BMap.Point(121.983288, 31.621585),
        new BMap.Point(121.983288, 31.393025),
        new BMap.Point(122.052278, 31.03725),
        new BMap.Point(121.849908, 30.747686),
        new BMap.Point(121.449767, 30.528938),
        new BMap.Point(121.652137, 30.321664),
        new BMap.Point(121.652137, 30.321664),
        new BMap.Point(122.424823, 30.965933),
        new BMap.Point(122.843362, 30.461225),
        new BMap.Point(122.691584, 30.053945),
        new BMap.Point(122.608796, 31.959442)
    );
    for (var i = 0; i < 10; i++) {
        //var point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
        addMarker6(point4[i], "img/buoy.png");
    }


    map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    ////设备地图颜色
    //var mapStyle={
    //    style:"midnight"
    //};
    //map.setMapStyle(mapStyle);

    map.setMapType(BMAP_HYBRID_MAP);//在某个时刻,得到map对象,调用api设置为混合地图

    //添加自定义图层
    // var tileLayer = new BMap.TileLayer({isTransparentPng: true});
    // tileLayer.getTilesUrl = function(tileCoord, zoom) {
    //     var x = 122.307501;
    //     var y = 31.36466;
    //     return 'img/temperature.png';  //根据当前坐标，选取合适的瓦片图
    // }
    //
    // var copyCtrl = new BMap.CopyrightControl({anchor: BMAP_ANCHOR_BOTTOM_RIGHT});
    // copyCtrl.addCopyright({id: 1, content: "版权说明：清华校园图片取自互联网"});
    // map.addControl(copyCtrl);
    // map.addTileLayer(tileLayer);


    //自定义覆盖区域
    /*
    function addpolyline() {
        var polyline = new BMap.Polyline([
            new BMap.Point(116.399, 39.910),
            new BMap.Point(116.405, 39.920),
            new BMap.Point(116.425, 39.900)
        ], {strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5});   //创建折线
        map.addOverlay(polyline);          //增加折线
    }

    function addpolygon() {
        var polygon = new BMap.Polygon([
            new BMap.Point(122.139665, 34.15533),
            new BMap.Point(120.870252, 33.263528),
            new BMap.Point(121.1352539063, 32.6393748736),
            new BMap.Point(121.5527343750, 32.3521228120)
        ], {strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5, fillColor: "blue", fillColorOpacity: 0.8});  //创建多边形
        map.addOverlay(polygon);           //增加多边形

        var opts = {
            position: new BMap.Point(120.870252, 33.263528),    // 指定文本标注所在的地理位置
            offset: new BMap.Size(30, -30)    //设置文本偏移量
        }
        var label = new BMap.Label("叶绿素含量：2.0", opts);  // 创建文本标注对象
        label.setStyle({
            color: "black",
            fontSize: "20px",
            height: "0px",
            lineHeight: "0px",
            fontFamily: "微软雅黑"
        });
        map.addOverlay(label);
    }

    addpolygon();


    function addpolygon2() {
        var polygon = new BMap.Polygon([
            new BMap.Point(120.741471, 36.119875),
            new BMap.Point(119.288084, 34.871105),
            new BMap.Point(120.281538, 34.338671),
            new BMap.Point(120.870252, 33.263528),
            new BMap.Point(122.139665, 34.15533),
            new BMap.Point(122.213254, 35.475366),
        ], {strokeColor: "red", strokeWeight: 2, strokeOpacity: 0.5, fillColor: "red", fillColorOpacity: 0.6});  //创建多边形
        map.addOverlay(polygon);           //增加多边形

        var opts = {
            position: new BMap.Point(120.281538, 34.338671),    // 指定文本标注所在的地理位置
            offset: new BMap.Size(30, -30)    //设置文本偏移量
        }
        var label = new BMap.Label("叶绿素含量：2.5", opts);  // 创建文本标注对象
        label.setStyle({
            color: "black",
            fontSize: "20px",
            height: "0px",
            lineHeight: "0px",
            fontFamily: "微软雅黑"
        });
        map.addOverlay(label);
    }

    addpolygon2();

    function addpolygon3() {
        var polygon = new BMap.Polygon([
            new BMap.Point(122.213254, 35.475366),
            new BMap.Point(122.139665, 34.15533),
            new BMap.Point(121.5527343750, 32.3521228120),
            new BMap.Point(121.477362, 32.159209),
            new BMap.Point(121.863706, 32.033916),
            new BMap.Point(124.181765, 35.955503),
        ], {strokeColor: "yellow", strokeWeight: 2, strokeOpacity: 0.5, fillColor: "yellow", fillColorOpacity: 0.2});  //创建多边形
        map.addOverlay(polygon);           //增加多边形

        var opts = {
            position: new BMap.Point(122.139665, 34.15533),    // 指定文本标注所在的地理位置
            offset: new BMap.Size(30, -30)    //设置文本偏移量
        }
        var label = new BMap.Label("叶绿素含量：1.0", opts);  // 创建文本标注对象
        label.setStyle({
            color: "black",
            fontSize: "20px",
            height: "0px",
            lineHeight: "0px",
            fontFamily: "微软雅黑"
        });
        map.addOverlay(label);
    }

    addpolygon3();

    function addpolygon4() {
        var polygon = new BMap.Polygon([
            new BMap.Point(122.415625, 36.803487),
            new BMap.Point(120.741471, 36.119875),
            new BMap.Point(122.213254, 35.475366),
            new BMap.Point(124.181765, 35.955503)
        ], {strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5, fillColor: "green", fillColorOpacity: 0.4});  //创建多边形
        map.addOverlay(polygon);           //增加多边形

        var opts = {
            position: new BMap.Point(120.741471, 36.119875),    // 指定文本标注所在的地理位置
            offset: new BMap.Size(30, -30)    //设置文本偏移量
        }
        var label = new BMap.Label("叶绿素含量：1.5", opts);  // 创建文本标注对象
        label.setStyle({
            color: "black",
            fontSize: "20px",
            height: "0px",
            lineHeight: "0px",
            fontFamily: "微软雅黑"
        });
        map.addOverlay(label);
    }

    addpolygon4();
    */

//加载城市控件
    var size = new BMap.Size(10, 50);
    map.addControl(new BMap.CityListControl({
        anchor: BMAP_ANCHOR_TOP_LEFT,
        offset: size,


    }));

}

//工具条点击效果
function mapActive() {
    $(".map_top>ul>li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(this).find("a").addClass("active");
        $(this).find("a").parents("li").siblings().find("a").removeClass("active");
    })
}

//统计分析图
function char1() {

    var myChart = echarts.init($("#char1")[0]);

    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'right',
            textStyle: {
                color: '#ffffff',

            },
            data: ['民用', '军用', '行政', '未知']
        },

        calculable: false,
        series: [
            {
                name: '目标类型',
                type: 'pie',
                radius: ['40%', '70%'],
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    emphasis: {
                        label: {
                            show: true,
                            position: 'center',
                            textStyle: {
                                fontSize: '20',
                                fontWeight: 'bold'
                            }
                        }
                    }
                },
                data: [
                    {value: 335, name: '民用'},
                    {value: 310, name: '军用'},
                    {value: 234, name: '行政'},
                    {value: 135, name: '未知'}

                ]
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    })

}

function page() {
    $("#page").Page({
        totalPages: 9,//分页总数
        liNums: 1,//分页的数字按钮数(建议取奇数)
        activeClass: 'activP', //active 类样式定义
        callBack: function (page) {
            //console.log(page)
        }
    });
}

//专题图点击
function mapRestList() {
    $(".map_work>ul>li").click(function () {
        $(".map_work>ul").hide();
        $(".map_resList").show();
    })
}

//返回
function back() {
    $(".map_work>ul").show();
    $(".map_resList").hide();
}

//右侧功能界面切换
function rightChange() {
    $(".map_right_top>ul>li").click(function () {
        var ins = $(this).index();
        $(this).addClass("li_active").siblings().removeClass("li_active");
        $(".map_con .map_con_div").eq(ins).show().siblings().hide();
    })
}