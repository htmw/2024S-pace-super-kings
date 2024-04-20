

(function ($) {
  /* "use strict" */

  var dlabChartlist = function () {

    var screenWidth = $(window).width();

    var donutChart1 = function () {
      $("span.donut1").peity("donut", {
        width: "100",
        height: "100"
      });
    }

    var widgetChart1 = function () {
      var options = {
        series: [
          {
            name: 'Net Profit',
            data: [200, 310, 50, 250, 50, 300, 100, 200, 100, 400],
            /* radius: 30,	 */
          },
        ],
        chart: {
          type: 'line',
          height: 70,
          width: 500,
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false
          },
          sparkline: {
            enabled: true
          }

        },

        //colors:['var(--primary)'],
        dataLabels: {
          enabled: false,
        },

        legend: {
          show: false,
        },
        stroke: {
          show: true,
          width: 6,
          curve: 'smooth',
          colors: ['rgba(163, 199, 241, 1)'],
        },

        grid: {
          show: false,
          borderColor: '#eee',
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: -1

          }
        },
        states: {
          normal: {
            filter: {
              type: 'none',
              value: 0
            }
          },
          hover: {
            filter: {
              type: 'none',
              value: 0
            }
          },
          active: {
            allowMultipleDataPointsSelection: false,
            filter: {
              type: 'none',
              value: 0
            }
          }
        },
        xaxis: {
          categories: ['Jan', 'feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August', 'Sept', 'Oct'],
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false,
            style: {
              fontSize: '12px',
            }
          },
          crosshairs: {
            show: false,
            position: 'front',
            stroke: {
              width: 1,
              dashArray: 3
            }
          },
          tooltip: {
            enabled: true,
            formatter: undefined,
            offsetY: 0,
            style: {
              fontSize: '12px',
            }
          }
        },
        yaxis: {
          show: false,
        },
        tooltip: {
          enabled: false,
          style: {
            fontSize: '12px',
          },
          y: {
            formatter: function (val) {
              return "$" + val + " thousands"
            }
          }
        }
      };
      var chartBar1 = new ApexCharts(document.querySelector("#widgetChart1"), options);
      chartBar1.render();

    }
    var widgetChart5 = function () {
      if (jQuery("#widgetChart5").length > 0) {
      var options = {
        series: [
          {
            name: 'Net Profit',
            data: [200, 310, 50, 250, 50, 300, 100, 200, 100, 400],
            /* radius: 30,	 */
          },
        ],
        chart: {
          type: 'line',
          height: 70,
          width: 500,
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false
          },
          sparkline: {
            enabled: true
          }

        },

        //colors:['var(--primary)'],
        dataLabels: {
          enabled: false,
        },

        legend: {
          show: false,
        },
        stroke: {
          show: true,
          width: 6,
          curve: 'smooth',
          colors: ['rgba(163, 199, 241, 1)'],
        },

        grid: {
          show: false,
          borderColor: '#eee',
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: -1

          }
        },
        states: {
          normal: {
            filter: {
              type: 'none',
              value: 0
            }
          },
          hover: {
            filter: {
              type: 'none',
              value: 0
            }
          },
          active: {
            allowMultipleDataPointsSelection: false,
            filter: {
              type: 'none',
              value: 0
            }
          }
        },
        xaxis: {
          categories: ['Jan', 'feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August', 'Sept', 'Oct'],
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false,
            style: {
              fontSize: '12px',
            }
          },
          crosshairs: {
            show: false,
            position: 'front',
            stroke: {
              width: 1,
              dashArray: 3
            }
          },
          tooltip: {
            enabled: true,
            formatter: undefined,
            offsetY: 0,
            style: {
              fontSize: '12px',
            }
          }
        },
        yaxis: {
          show: false,
        },
        tooltip: {
          enabled: false,
          style: {
            fontSize: '12px',
          },
          y: {
            formatter: function (val) {
              return "$" + val + " thousands"
            }
          }
        }
      };
      var chartBar5 = new ApexCharts(document.querySelector("#widgetChart5"), options);
      chartBar5.render();

    }

    }


    var widgetChart2 = function () {
      var options = {
        series: [
          {
            name: 'Net Profit',
            data: [200, 300, 200, 250, 200, 240, 180, 230, 200, 250, 200],
            /* radius: 30,	 */
          },
        ],
        chart: {
          type: 'line',
          height: 70,
          width: 500,
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false
          },
          sparkline: {
            enabled: true
          }

        },

        colors: ['var(--primary)'],
        dataLabels: {
          enabled: false,
        },

        legend: {
          show: false,
        },
        stroke: {
          show: true,
          width: 6,
          curve: 'smooth',
          colors: ['rgba(148, 150, 176, 1)'],
        },

        grid: {
          show: false,
          borderColor: '#eee',
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0

          }
        },
        states: {
          normal: {
            filter: {
              type: 'none',
              value: 0
            }
          },
          hover: {
            filter: {
              type: 'none',
              value: 0
            }
          },
          active: {
            allowMultipleDataPointsSelection: false,
            filter: {
              type: 'none',
              value: 0
            }
          }
        },
        xaxis: {
          categories: ['Jan', 'feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August', 'Sept', 'Oct'],
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false,
            style: {
              fontSize: '12px',
            }
          },
          crosshairs: {
            show: false,
            position: 'front',
            stroke: {
              width: 1,
              dashArray: 3
            }
          },
          tooltip: {
            enabled: true,
            formatter: undefined,
            offsetY: 0,
            style: {
              fontSize: '12px',
            }
          }
        },
        yaxis: {
          show: false,
        },

        tooltip: {
          enabled: false,
          style: {
            fontSize: '12px',
          },
          y: {
            formatter: function (val) {
              return "$" + val + " thousands"
            }
          }
        }
      };

      var chartBar1 = new ApexCharts(document.querySelector("#widgetChart2"), options);
      chartBar1.render();

    }

    var widgetChart3 = function () {
      var options = {
        series: [
          {
            name: 'Net Profit',
            data: [100, 300, 200, 250, 200, 240, 180, 230, 200, 250, 300],
            /* radius: 30,	 */
          },
        ],
        chart: {
          type: 'line',
          height: 70,
          width: 500,
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false
          },
          sparkline: {
            enabled: true
          }

        },

        //colors:['var(--primary)'],
        dataLabels: {
          enabled: false,
        },

        legend: {
          show: false,
        },
        stroke: {
          show: true,
          width: 6,
          curve: 'smooth',
          colors: ['rgba(247, 215, 168, 1)'],
        },

        grid: {
          show: false,
          borderColor: '#eee',
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: -1

          }
        },
        states: {
          normal: {
            filter: {
              type: 'none',
              value: 0
            }
          },
          hover: {
            filter: {
              type: 'none',
              value: 0
            }
          },
          active: {
            allowMultipleDataPointsSelection: false,
            filter: {
              type: 'none',
              value: 0
            }
          }
        },
        xaxis: {
          categories: ['Jan', 'feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August', 'Sept', 'Oct'],
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false,
            style: {
              fontSize: '12px',
            }
          },
          crosshairs: {
            show: false,
            position: 'front',
            stroke: {
              width: 1,
              dashArray: 3
            }
          },
          tooltip: {
            enabled: true,
            formatter: undefined,
            offsetY: 0,
            style: {
              fontSize: '12px',
            }
          }
        },
        yaxis: {
          show: false,
        },
        tooltip: {
          enabled: false,
          style: {
            fontSize: '12px',
          },
          y: {
            formatter: function (val) {
              return "$" + val + " thousands"
            }
          }
        }
      };

      var chartBar1 = new ApexCharts(document.querySelector("#widgetChart3"), options);
      chartBar1.render();

    }

    var widgetChart4 = function () {
      var options = {
        series: [
          {
            name: 'Net Profit',
            data: [200, 310, 50, 250, 50, 300, 100, 200,],
            /* radius: 30,	 */
          },
        ],
        chart: {
          type: 'line',
          height: 70,
          width: 450,
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false
          },
          sparkline: {
            enabled: true
          }

        },

        //colors:['var(--primary)'],
        dataLabels: {
          enabled: false,
        },

        legend: {
          show: false,
        },
        stroke: {
          show: true,
          width: 6,
          curve: 'smooth',
          colors: ['rgba(229, 159, 241, 1)'],
        },

        grid: {
          show: false,
          borderColor: '#eee',
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: -1

          }
        },
        states: {
          normal: {
            filter: {
              type: 'none',
              value: 0
            }
          },
          hover: {
            filter: {
              type: 'none',
              value: 0
            }
          },
          active: {
            allowMultipleDataPointsSelection: false,
            filter: {
              type: 'none',
              value: 0
            }
          }
        },
        xaxis: {
          categories: ['Jan', 'feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August', 'Sept', 'Oct'],
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false,
            style: {
              fontSize: '12px',
            }
          },
          crosshairs: {
            show: false,
            position: 'front',
            stroke: {
              width: 1,
              dashArray: 3
            }
          },
          tooltip: {
            enabled: true,
            formatter: undefined,
            offsetY: 0,
            style: {
              fontSize: '12px',
            }
          }
        },
        yaxis: {
          show: false,
        },
        tooltip: {
          enabled: false,
          style: {
            fontSize: '12px',
          },
          y: {
            formatter: function (val) {
              return "$" + val + " thousands"
            }
          }
        }
      };

      var chartBar1 = new ApexCharts(document.querySelector("#widgetChart4"), options);
      chartBar1.render();

    }
    var widgetChart6 = function () {
      if (jQuery("#widgetChart6").length > 0) {
      var options = {
        series: [
          {
            name: 'Net Profit',
            data: [200, 310, 50, 250, 50, 300, 100, 200,],
            /* radius: 30,	 */
          },
        ],
        chart: {
          type: 'line',
          height: 70,
          width: 450,
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false
          },
          sparkline: {
            enabled: true
          }

        },

        //colors:['var(--primary)'],
        dataLabels: {
          enabled: false,
        },

        legend: {
          show: false,
        },
        stroke: {
          show: true,
          width: 6,
          curve: 'smooth',
          colors: ['rgba(229, 159, 241, 1)'],
        },

        grid: {
          show: false,
          borderColor: '#eee',
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: -1

          }
        },
        states: {
          normal: {
            filter: {
              type: 'none',
              value: 0
            }
          },
          hover: {
            filter: {
              type: 'none',
              value: 0
            }
          },
          active: {
            allowMultipleDataPointsSelection: false,
            filter: {
              type: 'none',
              value: 0
            }
          }
        },
        xaxis: {
          categories: ['Jan', 'feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August', 'Sept', 'Oct'],
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false,
            style: {
              fontSize: '12px',
            }
          },
          crosshairs: {
            show: false,
            position: 'front',
            stroke: {
              width: 1,
              dashArray: 3
            }
          },
          tooltip: {
            enabled: true,
            formatter: undefined,
            offsetY: 0,
            style: {
              fontSize: '12px',
            }
          }
        },
        yaxis: {
          show: false,
        },
        tooltip: {
          enabled: false,
          style: {
            fontSize: '12px',
          },
          y: {
            formatter: function (val) {
              return "$" + val + " thousands"
            }
          }
        }
      };

      var chartBar6 = new ApexCharts(document.querySelector("#widgetChart6"), options);
      chartBar6.render();

    }

    }
    var marketChart = function () {
      if (jQuery('#marketChart').length > 0) {
        var options = {
          series: [{
            name: '1 ETH',
            className: 'bg-primary',
            data: [10000, 25000, 15000, 5000, 8000, 7000, 6000, 5000, 10000, 4000]
          }, {
            name: '1 XRP',
            className: 'bg-secondary',
            data: [7000, 15000, 8000, 3000, 4000, 5000, 1000, 500, 8000, 2000]
          }],
          chart: {
            height: 300,
            type: 'line',
            toolbar: {
              show: false
            }
          },
          colors: ["var(--primary)", "var(--secondary)"],
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth',
            width: 6
          },
          legend: {
            show: false,

          },
          markers: {
            strokeWidth: 5,
            strokeColors: '#fff',
            hover: {
              size: 10,
            },
          },
          grid: {
            show: true,
            strokeDashArray: 6,
            borderColor: 'var(--border)',
            xaxis: {
              lines: {
                show: true
              },
            },
            yaxis: {
              lines: {
                show: false
              },
            },
          },
          yaxis: {
            show: false,
            labels: {
              style: {
                colors: 'var(--text)',
                fontSize: '12px',
                fontFamily: 'Poppins',
                fontWeight: 400

              },
              formatter: function (value) {
                return value + "USD";
              }
            },
          },
          xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
            labels: {
              style: {
                colors: '#B5B5C3',
                fontSize: '12px',
                fontFamily: 'Poppins',
                fontWeight: 400

              },
            },
            axisBorder: {
              show: false,
            },
            tooltip: {
              enabled: false,
            }
          },
          tooltip: {
            custom: function ({ series, seriesIndex, dataPointIndex, w }) {
              return '<div class="tooltip_box">' +
                '<div class="tooltip-data">' +
                '<span class="data-point ' + w.config.series[0].className + '">' + w.config.series[0].name + ' </span>' +
                '<span>' + series[0][dataPointIndex] + ' USD</span>' +
                '</div>' +
                '<div class="tooltip-data">' +
                '<span class="data-point ' + w.config.series[1].className + '">' + w.config.series[1].name + ' </span>' +
                '<span>' + series[1][dataPointIndex] + ' USD</span>' +
                '</div>' +
                '</div>'
            }
          },
          fill: {
            type: 'solid',
            opacity: 0
          },

        };


        if (jQuery("#marketChart").length > 0) {
          var chartBar1 = new ApexCharts(document.querySelector("#marketChart"), options);
          chartBar1.render();

          jQuery('.nav-pills .nav-link').on('click', function () {
            if ($(this).attr("href") == "#navpills-1") {
              chartBar1.updateSeries([{
                name: '1 ETH',
                className: 'bg-primary',
                data: [10000, 25000, 15000, 5000, 8000, 7000, 6000, 5000, 10000, 4000]
              },
              {
                name: '1 XRP',
                className: 'bg-secondary',
                data: [7000, 15000, 8000, 3000, 4000, 5000, 1000, 500, 8000, 2000]
              }]
              )
            } else if ($(this).attr("href") == "#navpills-2") {
              chartBar1.updateSeries([{
                name: '1 ETH',
                className: 'bg-primary',
                data: [25000, 10000, 15000, 10000, 6000, 7000, 6000, 5000, 10000, 4000]
              },
              {
                name: '1 XRP',
                className: 'bg-secondary',
                data: [10000, 25000, 15000, 5000, 8000, 7000, 6000, 5000, 10000, 4000]
              }]
              )
            } else if ($(this).attr("href") == "#navpills-3") {
              chartBar1.updateSeries([{
                name: '1 ETH',
                className: 'bg-primary',
                data: [10000, 25000, 15000, 5000, 8000, 7000, 6000, 5000, 10000, 4000]
              },
              {
                name: '1 XRP',
                className: 'bg-secondary',
                data: [7000, 15000, 8000, 3000, 4000, 5000, 1000, 500, 8000, 2000]
              }]
              )
            }
            else if ($(this).attr("href") == "#navpills-4") {
              chartBar1.updateSeries([{
                name: '1 ETH',
                className: 'bg-primary',
                data: [7000, 15000, 8000, 3000, 4000, 5000, 1000, 500, 8000, 2000]
              },
              {
                name: '1 XRP',
                className: 'bg-secondary',
                data: [10000, 25000, 15000, 5000, 8000, 7000, 6000, 5000, 10000, 4000]
              }]
              )
            }
            else if ($(this).attr("href") == "#navpills-5") {
              chartBar1.updateSeries([{
                name: '1 ETH',
                className: 'bg-primary',
                data: [10000, 25000, 15000, 5000, 8000, 7000, 6000, 5000, 10000, 4000]
              },
              {
                name: '1 XRP',
                className: 'bg-secondary',
                data: [3000, 10000, 2000, 3000, 4000, 5000, 6000, 100, 8000, 2000]
              }]
              )
            }
          })

        }
      }
    }

    var marketChart2 = function () {
      if (jQuery('#marketChart2').length > 0) {

        var options = {
          series: [{
            data: [{
              x: new Date(1538778600000),
              y: [6629.81, 6650.5, 6623.04, 6633.33]
            },
            {
              x: new Date(1538780400000),
              y: [6632.01, 6643.59, 6620, 6630.11]
            },
            {
              x: new Date(1538782200000),
              y: [6630.71, 6648.95, 6623.34, 6635.65]
            },
            {
              x: new Date(1538784000000),
              y: [6635.65, 6651, 6629.67, 6638.24]
            },
            {
              x: new Date(1538785800000),
              y: [6638.24, 6640, 6620, 6624.47]
            },
            {
              x: new Date(1538787600000),
              y: [6624.53, 6636.03, 6621.68, 6624.31]
            },
            {
              x: new Date(1538789400000),
              y: [6624.61, 6632.2, 6617, 6626.02]
            },
            {
              x: new Date(1538791200000),
              y: [6627, 6627.62, 6584.22, 6603.02]
            },
            {
              x: new Date(1538793000000),
              y: [6605, 6608.03, 6598.95, 6604.01]
            },
            {
              x: new Date(1538794800000),
              y: [6604.5, 6614.4, 6602.26, 6608.02]
            },
            {
              x: new Date(1538796600000),
              y: [6608.02, 6610.68, 6601.99, 6608.91]
            },
            {
              x: new Date(1538798400000),
              y: [6608.91, 6618.99, 6608.01, 6612]
            },
            {
              x: new Date(1538800200000),
              y: [6612, 6615.13, 6605.09, 6612]
            },
            {
              x: new Date(1538802000000),
              y: [6612, 6624.12, 6608.43, 6622.95]
            },
            {
              x: new Date(1538803800000),
              y: [6623.91, 6623.91, 6615, 6615.67]
            },
            {
              x: new Date(1538805600000),
              y: [6618.69, 6618.74, 6610, 6610.4]
            },
            {
              x: new Date(1538807400000),
              y: [6611, 6622.78, 6610.4, 6614.9]
            },
            {
              x: new Date(1538809200000),
              y: [6614.9, 6626.2, 6613.33, 6623.45]
            },
            {
              x: new Date(1538811000000),
              y: [6623.48, 6627, 6618.38, 6620.35]
            },
            {
              x: new Date(1538812800000),
              y: [6619.43, 6620.35, 6610.05, 6615.53]
            },
            {
              x: new Date(1538814600000),
              y: [6615.53, 6617.93, 6610, 6615.19]
            },
            {
              x: new Date(1538816400000),
              y: [6615.19, 6621.6, 6608.2, 6620]
            },
            {
              x: new Date(1538818200000),
              y: [6619.54, 6625.17, 6614.15, 6620]
            },
            {
              x: new Date(1538820000000),
              y: [6620.33, 6634.15, 6617.24, 6624.61]
            },
            {
              x: new Date(1538821800000),
              y: [6625.95, 6626, 6611.66, 6617.58]
            },
            {
              x: new Date(1538823600000),
              y: [6619, 6625.97, 6595.27, 6598.86]
            },
            {
              x: new Date(1538825400000),
              y: [6598.86, 6598.88, 6570, 6587.16]
            },
            {
              x: new Date(1538827200000),
              y: [6588.86, 6600, 6580, 6593.4]
            },
            {
              x: new Date(1538829000000),
              y: [6593.99, 6598.89, 6585, 6587.81]
            },
            {
              x: new Date(1538830800000),
              y: [6587.81, 6592.73, 6567.14, 6578]
            },
            {
              x: new Date(1538832600000),
              y: [6578.35, 6581.72, 6567.39, 6579]
            },
            {
              x: new Date(1538834400000),
              y: [6579.38, 6580.92, 6566.77, 6575.96]
            },
            {
              x: new Date(1538836200000),
              y: [6575.96, 6589, 6571.77, 6588.92]
            },
            {
              x: new Date(1538838000000),
              y: [6588.92, 6594, 6577.55, 6589.22]
            },
            {
              x: new Date(1538839800000),
              y: [6589.3, 6598.89, 6589.1, 6596.08]
            },
            {
              x: new Date(1538841600000),
              y: [6597.5, 6600, 6588.39, 6596.25]
            },
            {
              x: new Date(1538843400000),
              y: [6598.03, 6600, 6588.73, 6595.97]
            },
            {
              x: new Date(1538845200000),
              y: [6595.97, 6602.01, 6588.17, 6602]
            },
            {
              x: new Date(1538847000000),
              y: [6602, 6607, 6596.51, 6599.95]
            },
            {
              x: new Date(1538848800000),
              y: [6600.63, 6601.21, 6590.39, 6591.02]
            },
            {
              x: new Date(1538850600000),
              y: [6591.02, 6603.08, 6591, 6591]
            },
            {
              x: new Date(1538852400000),
              y: [6591, 6601.32, 6585, 6592]
            },
            {
              x: new Date(1538854200000),
              y: [6593.13, 6596.01, 6590, 6593.34]
            },
            {
              x: new Date(1538856000000),
              y: [6593.34, 6604.76, 6582.63, 6593.86]
            },
            {
              x: new Date(1538857800000),
              y: [6593.86, 6604.28, 6586.57, 6600.01]
            },
            {
              x: new Date(1538859600000),
              y: [6601.81, 6603.21, 6592.78, 6596.25]
            },
            {
              x: new Date(1538861400000),
              y: [6596.25, 6604.2, 6590, 6602.99]
            },
            {
              x: new Date(1538863200000),
              y: [6602.99, 6606, 6584.99, 6587.81]
            },
            {
              x: new Date(1538865000000),
              y: [6587.81, 6595, 6583.27, 6591.96]
            },
            {
              x: new Date(1538866800000),
              y: [6591.97, 6596.07, 6585, 6588.39]
            },
            {
              x: new Date(1538868600000),
              y: [6587.6, 6598.21, 6587.6, 6594.27]
            },
            {
              x: new Date(1538870400000),
              y: [6596.44, 6601, 6590, 6596.55]
            },
            {
              x: new Date(1538872200000),
              y: [6598.91, 6605, 6596.61, 6600.02]
            },
            {
              x: new Date(1538874000000),
              y: [6600.55, 6605, 6589.14, 6593.01]
            },
            {
              x: new Date(1538875800000),
              y: [6593.15, 6605, 6592, 6603.06]
            },
            {
              x: new Date(1538877600000),
              y: [6603.07, 6604.5, 6599.09, 6603.89]
            },
            {
              x: new Date(1538879400000),
              y: [6604.44, 6604.44, 6600, 6603.5]
            },
            {
              x: new Date(1538881200000),
              y: [6603.5, 6603.99, 6597.5, 6603.86]
            },
            {
              x: new Date(1538883000000),
              y: [6603.85, 6605, 6600, 6604.07]
            },
            {
              x: new Date(1538884800000),
              y: [6604.98, 6606, 6604.07, 6606]
            },
            ]
          }],
          chart: {
            type: 'candlestick',
            height: 280,
            toolbar: {
              show: false,
            }
          },
          grid: {
            show: false,
          },
          plotOptions: {
            candlestick: {
              colors: {
                upward: '#3ab67a',
                downward: '#fd5353'
              }
            }
          },
          title: {
            text: '',
            align: 'left'
          },
          xaxis: {
            type: 'datetime',
        
            labels: {
              style: {
                color: 'var(--text)',

              },
            }
          },
         
          yaxis: {
            opposite: true,
            tooltip: {
              enabled: true
            }
          }
        };

        jQuery('.market-chart .nav-link').on('click', function () {
          // alert($(this).attr("href"));
          if ($(this).attr("href") == "#Week") {
            marketOverviewChart.updateSeries([{
              data: [
                { x: new Date(1538818200000), y: [6629.81, 6650.5, 6623.04, 6633.33] },
                { x: new Date(1538780400000), y: [6632.01, 6643.59, 6620, 6630.11] },
                { x: new Date(1538809200000), y: [6614.9, 6626.2, 6613.33, 6623.45] },
                { x: new Date(1538811000000), y: [6623.48, 6627, 6618.38, 6620.35] },
                { x: new Date(1538812800000), y: [6619.43, 6620.35, 6610.05, 6615.53] },
                { x: new Date(1538814600000), y: [6615.53, 6617.93, 6610, 6615.19] },
                { x: new Date(1538816400000), y: [6615.19, 6621.6, 6608.2, 6620] },
                { x: new Date(1538818200000), y: [6619.54, 6625.17, 6629.15, 6620] },
                { x: new Date(1538820000000), y: [6620.33, 6634.15, 6617.24, 6624.61] },
                { x: new Date(1538821800000), y: [6625.95, 6626, 6611.66, 6617.58] },
                { x: new Date(1538818200000), y: [6619, 6625.97, 6595.27, 6598.86] },
                { x: new Date(1538825400000), y: [6598.86, 6598.88, 6570, 6587.16] },
                { x: new Date(1538827200000), y: [6588.86, 6600, 6629, 6593.4] },
                { x: new Date(1538829000000), y: [6593.99, 6598.89, 6585, 6587.81] },
                { x: new Date(1538830800000), y: [6587.81, 6592.73, 6567.14, 6578] },
                { x: new Date(1538832600000), y: [6578.35, 6629.72, 6567.39, 6579] },
                { x: new Date(1538818200000), y: [6579.38, 6580.92, 6566.77, 6575.96] },
                { x: new Date(1538836200000), y: [6575.96, 6589, 6571.77, 6588.92] },
                { x: new Date(1538838000000), y: [6588.92, 6594, 6577.55, 6629.22] },
                { x: new Date(1538839800000), y: [6589.3, 6598.89, 6589.1, 6596.08] },
                { x: new Date(1538818200000), y: [6597.5, 6600, 6588.39, 6596.25] },
                { x: new Date(1538843400000), y: [6598.03, 6600, 6629.73, 6595.97] },
                { x: new Date(1538845200000), y: [6595.97, 6602.01, 6588.17, 6602] },
                { x: new Date(1538847000000), y: [6602, 6607, 6596.51, 6599.95] },
                { x: new Date(1538848800000), y: [6600.63, 6601.21, 6590.39, 6591.02] },
                { x: new Date(1538850600000), y: [6591.02, 6603.08, 6591, 6591] },
                { x: new Date(1538852400000), y: [6591, 6601.32, 6585, 6592] },
                { x: new Date(1538854200000), y: [6593.13, 6596.01, 6590, 6593.34] },
                { x: new Date(1538856000000), y: [6593.34, 6604.76, 6582.63, 6593.86] },
                { x: new Date(1538857800000), y: [6593.86, 6604.28, 6586.57, 6600.01] },
                { x: new Date(1538859600000), y: [6601.81, 6603.21, 6592.78, 6596.25] },
                { x: new Date(1538861400000), y: [6596.25, 6604.2, 6590, 6602.99] },
                { x: new Date(1538863200000), y: [6602.99, 6606, 6584.99, 6587.81] },
                { x: new Date(1538865000000), y: [6587.81, 6595, 6583.27, 6591.96] },
                { x: new Date(1538866800000), y: [6591.97, 6596.07, 6585, 6588.39] },
                { x: new Date(1538868600000), y: [6587.6, 6598.21, 6587.6, 6594.27] },
                { x: new Date(1538870400000), y: [6596.44, 6601, 6590, 6596.55] },
                { x: new Date(1538872200000), y: [6598.91, 6605, 6596.61, 6600.02] },
                { x: new Date(1538874000000), y: [6600.55, 6605, 6589.14, 6593.01] },
                { x: new Date(1538875800000), y: [6593.15, 6605, 6592, 6603.06] },
                { x: new Date(1538877600000), y: [6603.07, 6604.5, 6599.09, 6603.89] },
                { x: new Date(1538879400000), y: [6604.44, 6604.44, 6600, 6603.5] },
                { x: new Date(1538881200000), y: [6603.5, 6603.99, 6597.5, 6603.86] },
                { x: new Date(1538883000000), y: [6603.85, 6605, 6600, 6604.07] },
                { x: new Date(1538884800000), y: [6604.98, 6606, 6604.07, 6606] },
              ]
            }])
          } else if ($(this).attr("href") == "#Month") {
            marketOverviewChart.updateSeries([{
              data: [{
                x: new Date(1538778600000),
                y: [6629.81, 6650.5, 6623.04, 6633.33]
              },
              {
                x: new Date(1538780400000),
                y: [6632.01, 6643.59, 6620, 6630.11]
              },
              {
                x: new Date(1538782200000),
                y: [6630.71, 6648.95, 6623.34, 6635.65]
              },
              {
                x: new Date(1538784000000),
                y: [6635.65, 6651, 6629.67, 6638.24]
              },
              {
                x: new Date(1538785800000),
                y: [6638.24, 6640, 6620, 6624.47]
              },
              {
                x: new Date(1538787600000),
                y: [6624.53, 6636.03, 6621.68, 6624.31]
              },
              {
                x: new Date(1538789400000),
                y: [6624.61, 6632.2, 6617, 6626.02]
              },
              {
                x: new Date(1538791200000),
                y: [6627, 6627.62, 6584.22, 6603.02]
              },
              {
                x: new Date(1538793000000),
                y: [6605, 6608.03, 6598.95, 6604.01]
              },
              {
                x: new Date(1538794800000),
                y: [6604.5, 6614.4, 6602.26, 6608.02]
              },
              {
                x: new Date(1538796600000),
                y: [6608.02, 6610.68, 6601.99, 6608.91]
              },
              {
                x: new Date(1538798400000),
                y: [6608.91, 6618.99, 6608.01, 6612]
              },
              {
                x: new Date(1538800200000),
                y: [6612, 6615.13, 6605.09, 6612]
              },
              {
                x: new Date(1538802000000),
                y: [6612, 6624.12, 6608.43, 6622.95]
              },
              {
                x: new Date(1538803800000),
                y: [6623.91, 6623.91, 6615, 6615.67]
              },
              {
                x: new Date(1538805600000),
                y: [6618.69, 6618.74, 6610, 6610.4]
              },
              {
                x: new Date(1538807400000),
                y: [6611, 6622.78, 6610.4, 6614.9]
              },
              {
                x: new Date(1538809200000),
                y: [6614.9, 6626.2, 6613.33, 6623.45]
              },
              {
                x: new Date(1538811000000),
                y: [6623.48, 6627, 6618.38, 6620.35]
              },
              {
                x: new Date(1538812800000),
                y: [6619.43, 6620.35, 6610.05, 6615.53]
              },
              {
                x: new Date(1538814600000),
                y: [6615.53, 6617.93, 6610, 6615.19]
              },
              {
                x: new Date(1538816400000),
                y: [6615.19, 6621.6, 6608.2, 6620]
              },
              {
                x: new Date(1538818200000),
                y: [6619.54, 6625.17, 6614.15, 6620]
              },
              {
                x: new Date(1538820000000),
                y: [6620.33, 6634.15, 6617.24, 6624.61]
              },
              {
                x: new Date(1538821800000),
                y: [6625.95, 6626, 6611.66, 6617.58]
              },
              {
                x: new Date(1538823600000),
                y: [6619, 6625.97, 6595.27, 6598.86]
              },
              {
                x: new Date(1538825400000),
                y: [6598.86, 6598.88, 6570, 6587.16]
              },
              {
                x: new Date(1538827200000),
                y: [6588.86, 6600, 6580, 6593.4]
              },
              {
                x: new Date(1538829000000),
                y: [6593.99, 6598.89, 6585, 6587.81]
              },
              {
                x: new Date(1538830800000),
                y: [6587.81, 6592.73, 6567.14, 6578]
              },
              {
                x: new Date(1538832600000),
                y: [6578.35, 6581.72, 6567.39, 6579]
              },
              {
                x: new Date(1538834400000),
                y: [6579.38, 6580.92, 6566.77, 6575.96]
              },
              {
                x: new Date(1538836200000),
                y: [6575.96, 6589, 6571.77, 6588.92]
              },
              {
                x: new Date(1538838000000),
                y: [6588.92, 6594, 6577.55, 6589.22]
              },
              {
                x: new Date(1538839800000),
                y: [6589.3, 6598.89, 6589.1, 6596.08]
              },
              {
                x: new Date(1538841600000),
                y: [6597.5, 6600, 6588.39, 6596.25]
              },
              {
                x: new Date(1538843400000),
                y: [6598.03, 6600, 6588.73, 6595.97]
              },
              {
                x: new Date(1538845200000),
                y: [6595.97, 6602.01, 6588.17, 6602]
              },
              {
                x: new Date(1538847000000),
                y: [6602, 6607, 6596.51, 6599.95]
              },
              {
                x: new Date(1538848800000),
                y: [6600.63, 6601.21, 6590.39, 6591.02]
              },
              {
                x: new Date(1538850600000),
                y: [6591.02, 6603.08, 6591, 6591]
              },
              {
                x: new Date(1538852400000),
                y: [6591, 6601.32, 6585, 6592]
              },
              {
                x: new Date(1538854200000),
                y: [6593.13, 6596.01, 6590, 6593.34]
              },
              {
                x: new Date(1538856000000),
                y: [6593.34, 6604.76, 6582.63, 6593.86]
              },
              {
                x: new Date(1538857800000),
                y: [6593.86, 6604.28, 6586.57, 6600.01]
              },
              {
                x: new Date(1538859600000),
                y: [6601.81, 6603.21, 6592.78, 6596.25]
              },
              {
                x: new Date(1538861400000),
                y: [6596.25, 6604.2, 6590, 6602.99]
              },
              {
                x: new Date(1538863200000),
                y: [6602.99, 6606, 6584.99, 6587.81]
              },
              {
                x: new Date(1538865000000),
                y: [6587.81, 6595, 6583.27, 6591.96]
              },
              {
                x: new Date(1538866800000),
                y: [6591.97, 6596.07, 6585, 6588.39]
              },
              {
                x: new Date(1538868600000),
                y: [6587.6, 6598.21, 6587.6, 6594.27]
              },
              {
                x: new Date(1538870400000),
                y: [6596.44, 6601, 6590, 6596.55]
              },
              {
                x: new Date(1538872200000),
                y: [6598.91, 6605, 6596.61, 6600.02]
              },
              {
                x: new Date(1538874000000),
                y: [6600.55, 6605, 6589.14, 6593.01]
              },
              {
                x: new Date(1538875800000),
                y: [6593.15, 6605, 6592, 6603.06]
              },
              {
                x: new Date(1538877600000),
                y: [6603.07, 6604.5, 6599.09, 6603.89]
              },
              {
                x: new Date(1538879400000),
                y: [6604.44, 6604.44, 6600, 6603.5]
              },
              {
                x: new Date(1538881200000),
                y: [6603.5, 6603.99, 6597.5, 6603.86]
              },
              {
                x: new Date(1538883000000),
                y: [6603.85, 6605, 6600, 6604.07]
              },
              {
                x: new Date(1538884800000),
                y: [6604.98, 6606, 6604.07, 6606]
              },
              ]
            }])
          } else if ($(this).attr("href") == "#Year") {
            marketOverviewChart.updateSeries([{
              data: [{
                x: new Date(1538778600000),
                y: [6629.81, 6650.5, 6623.04, 6633.33]
              },
              {
                x: new Date(1538780400000),
                y: [6632.01, 6643.59, 6620, 6630.11]
              },
              {
                x: new Date(1538782200000),
                y: [6630.71, 6648.95, 6623.34, 6635.65]
              },
              {
                x: new Date(1538784000000),
                y: [6635.65, 6651, 6629.67, 6638.24]
              },
              {
                x: new Date(1538785800000),
                y: [6638.24, 6640, 6620, 6624.47]
              },
              {
                x: new Date(1538787600000),
                y: [6624.53, 6636.03, 6621.68, 6624.31]
              },
              {
                x: new Date(1538789400000),
                y: [6624.61, 6632.2, 6617, 6626.02]
              },
              {
                x: new Date(1538791200000),
                y: [6627, 6627.62, 6584.22, 6603.02]
              },
              {
                x: new Date(1538793000000),
                y: [6605, 6608.03, 6598.95, 6604.01]
              },
              {
                x: new Date(1538794800000),
                y: [6604.5, 6614.4, 6602.26, 6608.02]
              },
              {
                x: new Date(1538796600000),
                y: [6608.02, 6610.68, 6601.99, 6608.91]
              },
              {
                x: new Date(1538798400000),
                y: [6608.91, 6618.99, 6608.01, 6612]
              },
              {
                x: new Date(1538800200000),
                y: [6612, 6615.13, 6605.09, 6612]
              },
              {
                x: new Date(1538802000000),
                y: [6612, 6624.12, 6608.43, 6622.95]
              },
              {
                x: new Date(1538803800000),
                y: [6623.91, 6623.91, 6615, 6615.67]
              },
              {
                x: new Date(1538805600000),
                y: [6618.69, 6618.74, 6610, 6610.4]
              },
              {
                x: new Date(1538807400000),
                y: [6611, 6622.78, 6610.4, 6614.9]
              },
              {
                x: new Date(1538809200000),
                y: [6614.9, 6626.2, 6613.33, 6623.45]
              },
              {
                x: new Date(1538811000000),
                y: [6623.48, 6627, 6618.38, 6620.35]
              },
              {
                x: new Date(1538812800000),
                y: [6619.43, 6620.35, 6610.05, 6615.53]
              },
              {
                x: new Date(1538814600000),
                y: [6615.53, 6617.93, 6610, 6615.19]
              },
              {
                x: new Date(1538816400000),
                y: [6615.19, 6621.6, 6608.2, 6620]
              },
              {
                x: new Date(1538818200000),
                y: [6619.54, 6625.17, 6614.15, 6620]
              },
              {
                x: new Date(1538820000000),
                y: [6620.33, 6634.15, 6617.24, 6624.61]
              },
              {
                x: new Date(1538821800000),
                y: [6625.95, 6626, 6611.66, 6617.58]
              },
              {
                x: new Date(1538823600000),
                y: [6619, 6625.97, 6595.27, 6598.86]
              },
              {
                x: new Date(1538825400000),
                y: [6598.86, 6598.88, 6570, 6587.16]
              },
              {
                x: new Date(1538827200000),
                y: [6588.86, 6600, 6580, 6593.4]
              },
              {
                x: new Date(1538829000000),
                y: [6593.99, 6598.89, 6585, 6587.81]
              },
              {
                x: new Date(1538830800000),
                y: [6587.81, 6592.73, 6567.14, 6578]
              },
              {
                x: new Date(1538832600000),
                y: [6578.35, 6581.72, 6567.39, 6579]
              },
              {
                x: new Date(1538834400000),
                y: [6579.38, 6580.92, 6566.77, 6575.96]
              },
              {
                x: new Date(1538836200000),
                y: [6575.96, 6589, 6571.77, 6588.92]
              },
              {
                x: new Date(1538838000000),
                y: [6588.92, 6594, 6577.55, 6589.22]
              },
              {
                x: new Date(1538839800000),
                y: [6589.3, 6598.89, 6589.1, 6596.08]
              },
              {
                x: new Date(1538841600000),
                y: [6597.5, 6600, 6588.39, 6596.25]
              },
              {
                x: new Date(1538843400000),
                y: [6598.03, 6600, 6588.73, 6595.97]
              },
              {
                x: new Date(1538845200000),
                y: [6595.97, 6602.01, 6588.17, 6602]
              },
              {
                x: new Date(1538847000000),
                y: [6602, 6607, 6596.51, 6599.95]
              },
              {
                x: new Date(1538848800000),
                y: [6600.63, 6601.21, 6590.39, 6591.02]
              },
              {
                x: new Date(1538850600000),
                y: [6591.02, 6603.08, 6591, 6591]
              },
              {
                x: new Date(1538852400000),
                y: [6591, 6601.32, 6585, 6592]
              },
              {
                x: new Date(1538854200000),
                y: [6593.13, 6596.01, 6590, 6593.34]
              },
              {
                x: new Date(1538856000000),
                y: [6593.34, 6604.76, 6582.63, 6593.86]
              },
              {
                x: new Date(1538857800000),
                y: [6593.86, 6604.28, 6586.57, 6600.01]
              },
              {
                x: new Date(1538859600000),
                y: [6601.81, 6603.21, 6592.78, 6596.25]
              },
              {
                x: new Date(1538861400000),
                y: [6596.25, 6604.2, 6590, 6602.99]
              },
              {
                x: new Date(1538863200000),
                y: [6602.99, 6606, 6584.99, 6587.81]
              },
              {
                x: new Date(1538865000000),
                y: [6587.81, 6595, 6583.27, 6591.96]
              },
              {
                x: new Date(1538866800000),
                y: [6591.97, 6596.07, 6585, 6588.39]
              },
              {
                x: new Date(1538868600000),
                y: [6587.6, 6598.21, 6587.6, 6594.27]
              },
              {
                x: new Date(1538870400000),
                y: [6596.44, 6601, 6590, 6596.55]
              },
              {
                x: new Date(1538872200000),
                y: [6598.91, 6605, 6596.61, 6600.02]
              },
              {
                x: new Date(1538874000000),
                y: [6600.55, 6605, 6589.14, 6593.01]
              },
              {
                x: new Date(1538875800000),
                y: [6593.15, 6605, 6592, 6603.06]
              },
              {
                x: new Date(1538877600000),
                y: [6603.07, 6604.5, 6599.09, 6603.89]
              },
              {
                x: new Date(1538879400000),
                y: [6604.44, 6604.44, 6600, 6603.5]
              },
              {
                x: new Date(1538881200000),
                y: [6603.5, 6603.99, 6597.5, 6603.86]
              },
              {
                x: new Date(1538883000000),
                y: [6603.85, 6605, 6600, 6604.07]
              },
              {
                x: new Date(1538884800000),
                y: [6604.98, 6606, 6604.07, 6606]
              },
              ]
            },])
          }
        })

        var marketOverviewChart = new ApexCharts(document.querySelector("#marketChart2"), options);
        marketOverviewChart.render();


      }
    }
    var marketChart23 = function () {
      if (jQuery('#marketChart23').length > 0) {
        var options = {
          series: [{
            data: [{
              x: new Date(1538778600000),
              y: [6629.81, 6650.5, 6623.04, 6633.33]
            },
            {
              x: new Date(1538780400000),
              y: [6632.01, 6643.59, 6620, 6630.11]
            },
            {
              x: new Date(1538782200000),
              y: [6630.71, 6648.95, 6623.34, 6635.65]
            },
            {
              x: new Date(1538784000000),
              y: [6635.65, 6651, 6629.67, 6638.24]
            },
            {
              x: new Date(1538785800000),
              y: [6638.24, 6640, 6620, 6624.47]
            },
            {
              x: new Date(1538787600000),
              y: [6624.53, 6636.03, 6621.68, 6624.31]
            },
            {
              x: new Date(1538789400000),
              y: [6624.61, 6632.2, 6617, 6626.02]
            },
            {
              x: new Date(1538791200000),
              y: [6627, 6627.62, 6584.22, 6603.02]
            },
            {
              x: new Date(1538793000000),
              y: [6605, 6608.03, 6598.95, 6604.01]
            },
            {
              x: new Date(1538794800000),
              y: [6604.5, 6614.4, 6602.26, 6608.02]
            },
            {
              x: new Date(1538796600000),
              y: [6608.02, 6610.68, 6601.99, 6608.91]
            },
            {
              x: new Date(1538798400000),
              y: [6608.91, 6618.99, 6608.01, 6612]
            },
            {
              x: new Date(1538800200000),
              y: [6612, 6615.13, 6605.09, 6612]
            },
            {
              x: new Date(1538802000000),
              y: [6612, 6624.12, 6608.43, 6622.95]
            },
            {
              x: new Date(1538803800000),
              y: [6623.91, 6623.91, 6615, 6615.67]
            },
            {
              x: new Date(1538805600000),
              y: [6618.69, 6618.74, 6610, 6610.4]
            },
            {
              x: new Date(1538807400000),
              y: [6611, 6622.78, 6610.4, 6614.9]
            },
            {
              x: new Date(1538809200000),
              y: [6614.9, 6626.2, 6613.33, 6623.45]
            },
            {
              x: new Date(1538811000000),
              y: [6623.48, 6627, 6618.38, 6620.35]
            },
            {
              x: new Date(1538812800000),
              y: [6619.43, 6620.35, 6610.05, 6615.53]
            },
            {
              x: new Date(1538814600000),
              y: [6615.53, 6617.93, 6610, 6615.19]
            },
            {
              x: new Date(1538816400000),
              y: [6615.19, 6621.6, 6608.2, 6620]
            },
            {
              x: new Date(1538818200000),
              y: [6619.54, 6625.17, 6614.15, 6620]
            },
            {
              x: new Date(1538820000000),
              y: [6620.33, 6634.15, 6617.24, 6624.61]
            },
            {
              x: new Date(1538821800000),
              y: [6625.95, 6626, 6611.66, 6617.58]
            },
            {
              x: new Date(1538823600000),
              y: [6619, 6625.97, 6595.27, 6598.86]
            },
            {
              x: new Date(1538825400000),
              y: [6598.86, 6598.88, 6570, 6587.16]
            },
            {
              x: new Date(1538827200000),
              y: [6588.86, 6600, 6580, 6593.4]
            },
            {
              x: new Date(1538829000000),
              y: [6593.99, 6598.89, 6585, 6587.81]
            },
            {
              x: new Date(1538830800000),
              y: [6587.81, 6592.73, 6567.14, 6578]
            },
            {
              x: new Date(1538832600000),
              y: [6578.35, 6581.72, 6567.39, 6579]
            },
            {
              x: new Date(1538834400000),
              y: [6579.38, 6580.92, 6566.77, 6575.96]
            },
            {
              x: new Date(1538836200000),
              y: [6575.96, 6589, 6571.77, 6588.92]
            },
            {
              x: new Date(1538838000000),
              y: [6588.92, 6594, 6577.55, 6589.22]
            },
            {
              x: new Date(1538839800000),
              y: [6589.3, 6598.89, 6589.1, 6596.08]
            },
            {
              x: new Date(1538841600000),
              y: [6597.5, 6600, 6588.39, 6596.25]
            },
            {
              x: new Date(1538843400000),
              y: [6598.03, 6600, 6588.73, 6595.97]
            },
            {
              x: new Date(1538845200000),
              y: [6595.97, 6602.01, 6588.17, 6602]
            },
            {
              x: new Date(1538847000000),
              y: [6602, 6607, 6596.51, 6599.95]
            },
            {
              x: new Date(1538848800000),
              y: [6600.63, 6601.21, 6590.39, 6591.02]
            },
            {
              x: new Date(1538850600000),
              y: [6591.02, 6603.08, 6591, 6591]
            },
            {
              x: new Date(1538852400000),
              y: [6591, 6601.32, 6585, 6592]
            },
            {
              x: new Date(1538854200000),
              y: [6593.13, 6596.01, 6590, 6593.34]
            },
            {
              x: new Date(1538856000000),
              y: [6593.34, 6604.76, 6582.63, 6593.86]
            },
            {
              x: new Date(1538857800000),
              y: [6593.86, 6604.28, 6586.57, 6600.01]
            },
            {
              x: new Date(1538859600000),
              y: [6601.81, 6603.21, 6592.78, 6596.25]
            },
            {
              x: new Date(1538861400000),
              y: [6596.25, 6604.2, 6590, 6602.99]
            },
            {
              x: new Date(1538863200000),
              y: [6602.99, 6606, 6584.99, 6587.81]
            },
            {
              x: new Date(1538865000000),
              y: [6587.81, 6595, 6583.27, 6591.96]
            },
            {
              x: new Date(1538866800000),
              y: [6591.97, 6596.07, 6585, 6588.39]
            },
            {
              x: new Date(1538868600000),
              y: [6587.6, 6598.21, 6587.6, 6594.27]
            },
            {
              x: new Date(1538870400000),
              y: [6596.44, 6601, 6590, 6596.55]
            },
            {
              x: new Date(1538872200000),
              y: [6598.91, 6605, 6596.61, 6600.02]
            },
            {
              x: new Date(1538874000000),
              y: [6600.55, 6605, 6589.14, 6593.01]
            },
            {
              x: new Date(1538875800000),
              y: [6593.15, 6605, 6592, 6603.06]
            },
            {
              x: new Date(1538877600000),
              y: [6603.07, 6604.5, 6599.09, 6603.89]
            },
            {
              x: new Date(1538879400000),
              y: [6604.44, 6604.44, 6600, 6603.5]
            },
            {
              x: new Date(1538881200000),
              y: [6603.5, 6603.99, 6597.5, 6603.86]
            },
            {
              x: new Date(1538883000000),
              y: [6603.85, 6605, 6600, 6604.07]
            },
            {
              x: new Date(1538884800000),
              y: [6604.98, 6606, 6604.07, 6606]
            },
            ]
          }],
          chart: {
            type: 'candlestick',
            height: 350,
            toolbar: {
              show: false,
            }
          },
          grid: {
            show: false,
          },
          plotOptions: {
            candlestick: {
              colors: {
                upward: '#3ab67a',
                downward: '#fd5353'
              }
            }
          },
          title: {
            text: '',
            align: 'left'
          },
          xaxis: {
            type: 'datetime',
            tooltip: {
              enabled: false
            }
          },
          yaxis: {
            opposite: true,
            tooltip: {
              enabled: false
            }
          }
        };

        var chart = new ApexCharts(document.querySelector("#marketChart23"), options);
        chart.render();
      }
    }
    var marketChart22 = function () {
      if (jQuery('#marketChart22').length > 0) {
        var options = {
          series: [{
            data: [{
              x: new Date(1538778600000),
              y: [6629.81, 6650.5, 6623.04, 6633.33]
            },
            {
              x: new Date(1538780400000),
              y: [6632.01, 6643.59, 6620, 6630.11]
            },
            {
              x: new Date(1538782200000),
              y: [6630.71, 6648.95, 6623.34, 6635.65]
            },
            {
              x: new Date(1538784000000),
              y: [6635.65, 6651, 6629.67, 6638.24]
            },
            {
              x: new Date(1538785800000),
              y: [6638.24, 6640, 6620, 6624.47]
            },
            {
              x: new Date(1538787600000),
              y: [6624.53, 6636.03, 6621.68, 6624.31]
            },
            {
              x: new Date(1538789400000),
              y: [6624.61, 6632.2, 6617, 6626.02]
            },
            {
              x: new Date(1538791200000),
              y: [6627, 6627.62, 6584.22, 6603.02]
            },
            {
              x: new Date(1538793000000),
              y: [6605, 6608.03, 6598.95, 6604.01]
            },
            {
              x: new Date(1538794800000),
              y: [6604.5, 6614.4, 6602.26, 6608.02]
            },
            {
              x: new Date(1538796600000),
              y: [6608.02, 6610.68, 6601.99, 6608.91]
            },
            {
              x: new Date(1538798400000),
              y: [6608.91, 6618.99, 6608.01, 6612]
            },
            {
              x: new Date(1538800200000),
              y: [6612, 6615.13, 6605.09, 6612]
            },
            {
              x: new Date(1538802000000),
              y: [6612, 6624.12, 6608.43, 6622.95]
            },
            {
              x: new Date(1538803800000),
              y: [6623.91, 6623.91, 6615, 6615.67]
            },
            {
              x: new Date(1538805600000),
              y: [6618.69, 6618.74, 6610, 6610.4]
            },
            {
              x: new Date(1538807400000),
              y: [6611, 6622.78, 6610.4, 6614.9]
            },
            {
              x: new Date(1538809200000),
              y: [6614.9, 6626.2, 6613.33, 6623.45]
            },
            {
              x: new Date(1538811000000),
              y: [6623.48, 6627, 6618.38, 6620.35]
            },
            {
              x: new Date(1538812800000),
              y: [6619.43, 6620.35, 6610.05, 6615.53]
            },
            {
              x: new Date(1538814600000),
              y: [6615.53, 6617.93, 6610, 6615.19]
            },
            {
              x: new Date(1538816400000),
              y: [6615.19, 6621.6, 6608.2, 6620]
            },
            {
              x: new Date(1538818200000),
              y: [6619.54, 6625.17, 6614.15, 6620]
            },
            {
              x: new Date(1538820000000),
              y: [6620.33, 6634.15, 6617.24, 6624.61]
            },
            {
              x: new Date(1538821800000),
              y: [6625.95, 6626, 6611.66, 6617.58]
            },
            {
              x: new Date(1538823600000),
              y: [6619, 6625.97, 6595.27, 6598.86]
            },
            {
              x: new Date(1538825400000),
              y: [6598.86, 6598.88, 6570, 6587.16]
            },
            {
              x: new Date(1538827200000),
              y: [6588.86, 6600, 6580, 6593.4]
            },
            {
              x: new Date(1538829000000),
              y: [6593.99, 6598.89, 6585, 6587.81]
            },
            {
              x: new Date(1538830800000),
              y: [6587.81, 6592.73, 6567.14, 6578]
            },
            {
              x: new Date(1538832600000),
              y: [6578.35, 6581.72, 6567.39, 6579]
            },
            {
              x: new Date(1538834400000),
              y: [6579.38, 6580.92, 6566.77, 6575.96]
            },
            {
              x: new Date(1538836200000),
              y: [6575.96, 6589, 6571.77, 6588.92]
            },
            {
              x: new Date(1538838000000),
              y: [6588.92, 6594, 6577.55, 6589.22]
            },
            {
              x: new Date(1538839800000),
              y: [6589.3, 6598.89, 6589.1, 6596.08]
            },
            {
              x: new Date(1538841600000),
              y: [6597.5, 6600, 6588.39, 6596.25]
            },
            {
              x: new Date(1538843400000),
              y: [6598.03, 6600, 6588.73, 6595.97]
            },
            {
              x: new Date(1538845200000),
              y: [6595.97, 6602.01, 6588.17, 6602]
            },
            {
              x: new Date(1538847000000),
              y: [6602, 6607, 6596.51, 6599.95]
            },
            {
              x: new Date(1538848800000),
              y: [6600.63, 6601.21, 6590.39, 6591.02]
            },
            {
              x: new Date(1538850600000),
              y: [6591.02, 6603.08, 6591, 6591]
            },
            {
              x: new Date(1538852400000),
              y: [6591, 6601.32, 6585, 6592]
            },
            {
              x: new Date(1538854200000),
              y: [6593.13, 6596.01, 6590, 6593.34]
            },
            {
              x: new Date(1538856000000),
              y: [6593.34, 6604.76, 6582.63, 6593.86]
            },
            {
              x: new Date(1538857800000),
              y: [6593.86, 6604.28, 6586.57, 6600.01]
            },
            {
              x: new Date(1538859600000),
              y: [6601.81, 6603.21, 6592.78, 6596.25]
            },
            {
              x: new Date(1538861400000),
              y: [6596.25, 6604.2, 6590, 6602.99]
            },
            {
              x: new Date(1538863200000),
              y: [6602.99, 6606, 6584.99, 6587.81]
            },
            {
              x: new Date(1538865000000),
              y: [6587.81, 6595, 6583.27, 6591.96]
            },
            {
              x: new Date(1538866800000),
              y: [6591.97, 6596.07, 6585, 6588.39]
            },
            {
              x: new Date(1538868600000),
              y: [6587.6, 6598.21, 6587.6, 6594.27]
            },
            {
              x: new Date(1538870400000),
              y: [6596.44, 6601, 6590, 6596.55]
            },
            {
              x: new Date(1538872200000),
              y: [6598.91, 6605, 6596.61, 6600.02]
            },
            {
              x: new Date(1538874000000),
              y: [6600.55, 6605, 6589.14, 6593.01]
            },
            {
              x: new Date(1538875800000),
              y: [6593.15, 6605, 6592, 6603.06]
            },
            {
              x: new Date(1538877600000),
              y: [6603.07, 6604.5, 6599.09, 6603.89]
            },
            {
              x: new Date(1538879400000),
              y: [6604.44, 6604.44, 6600, 6603.5]
            },
            {
              x: new Date(1538881200000),
              y: [6603.5, 6603.99, 6597.5, 6603.86]
            },
            {
              x: new Date(1538883000000),
              y: [6603.85, 6605, 6600, 6604.07]
            },
            {
              x: new Date(1538884800000),
              y: [6604.98, 6606, 6604.07, 6606]
            },


            ]
          }],
          chart: {

            type: 'candlestick',
            height: 350,
            toolbar: {
              show: false,
            },
            //offsetX: -15,
            offsetY: -10,
          },
          grid: {
            show: false,
          },
          plotOptions: {
            candlestick: {
              colors: {
                upward: '#3ab67a',
                downward: '#fd5353'
              }
            }
          },
          title: {
            text: '',
            align: 'left'
          },
          annotations: {
            xaxis: [
              {
                x: 'Oct 06 14:00',
                borderColor: '#white',
                label: {
                  borderColor: '#white',
                  style: {
                    fontSize: '12px',
                    color: '#fff',
                    background: ''
                  },
                  orientation: 'horizontal',

                  text: 'Annotation Test'
                }
              }
            ]
          },
          xaxis: {
            //opposite: true, 
            type: 'datetime',
            tooltip: {
              enabled: false
            },
            labels: {
              show: true,
              style: {
                fontSize: '18px',
                fontWeight: 400,
              }
            }
          },
          yaxis: {
            opposite: true,
            tooltip: {
              enabled: false
            }
          },

        };

        var chart = new ApexCharts(document.querySelector("#marketChart22"), options);
        chart.render();
      }
    }
    var swipercard = function () {

      function carouselDir(){
        if($('body').attr('direction') == "rtl"){
          return true;
        }else{
          return false;
        }
      }
      if (jQuery(".mySwiper-counter").length > 0) {
        var swiper = new Swiper('.mySwiper-counter', {

          
          speed: 1500,
          slidesPerView: 4,
          spaceBetween: 40,
          rtl: true,
          parallax: true,
          loop: false,
          autoplay: {
            delay: 5000,
          },
          breakpoints: {

            300: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            991: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          },
        });
      }
    }












    /* Function ============ */
    return {
      init: function () {
      },


      load: function () {
        donutChart1();
        widgetChart1();
        widgetChart2();
        widgetChart3();
        widgetChart4();
        widgetChart5();
        widgetChart6();
        marketChart();
        marketChart2();
        marketChart23();
        marketChart22();
        swipercard();

      },

      resize: function () {

      }
    }

  }();



  jQuery(window).on('load', function () {
    setTimeout(function () {
      dlabChartlist.load();
    }, 1000);

  });



})(jQuery);