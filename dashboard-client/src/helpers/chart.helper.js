function getLabels(chartData) {
  const labels = [];
  chartData.forEach((task) => {
    if (!labels.includes(task.status) && task.status != 'archive') {
      labels.push(task.status);
    }
  });

  return labels;
}

function getData(chartData, labels) {
  const data = [];
  labels.forEach((label) => {
    const result = chartData.filter((task) => task.status === label);
    data.push(result.length);
  });

  return data;
}

function getTasksData(chartData) {
  const labelsChart = getLabels(chartData);
  const data = {
    labels: ['todo', 'in progress', 'review', 'closed'],
    datasets: [
      {
        label: 'tasks status',
        data: getData(chartData, labelsChart),
        backgroundColor: ['#3685B1', '#F6C927', '#EE786C', '#36B176'],
      },
    ],
  };

  return data;
}

export { getTasksData };
