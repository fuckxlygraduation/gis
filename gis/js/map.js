
$(function(){


    initMap();





})
//地图界面高度设置



//加载地图
function initMap(){
// 百度地图API功能
    var map = new BMap.Map("map_div");    // 创建Map实例
    map.centerAndZoom(new BMap.Point(122.400, 30.900), 9);  // 初始化地图,设置中心点坐标和地图级别
    //添加地图类型控件
    var size1 = new BMap.Size(10, 50);
    map.addControl(new BMap.MapTypeControl({
        offset: size1,
        mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP,

        ]}));
    // 编写自定义函数,创建标注
    function addMarker(point){
        var marker = new BMap.Marker(point);
        map.addOverlay(marker);
    }
    // 随机向地图添加25个标注
    // var bounds = map.getBounds();
    // var sw = bounds.getSouthWest();
    // var ne = bounds.getNorthEast();
    // var lngSpan = Math.abs(sw.lng - ne.lng);
    // var latSpan = Math.abs(ne.lat - sw.lat);
    // for (var i = 0; i < 25; i ++) {
    //     var point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
    //     addMarker(point);
    // };

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
    //设备地图颜色
    var mapStyle={
        style:"midnight"
    };
    map.setMapStyle(mapStyle);

    map.setMapType(BMAP_HYBRID_MAP);//在某个时刻,得到map对象,调用api设置为混合地图




//加载城市控件
    var size = new BMap.Size(10, 50);
    map.addControl(new BMap.CityListControl({
        anchor: BMAP_ANCHOR_TOP_LEFT,
        offset: size,


    }));
}

