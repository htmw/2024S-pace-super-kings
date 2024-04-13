

(function($) {
    /* "use strict" */
	
 var dzChartlist = function(){
	
	var screenWidth = $(window).width();
		var totalInvoices = function(){
		 var options = {
          series: [{
            name: "Desktops",
            data: [10, 45, 95, 51, 49, 70, 30, 91, 100]
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
          curve: 'smooth'
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
			enabled:false,
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

		var chartBar1 = new ApexCharts(document.querySelector("#totalInvoices"), options);
		chartBar1.render();
	}
	var paidinvoices = function(){
		 var options = {
          series: [{
            name: "Desktops",
            data: [30, 70, 48, 31, 95, 70, 20, 91, 50]
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
          curve: 'smooth'
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
			enabled:false,
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

		var chartBar1 = new ApexCharts(document.querySelector("#paidinvoices"), options);
		chartBar1.render();
	}
	
	var barChart = function(){
		var optionsTimeline = {
		  chart: {
			type: "bar",
			height: 110,
			stacked: true,
			toolbar: {
			  show: false
			},
			sparkline: {
			  //enabled: true
			},
			offsetX:0,
		  },
		  series: [
			 {
			  name: "New Clients",
			  data: [55, 40, 60, 80,100, 60, 40, 20 ]
			}
		  ],
		  
		  plotOptions: {
			bar: {
			  columnWidth: "28%",
			  endingShape: "rounded",
			  startingShape: "rounded",
			   borderRadius: 4,
			  
			  colors: {
				backgroundBarColors: ['#ffffff', '#ffffff', '#ffffff', '#ffffff','#ffffff','#ffffff'],
				backgroundBarOpacity: 1,
				backgroundBarRadius: 5,
			  },
	
			},
			distributed: false
		  },
		  colors:['#F79F19','#ffff','#FF4646','#ffff','#FF4646','#ffff'],
		  grid: {
			show: false,
			padding: {
			left: -6,
			right: 0,
			top: -10,
			bottom: 0,
			}
		},
		  legend: {
			show: false
		  },
		  fill: {
			opacity: 1
		  },
		  dataLabels: {
			enabled: false,
			colors: ['#000'],
			dropShadow: {
			  enabled: true,
			  top: 1,
			  left: 1,
			  blur: 1,
			  opacity: 1
			}
		  },
		  xaxis: {
		   labels: {
			show: false,
				style: {
				colors: '#666666',
				fontSize: '14px',
				fontFamily: 'poppins',
				fontWeight: 500,
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
				borderType: 'solid',
				color: '#78909C',
				height: 5,
				offsetX: 0,
				offsetY: 0
			},
		  },
		  stroke:{
			 color:'green',
			 show: true, 
			 curve: 'smooth',
			  lineCap: 'round',
			   width: 0,
		   },
		  yaxis: {
			show: false
		  },
		  
		  tooltip: {
			x: {
			  show: true
			}
		  }
		};
		var chartTimelineRender =  new ApexCharts(document.querySelector("#barChart"), optionsTimeline);
		 chartTimelineRender.render();  
	}
	var ticketSold = function(){
		var options = {
          series: [{
            name: "Desktops",
            data: [30, 70, 48, 95, 20, 91,100]
        }],
          chart: {
          height: 110,
          width: 150,
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
          curve: 'smooth'
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
		responsive: [
			{
			  breakpoint: 1835,
			  options: {
				 chart: {
				  width: 120,
				},
			  }
			},
			{
			  breakpoint: 1720,
			  options: {
				 chart: {
				  width: 110,
				},
			  }
			},
			{
			  breakpoint: 1680,
			  options: {
				 chart: {
				  width: 100,
				},
			  }
			},
			{
			  breakpoint: 1640,
			  options: {
				 chart: {
				  width: 95,
				},
			  }
			},
			{
			  breakpoint: 1620,
			  options: {
				 chart: {
				  width: 90,
				},
			  }
			},
			{
			  breakpoint: 1450,
			  options: {
				 chart: {
				  width: 80,
				},
			  }
			},
			{
			  breakpoint: 1200,
			  options: {
				 chart: {
				  width: 120,
				},
			  }
			}
			
		  ],
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
			enabled:false,
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
		var chartBar1 = new ApexCharts(document.querySelector("#ticketSold"), options);
		chartBar1.render();
	}
	
	
	
	

	
 
	/* Function ============ */
		return {
			init:function(){
			},
			
			
			load:function(){
				totalInvoices();
				paidinvoices();
				barChart();
				ticketSold();
				//chartBarRunning2();
				
			},
			
			resize:function(){
				//chartBarRunning2();
			}
		}
	
	}();

	
		
	jQuery(window).on('load',function(){
		setTimeout(function(){
			dzChartlist.load();
		}, 1000); 
		
	});

     

})(jQuery);