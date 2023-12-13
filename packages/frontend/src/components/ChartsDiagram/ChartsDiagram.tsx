import React, { forwardRef } from "react";
import Chart from "react-apexcharts";

export interface ChartsDiagramProps {
  dataTestId?: string;
}
export const ChartsDiagram = forwardRef<HTMLDivElement, ChartsDiagramProps>(
  ({}: ChartsDiagramProps, ref) => {
    const data = [
      {
        clientId: 1,
        quantity: 42,
        createdDate: "2023-06-16T00:00:00",
      },
      {
        clientId: 1,
        quantity: 47,
        createdDate: "2023-06-17T00:00:00",
      },
      {
        clientId: 1,
        quantity: 68,
        createdDate: "2023-06-18T00:00:00",
      },
      {
        clientId: 1,
        quantity: 141,
        createdDate: "2023-06-19T00:00:00",
      },
      {
        clientId: 1,
        quantity: 147,
        createdDate: "2023-06-20T00:00:00",
      },
      {
        clientId: 1,
        quantity: 71,
        createdDate: "2023-06-21T00:00:00",
      },
      {
        clientId: 1,
        quantity: 129,
        createdDate: "2023-06-22T00:00:00",
      },
      {
        clientId: 1,
        quantity: 78,
        createdDate: "2023-06-23T00:00:00",
      },
    ];

    const options = {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: data.map((item) => item.createdDate),
      },
      dataLabels: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    };

    const series = [
      {
        name: "series-1",
        data: data.map((item) => item.quantity),
      },
    ];

    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart options={options} series={series} type="area" width="500" />
          </div>
        </div>
      </div>
    );
  }
);
