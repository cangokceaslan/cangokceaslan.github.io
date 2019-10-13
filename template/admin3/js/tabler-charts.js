/*
 * Tabler Charts (v0.9.0)
 * Copyright 2018-2019 The Tabler Authors
 * Copyright 2018-2019 codecalm
 * Licensed under MIT (https://github.com/tabler/tabler/blob/master/LICENSE)
 */

(function ($) {
  $(document).ready(function () {
    $().peity &&
    $('[data-spark]').each(function () {
      const $this = $(this),
        data = $this.attr('data-spark'),
        color = $this.attr('data-spark-color') || 'blue',
        type = $this.attr('data-spark-type') || 'line';

      const $div = $('<div />').html(data);
      $this.append($div);

      let strokeColor = tabler.colors[color],
        fillColor = tabler.colors[color];

      if (type === 'donut' || type === 'pie') {
        fillColor = [fillColor, tabler.hexToRgbA(fillColor, 0.1)];
      } else if (type === 'bar') {
        fillColor = [fillColor];
      } else if (type === 'line') {
        fillColor = tabler.hexToRgbA(fillColor, 0.1);
      }

      $div.peity(type, {
        width: $this.width(),
        height: $this.height(),
        // max: 100,
        // min: 0,
        stroke: strokeColor,
        strokeWidth: 2,
        fill: fillColor,
        padding: 0.2,
        innerRadius: type === 'donut' ? 17 : 0,
      });
    });
  });
})(jQuery);

/*
charts default configuration
 */
if (window.Apex) {
  const borderColor = 'rgba(0, 0, 0, 0.09)';
  const mutedColor = '#888e9a';

  window.Apex = {
    chart: {
      fontFamily: 'inherit',
      foreColor: 'inherit',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      animations: {
        enabled: false,
      },
    },

    grid: {
      show: false,
      position: 'back',
      borderColor: borderColor,
      padding: {
        right: 0,
        left: 0,
        bottom: 0,
        top: 0,
      },
    },

    dataLabels: {
      enabled: false,
      offsetY: -6,
      dropShadow: {
        enabled: false,
      },
    },

    plotOptions: {
      pie: {
        customScale: 1,
        expandOnClick: false,
        dataLabels: {
          offset: -8,
          minAngleToShowLabel: 10,
        },
      },
    },

    stroke: {
      width: 2,
      curve: 'smooth',
      lineCap: "round",
    },

    fill: {
      type: 'solid',
      opacity: 1,
    },

    markers: {
      size: 0,
      strokeWidth: 1,
      radius: 2,
      hover: {
        size: 4,
      },
    },

    legend: {
      show: true,
      fontSize: '14px',
      markers: {
        width: 8,
        height: 8,
      },
      itemMargin: {
        horizontal: 0,
        vertical: 8,
      },
    },

    title: {
      margin: 0,
      style: {
        fontSize: '14px',
      },
    },

    subtitle: {
      margin: 0,
    },

    tooltip: {
      fillSeriesColor: false,
    },

    xaxis: {
      labels: {
        style: {
          colors: mutedColor,
          fontSize: '12px',
        },
      },
      tooltip: {
        enabled: false,
      },
      axisBorder: {
        color: borderColor,
        height: 0,
      },
      axisTicks: {
        show: true,
        height: 4,
        color: borderColor,
      },
    },

    yaxis: {
      show: false,
      labels: {
        show: false,
      },
    },
  };
}
