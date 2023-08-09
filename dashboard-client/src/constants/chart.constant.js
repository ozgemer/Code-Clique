const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: true,
  radius: '85%',
  cutout: '60%',
  elements: {
    arc: {
      borderWidth: 0,
    },
  },
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        usePointStyle: true,
        pointStyle: 'rectRounded',
        color: 'white',
      },
    },
  },
};

const percentage = {
  afterDraw(chart) {
    const { width } = chart;
    const { height } = chart;
    const { ctx } = chart;
    ctx.restore();
    const fontSize = (height / 200).toFixed(2);
    ctx.font = `bold ${fontSize}em sans-serif`;
    ctx.textBaseline = 'center';
    ctx.fillStyle = 'white';
    let text = 0;
    chart.data.datasets[0].data.forEach((element) => {
      text += parseInt(element);
    });
    text = 'Total : ' + text;
    const textX = Math.round((width - ctx.measureText(text).width) / 2);
    const textY = height / 2 - chart.legend.height + 20;

    ctx.fillText(text, textX, textY);
    ctx.save();
  },
};

export { doughnutOptions, percentage };
