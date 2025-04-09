document.addEventListener("DOMContentLoaded", function () {
  // Analytics chart
  const ctx = document.createElement("canvas");
  document.getElementById("analyticsChart").appendChild(ctx);

  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Label 1",
        data: [12000, 11000, 14000, 10000, 15000, 20000, 17000],
        borderColor: "#4f46e5",
        backgroundColor: "rgba(79, 70, 229, 0.1)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Label 2",
        data: [5000, 6000, 10000, 8000, 7000, 5000, 9000],
        borderColor: "#f59e0b",
        backgroundColor: "rgba(245, 158, 11, 0.1)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            display: true,
            color: "rgba(0, 0, 0, 0.05)",
          },
          ticks: {
            callback: function (value) {
              if (value === 0) return "0";
              if (value === 5000) return "5k";
              if (value === 10000) return "10k";
              if (value === 15000) return "15k";
              if (value === 20000) return "20k";
              return "";
            },
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  };

  new Chart(ctx, config);
});

// Add this to your main.js
document
  .querySelector(".mobile-menu-toggle")
  .addEventListener("click", function () {
    document.querySelector(".sidebar").classList.toggle("active");
  });
