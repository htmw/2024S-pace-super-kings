

(function($) {
    /* "use strict" */
	
 var dlabChartlist = function(){
	
	var screenWidth = $(window).width();
	
		var peityLine = function(){
			$(".peity-line").peity("line", {
				fill: ["rgba(9, 189, 60, 0.15)"], 
				stroke: '#3AB67A', 
				strokeWidth: '4', 
				width: "279",
				radius: 6,
				height: "50"
			});
		}
		var peityLine2 = function(){
			$(".peity-line2").peity("line", {
				fill: ["rgba(253, 83, 83, 0.15)"], 
				stroke: '#FD5353', 
				strokeWidth: '4', 
				width: "279",
				radius: 6,
				height: "50"
			});
		}
	
		var pieChart = function(){
			var options = {
			  series: [10, 15, 30, 25, 25 ],
			  chart: {
			  type: 'donut',
			  height:150
			},
			dataLabels: {
			  enabled: false
			},
			stroke: {
			  width: 0,
			},
			colors:['#ED3DD1', '#FFEE54', '#FF5166', '#2BC844', '#3C8AFF'],
			legend: {
				  position: 'bottom',
				  show:false
				},
			responsive: [{
			  breakpoint: 768,
			  options: {
			   chart: {
				  width:200
				},
			  }
			}]
			};

			var chart = new ApexCharts(document.querySelector("#pieChart"), options);
			chart.render();
		}
	var donutChart1 = function(){
		$("span.donut1").peity("donut", {
			width: "100",
			height: "100"
		});
	}

	
	var radialbar2 = function(){
		var options = {
          series: [62],
          chart: {
          height: 180,
          type: 'radialBar',
          toolbar: {
            show: true
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
             hollow: {
              margin: 0,
              size: '50%',
              background: '#fff',
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: 'front',
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: '#fff',
              strokeWidth: '62%',
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },
        
            dataLabels: {
              show: true,
              name: {
                offsetY: -10,
                show: true,
                color: '#888',
                fontSize: '17px'
              },
              value: {
                formatter: function(val) {
                  return parseInt(val);
                },
                color: '#111',
                fontSize: '36px',
                show: true,
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#ABE5A1'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: 'round'
        },
        labels: [''],
        };

        var chart = new ApexCharts(document.querySelector("#radialbar2"), options);
        chart.render();
	}
	var columnChart = function(){
		var options = {
			series: [{
				name: 'Aplication Sent',
				data: [40, 55, 15, 50, 70, 20, 55]
			}, {
				name: 'Appllication Answered',
				data: [55, 55, 35, 15,  35, 55, 20]
			}, {
				name: 'Hired',
				data: [20, 17, 55, 45, 30, 65, 50]
			}],
			chart: {
				type: 'bar',
				height: 170,
				stacked: true,
				toolbar: {
					show: false,
				}
			},
			responsive: [{
				breakpoint: 480,
				options: {
					legend: {
						position: 'bottom',
						offsetX: -10,
						offsetY: 0
					}
				}
			}],
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: '20%',
					
					endingShape: "rounded",
					startingShape: "rounded",
					backgroundRadius: 10,
					colors: {
						backgroundBarColors: ['#ECECEC', '#ECECEC', '#ECECEC', '#ECECEC', '#ECECEC', '#ECECEC', '#ECECEC'],
						backgroundBarOpacity: 1,
						backgroundBarRadius: 10,
					},
				},
				
			},
			colors:['#3AB67A', '#FD5353' ,'#FD5353'],
			xaxis: {
				show: true,
				axisBorder: {
					show: false,
				},
				
				labels: {
					style: {
						colors: 'var(--text)',
						fontSize: '14px',
						fontFamily: 'Poppins',
						fontWeight: 'light',
						cssClass: 'apexcharts-xaxis-label',
					},
				},
				crosshairs: {
					show: false,
				},
				
				categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
			},
			yaxis: {
				show: false
			},
			grid: {
				show: false,
			},
			toolbar: {
				enabled: false,
			},
			dataLabels: {
			  enabled: false
			},
			legend: {
				show:false
			},
			fill: {
				opacity: 1
			}
		};

		var chart = new ApexCharts(document.querySelector("#columnChart"), options);
		chart.render();
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
 
	/* Function ============ */
		return {
			init:function(){
			},
			
			
			load:function(){
				peityLine();
				peityLine2();
				pieChart();
				donutChart1();
				columnChart();
			},
			
			resize:function(){
				
			}
		}
	
	}();

	
		
	jQuery(window).on('load',function(){
		setTimeout(function(){
			dlabChartlist.load();
		}, 1000); 
		
	});

     

})(jQuery);