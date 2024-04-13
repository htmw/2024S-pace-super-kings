var dzChartlist = function(){
	"use strict"
	
	// 	revenueMap
	var revenueMap = function(){
		var options = {
			  series: [
				{
					name: 'Net Profit',
					data: [20, 60, 20, 30, 50, 40, 60,],
					//radius: 12,	
				}, 				
			],
				chart: {
				type: 'area',
				width:'100%',
				height: 350,
				toolbar: {
					show: false,
				},
				
			},
			plotOptions: {
			  bar: {
				horizontal: false,
				columnWidth: '50%',
				endingShape: 'rounded'
			  },
			},
			colors:['#886CC0'],
			dataLabels: {
				 formatter: function (val) {
                return val + "$";
              },
			  enabled: true,
			  offsetY: -10,
			   style: {
                fontSize: '12px',
                colors: ["var(--text-dark)"]
              },
			  background: {
				enabled: false,
				foreColor: '#fff',
				padding: 4,
				borderRadius: 2,
				borderWidth: 1,
				borderColor: '#fff',
				opacity: 0.9,
				dropShadow: {
				  enabled: false,
				  top: 1,
				  left: 1,
				  blur: 1,
				  color: 'var(--text-dark)',
				  opacity: 0.45
				}
			  },
			},
			markers: {
				shape: "circle",
			},
	
			legend: {
				show: false,
			},
			stroke: {
			  show: true,
			  width: 5,
			  curve:'smooth',
			  colors:['var(--primary)'],
			},
			
			grid: {
				borderColor: 'var(--border)',
				show: true,
				 xaxis: {
					lines: {
						show: true,
					}
				},  
				 yaxis: {
					lines: {
						show: true,
					}
				}, 			
			},
			markers: {
			  size: [8,0],
			  strokeWidth: [4,0],
			  strokeColors: ['var(--card)'],
			  border:4,
			  radius: 4,
			  colors:['var(--secondary)'],
			  hover: {
				size: 10,
			  }
			},
			xaxis: {
				
			  categories: ['Jan', 'Fab', 'Mar', 'April', 'May', 'Jun', 'July'],
			  labels: {
				style: {
					colors: 'var(--text)',
					fontSize: '13px',
					fontFamily: 'Poppins',
					fontWeight: 100,
					cssClass: 'apexcharts-xaxis-label',
				},
			  },
			  crosshairs: {
			  show: false,
			  }
			},
			yaxis: {
			show:true,	
			labels: {
				offsetX: -15,
			   style: {
				  colors: 'var(--text)',
				  fontSize: '14px',
				   fontFamily: 'Poppins',
				  fontWeight: 100,
				  
				},
				 formatter: function (y) {
						  return y.toFixed(0) + "k";
						}
			  },
			},
			fill: {
			  opacity: 9,
			  colors:'#b292ff'
			},
			
			tooltip: {
			  y: {
				formatter: function (val) {
				  return "$ " + val + " hundred"
				}
			  }
			}
			};

		var chartBar1 = new ApexCharts(document.querySelector("#revenueMap"), options);
		chartBar1.render();
	
	}

	// 	Running chart
	var chartBarRunning2 = function(){
		var options = {
			series: [{
				name: "Desktops",
				data: [10, 45, 95, 51, 49, 100]
			}],
			chart: {
				height: 110,
				type: 'line',
				toolbar: {
					show: false
				},
				zoom: {
					enabled: false
				}
			},
			legend: {
				show: false
			},
			dataLabels: {
			  enabled: false
			},
			colors:['var(--primary)'],
			stroke: {
			  curve: 'smooth',
			  width:'3'
			},
			fill: {
			  opacity: 9,
			  colors:'#b292ff'
			},
			grid: {
				show:false,
				borderColor: '#eee',
				padding: {
					top: 0,
					right: 0,
					bottom: 0,
					left: 0
				}
			},
			yaxis: {
				show: false
			},
			xaxis: {
			  labels: {
					show: false,
				},
				axisBorder: {
					show: false,
				},
				axisTicks: {
					show: false
				},
				crosshairs: {
					show: false,
					position: 'front',
					stroke: {
						width: 1,
						dashArray: 3
					}
				},
			},
			tooltip: {
				show:false,
				style: {
					fontSize: '12px',
				},
				y: {
					formatter: function(val) {
						return "$" + val + " thousands"
					}
				}
			}		
        };

		var chartBar1 = new ApexCharts(document.querySelector("#chartBarRunning2"), options);
        chartBar1.render();
	}
	
	// 	Bar
	var chartBarcry = function(){
		var options = {
			  series: [
				{
					name: 'Running',
					data: [96, 60, 90,60,50],
					//radius: 12,	
				}, 
				{
				  name: 'Cycling',
				  data: [80, 40, 55,40,80]
				}, 
				
			],
				chart: {
				type: 'bar',
				height: 110,
				
				toolbar: {
					show: false,
				},
				
			},
			legend: {
			show: false
			},
			dataLabels: {
			  enabled: false
			},
			plotOptions: {
			  bar: {
				horizontal: false,
				columnWidth: '60%',
				endingShape: "rounded",
				borderRadius: 1,
			  },
			  
			},
			states: {
			  hover: {
				filter: 'none',
			  }
			},
			colors:['var(--primary)', 'var(--secondary)'],
			dataLabels: {
			  enabled: false,
			  offsetY: -30,
			  style: {
				fontSize: '14px',
				fontWeight: '600',
			},
			},
			markers: {
			shape: "circle",
			},
			
			legend: {
				show: false,
				fontSize: '12px',
				labels: {
					colors: '#000000',
					
					},
				markers: {
				width: 10,
				height: 10,
				strokeWidth: 10,
				strokeColor: '#fff',
				fillColors: undefined,
				radius: 5,	
				}
			},
			stroke: {
			  show: true,
			  width:20,
			  curve: 'smooth',
			  lineCap: 'rounded',
			  colors: ['transparent']
			},
			grid: {
				show:false,
				borderColor: '#eee',
				padding: {
					top: 0,
					right: 0,
					bottom: 0,
					left: 0
				}
			},
			xaxis: {
				categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'],
				labels: {
					show: false,
					style: {
						colors: '#A5AAB4',
						fontSize: '14px',
						fontWeight: '500',
						fontFamily: 'poppins',
						cssClass: 'apexcharts-xaxis-label',
					},
				},
				crosshairs: {
					show: false,
				},
				axisBorder: {
					show: false,
				},
				axisTicks: {
					show: false,
				}, 			
			},
			yaxis: {
				labels: {
				show: false,
					offsetX:-16,
				   style: {
					  colors: '#000000',
					  fontSize: '13px',
					   fontFamily: 'poppins',
					  fontWeight: 100,
					  cssClass: 'apexcharts-xaxis-label',
				  },
			  },
			},
			};

		var chartBar1 = new ApexCharts(document.querySelector("#chartBarcry"), options);
		chartBar1.render();
	}
	// 	Bar
	var chartRound = function(){
		var options = {
			  series: [
				{
					name: 'Running',
					data: [96, 60, 90,60,50],
					//radius: 12,	
				}, 
				{
				  name: 'Cycling',
				  data: [80, 40, 55,40,80]
				}, 
				
			],
				chart: {
				type: 'bar',
				height: 110,
				
				toolbar: {
					show: false,
				},
				
			},
			legend: {
			show: false
			},
			dataLabels: {
			  enabled: false
			},
			plotOptions: {
			  bar: {
				horizontal: false,
				columnWidth: '60%',
				endingShape: "rounded",
				borderRadius: 1,
			  },
			  
			},
			states: {
			  hover: {
				filter: 'none',
			  }
			},
			colors:['var(--primary)', 'var(--secondary)'],
			dataLabels: {
			  enabled: false,
			  offsetY: -30,
			  style: {
				fontSize: '14px',
				fontWeight: '600',
			},
			},
			markers: {
			shape: "circle",
			},
			
			legend: {
				show: false,
				fontSize: '12px',
				labels: {
					colors: '#000000',
					
					},
				markers: {
				width: 10,
				height: 10,
				strokeWidth: 10,
				strokeColor: '#fff',
				fillColors: undefined,
				radius: 5,	
				}
			},
			stroke: {
			  show: true,
			  width:20,
			  curve: 'smooth',
			  lineCap: 'rounded',
			  colors: ['transparent']
			},
			grid: {
				show:false,
				borderColor: '#eee',
				padding: {
					top: 0,
					right: 0,
					bottom: 0,
					left: 0
				}
			},
			xaxis: {
				categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'],
				labels: {
					show: false,
					style: {
						colors: '#A5AAB4',
						fontSize: '14px',
						fontWeight: '500',
						fontFamily: 'poppins',
						cssClass: 'apexcharts-xaxis-label',
					},
				},
				crosshairs: {
					show: false,
				},
				axisBorder: {
					show: false,
				},
				axisTicks: {
					show: false,
				}, 			
			},
			yaxis: {
				labels: {
				show: false,
					offsetX:-16,
				   style: {
					  colors: '#000000',
					  fontSize: '13px',
					   fontFamily: 'poppins',
					  fontWeight: 100,
					  cssClass: 'apexcharts-xaxis-label',
				  },
			  },
			},
			};

		var chartBar1 = new ApexCharts(document.querySelector("#chartRound"), options);
		chartBar1.render();
	}
	
	// 	RadialBar
	var chartRadial = function(){
		var options = {
          series: [76],
		  chartOptions: {
		   colors: ['#9568ff']
		 },
          chart: {
          type: 'radialBar',
          offsetY: -20,
		  height:250,
          sparkline: {
            enabled: true
          }
        },
        plotOptions: {
          radialBar: {
            width: '80%',
			color: "#9568ff",
            background: "var(--primary)",
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "var(--secondary)",
			  color: "#9568ff",
              strokeWidth: '97%',
              margin: 5, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: 2,
                left: 0,
                color: '#fff',
                opacity: 1,
                blur: 2
              }
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                offsetY: -2,
                fontSize: '22px'
              }
            }
          }
        },
        grid: {
          padding: {
            top: 0
          }
        },
        fill: {
			opacity:1.5,
          type: 'gradient',
		  color:['#9568ff'],
          gradient: {
			gradientToColors: ['#9568ff'],
             shadeIntensity: 1,
			opacityFrom: 1,
			opacityTo: 2,
			stops: [0,0, 100],
			inverseColors: false
          },
        },
        labels: ['Average Results'],
        };
		
		

		var chartBar1 = new ApexCharts(document.querySelector("#chartRadial"), options);
		chartBar1.render();
	}
	
	// 	Swiper
	var swipercard = function() {
		var swiper = new Swiper('#card-swiper-crypto', {
			speed: 1500,
			parallax: true,
			slidesPerView:4,
			spaceBetween: 20,
			loop:false,
			breakpoints: {
				1600: {
					slidesPerView: 4,
				},
				
				1200: {
					slidesPerView: 3,
				},
				575: {
					slidesPerView: 2,
				},
				360: {
					slidesPerView: 1,
				},
			},
		});
	}

	
	/* Function ============ */
	return {
		init:function(){
			swipercard();
		},

		
		load:function(){
			revenueMap();
			chartBarRunning2();
			chartBarcry();
			chartRadial();
			chartRound();
		},
		
		resize:function(){
		},
	}
	


}();
	

/* Document.ready Start */	
jQuery(document).ready(function() {
	'use strict';
	dzChartlist.init();
	
});
/* Document.ready END */

/* Window Load START */
jQuery(window).on('load',function () {
	'use strict';
	setTimeout(function(){
		dzChartlist.load();
	}, 1000);
	
});
/*  Window Load END */
/* Window Resize START */
jQuery(window).on('resize',function () {
	'use strict'; 
	dzChartlist.resize();
});
/*  Window Resize END */