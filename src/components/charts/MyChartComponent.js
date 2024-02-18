import React, { useEffect } from 'react';

const MyChartComponent = () => {
    useEffect(() => {
        var root = window.am5.Root.new('Warephase');
    
        // Set themes
        root.setThemes([window.am5themes_Animated.new(root)]);
    
        // Create chart
        var chart = root.container.children.push(
          window.am5radar.RadarChart.new(root, {
            panX: true,
            panY: true,
            wheelX: 'none',
            wheelY: 'none',
            innerRadius: window.am5.percent(40),
          })
        );
    
        // We don't want zoom-out button to appear while animating, so we hide it
        chart.zoomOutButton.set('forceHidden', true);
    
        // Create axes
        var xRenderer = window.am5radar.AxisRendererCircular.new(root, {
          minGridDistance: 30,
        });
    
        xRenderer.grid.template.set('visible', false);
    
        var xAxis = chart.xAxes.push(
          window.am5xy.CategoryAxis.new(root, {
            maxDeviation: 0.3,
            categoryField: 'country',
            renderer: xRenderer,
          })
        );
    
        var yAxis = chart.yAxes.push(
          window.am5xy.ValueAxis.new(root, {
            maxDeviation: 0.3,
            min: 0,
            renderer: window.am5radar.AxisRendererRadial.new(root, {}),
          })
        );
    
        // Add series
        var series = chart.series.push(
          window.am5radar.RadarColumnSeries.new(root, {
            name: 'Series 1',
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: 'value',
            categoryXField: 'country',
          })
        );
    
        // Rounded corners for columns
        series.columns.template.setAll({
          cornerRadius: 5,
          tooltipText: '{categoryX}: {valueY}',
        });
    
        // Make each column be of a different color
        series.columns.template.adapters.add('fill', function (fill, target) {
          return chart.get('colors').getIndex(series.columns.indexOf(target));
        });
    
        series.columns.template.adapters.add('stroke', function (stroke, target) {
          return chart.get('colors').getIndex(series.columns.indexOf(target));
        });
    
        // Set data
        var data = [
          { country: 'USA', value: 2025 },
          { country: 'China', value: 1882 },
          { country: 'Japan', value: 1809 },
          { country: 'Germany', value: 1322 },
          { country: 'UK', value: 1122 },
          { country: 'France', value: 1114 },
          { country: 'India', value: 984 },
          { country: 'Spain', value: 711 },
          { country: 'Netherlands', value: 665 },
          { country: 'South Korea', value: 443 },
          { country: 'Canada', value: 441 },
        ];
    
        xAxis.data.setAll(data);
        series.data.setAll(data);
    
        // Update data with random values every 1.5 seconds
        setInterval(function () {
          updateData();
        }, 1500);
    
        function updateData() {
          window.am5.array.each(series.dataItems, function (dataItem) {
            var value = dataItem.get('valueY') + Math.round(Math.random() * 400 - 200);
            if (value < 0) {
              value = 10;
            }
            // both valueY and workingValueY should be changed, we only animate workingValueY
            dataItem.set('valueY', value);
            dataItem.animate({
              key: 'valueYWorking',
              to: value,
              duration: 600,
              easing: window.am5.ease.out(window.am5.ease.cubic),
            });
          });
    
          sortCategoryAxis();
        }
    
        // Get series item by category
        function getSeriesItem(category) {
          for (let i = 0; i < series.dataItems.length; i++) {
            var dataItem = series.dataItems[i];
            if (dataItem.get('categoryX') === category) {
              return dataItem;
            }
          }
        }
    
        // Axis sorting
        function sortCategoryAxis() {
          // Sort by value
          series.dataItems.sort(function (x, y) {
            return y.get('valueY') - x.get('valueY'); // descending
          });
    
          // Go through each axis item
          window.am5.array.each(xAxis.dataItems, function (dataItem) {
            // get corresponding series item
            var seriesDataItem = getSeriesItem(dataItem.get('category'));
    
            if (seriesDataItem) {
              // get index of series data item
              var index = series.dataItems.indexOf(seriesDataItem);
              // calculate delta position
              var deltaPosition = (index - dataItem.get('index', 0)) / series.dataItems.length;
              // set index to be the same as series data item index
              dataItem.set('index', index);
              // set deltaPosition instantly
              dataItem.set('deltaPosition', -deltaPosition);
              // animate delta position to 0
              dataItem.animate({
                key: 'deltaPosition',
                to: 0,
                duration: 1000,
                easing: window.am5.ease.out(window.am5.ease.cubic),
              });
            }
          });
    
          // Sort axis items by index.
          // This changes the order instantly, but as deltaPosition is set,
          // they keep in the same places and then animate to true positions.
          xAxis.dataItems.sort(function (x, y) {
            return x.get('index') - y.get('index');
          });
        }
    
        // Make stuff animate on load
        series.appear(1000);
        chart.appear(1000, 100);
    
        return () => {
          root.dispose();
        };
      }, []);

  return <div id="Warephase" dir='ltr'></div>;
};

export default MyChartComponent;
