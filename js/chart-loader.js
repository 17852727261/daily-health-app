// 全局保存图表实例
let chartInstance = null;

// 初始化折线图（自动销毁旧实例）
function initLineChart(canvasId, data, label, borderColor = '#4CAF50') {
  // 1. 销毁旧图表
  if (chartInstance) {
    chartInstance.destroy();
  }

  // 2. 创建新图表
  const ctx = document.getElementById(canvasId);
  chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.labels,
      datasets: [{
        label: label,
        data: data.values,
        borderColor: borderColor,
        tension: 0.1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  return chartInstance;
}

// 更新图表数据
function updateLineChart(chart, newData) {
  chart.data.labels = newData.labels;
  chart.data.datasets[0].data = newData.values;
  chart.update();
}
