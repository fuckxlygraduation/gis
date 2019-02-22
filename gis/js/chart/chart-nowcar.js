$(function () {

    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });

    function activeLastPointToolip(chart) {
        var points = chart.series[0].points;
        chart.tooltip.refresh(points[points.length - 1]);
    }

    $('#chart-nowcar').highcharts({
        chart: {
            type: 'spline',
            backgroundColor: '',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: function () {
                    // set up the updating of the chart each second
                    var series = this.series[0],
                        chart = this,
                        i = 0,
                        ydata = new Array(2.0, 3.0, 3.0, 2.0, 3.0, 3.0, 2.0, 3.0, 3.0, 2.0, 3.0, 3.0, 2.0, 3.0, 3.0, 2.0, 3.0, 3.0, 2.0, 3.0, 3.0, 2.0, 3.0, 3.0, 2.0, 3.0, 3.0, 2.0, 3.0, 3.0, 2.0, 3.0, 3.0, 2.0, 3.0, 3.0, 2.0, 3.0, 3.0, 2.0, 3.0, 3.0, 2.0, 3.0, 3.0, 2.0, 3.0, 3.0, 2.0, 3.0, 3.0, 2.0, 3.0, 3.0, 2.0, 3.0, 3.0, 2.0, 3.0, 3.0, 2.0, 3.0, 3.0, 2.0, 3.0, 3.0, 2.0, 3.0, 3.0, 2.0, 3.0, 3.0, 2.0, 3.0, 3.0, 2.0, 3.0, 3.0, 2.0, 3.0, 3.0, 2.0, 3.0, 3.0, 2.0, 3.0, 3.0, 2.0, 3.0, 3.0, 2.0, 3.0, 3.0, 2.0, 3.0, 3.0, 2.0, 3.0, 3.0, 2.0, 3.0);

                    setInterval(function () {
                        var x = (new Date()).getTime(), // current time
                            y = ydata[i];
                        i = (i + 1) % 50;
                        series.addPoint([x, y], true, true);
                        activeLastPointToolip(chart)
                    }, 1000);
                }
            }
        },
        title: {
            text: '目标实时数据',
            style: {"color": "white", "fontSize": "0px"}
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },
        yAxis: {
            title: {
                text: '船舶数量（只）'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '数量',
            data: (function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;
                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: 0
                    })
                    ;
                }
                return data;
            }())
        }]
    }, function (c) {
        activeLastPointToolip(c)
    });
})