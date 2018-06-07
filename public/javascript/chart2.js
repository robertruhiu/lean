window.onload = function () {
    let miezi = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let config = {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],

            datasets: [{
                label: 'github activity',
                backgroundColor: window.chartColors.blue,
                borderColor: window.chartColors.green,
                data: [14, 6, 22, 17, 10, 25, 30],


            }]
        },
        options: {
            responsive: true,
            elements: {
                line: {
                    tension: 0, // disables bezier curves
                }
            },


            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Month'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'commits'
                    }
                }]
            }
        }
    };
    let chart = new CanvasJS.Chart("chart", {
        animationEnabled: true,


        axisX: {
            interval: 1
        },
        axisY2: {

            gridColor: "rgba(1,77,101,.1)",

        },
        data: [{
            type: "bar",
            name: "metric",
            axisYType: "secondary",
            dataPoints: [
                {y: 4, label: "Language Knowledge"},
                {y: 6, label: "Problem Solving"},
                {y: 5, label: "Comment Completeness"},
                {y: 3, label: "Code Readability"},
                {y: 7, label: "Decomposition"},
                {y: 4, label: "Tool Knowledge"},
                {y: 6, label: "Error and exception Handling"},
                {y: 3, label: "Rules Compliance"},
                {y: 8, label: "Naming Convention"},
                {y: 6, label: "Best Practices"},
                {y: 7, label: "Optimized Code"},
                {y: 5, label: "Language Structure"},
                {y: 8, label: "Domain Knowledge"},
                {y: 6, label: "Code Organization"},


            ]
        }]
    });


    let ctx = document.getElementById('canvas').getContext('2d');
    window.myLine = new Chart(ctx, config);
    chart.render();

};

