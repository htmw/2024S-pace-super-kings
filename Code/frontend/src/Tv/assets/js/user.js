

(function($) {
    /* "use strict" */
	
 var dzChartlist = function(){
	
	var donutChart2 = function(){
		$("span.donut3").peity("donut", {
			width: "120",
			height: "120"
		})
	}
	var donutChart4 = function(){
		$("span.donut4").peity("donut", {
			width: "100",
			height: "100"
		})
	}
	var chartBar = function(){
		var options = {
			  series: [
				{
					name: 'Business',
					data: [50, 90, 90,50,70,60,50,40],
					//radius: 12,	
				}, 
				
				
			],
				chart: {
				type: 'bar',
				height: 100,
				
				toolbar: {
					show: false,
				},
				
			},
			plotOptions: {
			  bar: {
				horizontal: false,
				// columnWidth: '100%',
				endingShape: "rounded",
				borderRadius: 3,
			  },
			  
			},
			states: {
			  hover: {
				filter: 'none',
			  }
			},
			colors:['var(--primary)'],
			dataLabels: {
			  enabled: false,
			  colors:['var(--primary)'],
			  //offsetY: -30
			},
			
			legend: {
				show: false,
				fontSize: '12px',
				labels: {
					colors: '#000000',
					
					},
				markers: {
				width: 18,
				height: 18,
				strokeWidth: 8,
				strokeColor: '#fff',
				fillColors: undefined,
				radius: 12,	
				}
			},
			
			
			stroke: {
			  show: true,
			  width:14,
			  curve: 'smooth',
			  lineCap: 'round',
			  colors: ['transparent']
			},
			grid: {
				show: false,
				xaxis: {
					lines: {
						show: false,
					}
				},
				 yaxis: {
						lines: {
							show: false
						}
					},  				
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

			var chartBar1 = new ApexCharts(document.querySelector("#chartBar"), options);
			chartBar1.render();
	}
	var chartBar2 = function(){
		var options = {
			  series: [
				{
					name: 'Running',
					data: [50, 90, 90,50,70,60,50,40],
					//radius: 12,	
				}, 
				
				
			],
				chart: {
				type: 'bar',
				height: 100,
				
				toolbar: {
					show: false,
				},
				
			},
			plotOptions: {
			  bar: {
				horizontal: false,
				//columnWidth: '100%',
				endingShape: "rounded",
				borderRadius: 3,
			  },
			  
			},
			states: {
			  hover: {
				filter: 'none',
			  }
			},
			colors:['var(--secondary)'],
			dataLabels: {
			  enabled: false,
			  //offsetY: -30
			},
			
			legend: {
				show: false,
				fontSize: '12px',
				labels: {
					colors: '#000000',
					
					},
				markers: {
				width: 18,
				height: 18,
				strokeWidth: 8,
				strokeColor: '#fff',
				fillColors: undefined,
				radius: 12,	
				}
			},
			
			stroke: {
			  show: true,
			  width:14,
			  curve: 'smooth',
			  lineCap: 'round',
			  colors: ['transparent']
			},
			grid: {
				show: false,
				xaxis: {
					lines: {
						show: false,
					}
				},
				 yaxis: {
						lines: {
							show: false
						}
					},  				
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

			var chartBar2 = new ApexCharts(document.querySelector("#chartBar2"), options);
			chartBar2.render();
	}
	var chartBar3 = function(){
		var options = {
			  series: [
				{
					name: 'Running',
					data: [50, 90, 90,50,70,60,50,40],
					//radius: 12,	
				}, 
				
				
			],
				chart: {
				type: 'bar',
				height: 100,
				
				toolbar: {
					show: false,
				},
				
			},
			plotOptions: {
			  bar: {
				horizontal: false,
				//columnWidth: '100%',
				endingShape: "rounded",
				borderRadius: 3,
			  },
			  
			},
			states: {
			  hover: {
				filter: 'none',
			  }
			},
			colors:['#3ab67a'],
			dataLabels: {
			  enabled: false,
			  //offsetY: -30
			},
			
			legend: {
				show: false,
				fontSize: '12px',
				labels: {
					colors: '#000000',
					
					},
				markers: {
				width: 18,
				height: 18,
				strokeWidth: 8,
				strokeColor: '#fff',
				fillColors: undefined,
				radius: 12,	
				}
			},
			
			stroke: {
			  show: true,
			  width:14,
			  curve: 'smooth',
			  lineCap: 'round',
			  colors: ['transparent']
			},
			grid: {
				show: false,
				xaxis: {
					lines: {
						show: false,
					}
				},
				 yaxis: {
						lines: {
							show: false
						}
					},  				
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

			var chartBar3 = new ApexCharts(document.querySelector("#chartBar3"), options);
			chartBar3.render();
	}


	
	var chartBar4 = function(){
		
		var options = {
		  chart: {
			height: 300,
			toolbar: {
				show: false
			},
			dropShadow: {
			  enabled: true,
			  enabledOnSeries: undefined,
			  top: 5,
			  left: 0,
			  blur: 3,
			  color: ['var(--primary)', 'rgba(55 ,54 ,175, 0.2)', "rgba(255,255,255,0)"],
			  opacity: 0.5
			},
		  },
			grid: {
			  show: true,
			  borderColor: 'rgba(55, 54, 175, 0.1)',
			  strokeDashArray: 4,
			},
			dataLabels: {
			  enabled: false
			},
			stroke: {
			  width: [0, 2.5, 2.5],
			  curve: "smooth",
			},
			legend: {
			show: true,
			position: 'top',
			horizontalAlign: 'center',
			fontWeight: 600,
			fontSize: '11px',
			  tooltipHoverFormatter: function (val, opts) {
				  return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
			  },
			  labels: {
				colors: 'var(--text)',
			  },
			  markers: {
				  width: 8,
				  height: 8,
				  strokeWidth: 0,
				  radius: 12,
				  offsetX: 0,
				  offsetY: 0
			  },
			},
		  series: [{
			name: "Income",
			data: [66, 85, 50, 105, 65, 74, 70, 105, 100, 125, 85, 110],
			type: 'bar',
		  },{
			name: 'Expenseve',
				  data: [65, 20, 40, 55, 80, 90, 59, 86, 120, 165, 115, 120],
				  type: 'line',
				},{
				  name: "Trade",
				  data: [20, 65, 85, 38, 55, 25, 25, 165, 75, 64, 70, 75 ],
				  type: 'line',
				}],
				colors: ["rgba(55, 54, 175, 0.075)","rgba(55, 54, 175, 0.95)", "var(--secondary)", ],
				fill: {
				  type: ['solid', 'gradient', 'gradient'],
				  gradient: {
					gradientToColors: ["transparent", 'var(--primary)', 'var(--secondary)']
				  },
				},
			  yaxis: {
				title: {
					style: {
						color: 'var(--text)',
						fontSize: '14px',
						fontFamily: 'poppins, sans-serif',
						fontWeight: 600,
						cssClass: 'apexcharts-yaxis-label',
					},
				},
				labels: {
					formatter: function (y) {
						return y.toFixed(0) + "";
					},
					show: true,
					style: {
						colors: "#8c9097",
						fontSize: '11px',
						fontWeight: 600,
						cssClass: 'apexcharts-xaxis-label',
					},
				}
			  },
			  xaxis: {
				  type: 'day',
				  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep',
						  'Oct', 'Nov', 'Dec'
					  ],
				  axisBorder: {
					  show: true,
					  color: 'var(--border)',
					  offsetX: 0,
					  offsetY: 0,
				  },
				  axisTicks: {
					  show: true,
					  borderType: 'solid',
					  color: 'rgba(119, 119, 142, 0.05)',
					  width: 6,
					  offsetX: 0,
					  offsetY: 0
				  },
				  labels: {
				  rotate: -90,
					style: {
						colors: "#8c9097",
						fontSize: '11px',
						fontWeight: 600,
						cssClass: 'apexcharts-xaxis-label',
					},
				  }
			  },
		}
		document.getElementById("chartBar4").innerHTML = "";
		var chart = new ApexCharts(document.querySelector("#chartBar4"), options);
		chart.render();
		
		function earnings() {
		  chart.updateOptions({
			colors: [
			  "rgba(119, 119, 142, 0.075)",
			  "rgba(" + myVarVal + ", 0.95)",
			  "rgba(245 ,187 ,116)",
			],
		  });
		}
		
					
			}
	
	
	
	/* Function ============ */
		return {
			init:function(){
            },
			
			
			load:function(){
                donutChart2();
                donutChart4();
				chartBar();
				chartBar2();
				chartBar3();
				chartBar4();
			},
			
			resize:function(){
				chartBar();
				chartBar2();
				chartBar3();
				chartBar4();
			}
		}
	
	}();

	
		
	jQuery(window).on('load',function(){
		setTimeout(function(){
			dzChartlist.load();
		}, 1000); 
		
	});

     

})(jQuery);