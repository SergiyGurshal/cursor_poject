import React, { Component } from 'react';
import { Bar } from "react-chartjs-2";

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['My mom', 'Sale book', 'Donatation', 'Work'],
                datasets: [
                    {
                        label: 'Income categories',
                        data: [
                            985,
                            678,
                            468,
                            1200
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)'
                        ]
                    }
                ]
            }
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right',
        location: ''
    }
    render() {
        return (

            <div className="Chart">
                <Bar
                    data={this.state.chartData}
                    width={100}
                    height={500}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            </div>
        )
    }
}
export default Chart;