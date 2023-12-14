import React, { forwardRef, useState, useEffect } from "react";
import Chart from "react-apexcharts";

export interface ChartsDiagramProps {
  dataTestId?: string;
  data: any;
}

export const ChartsDiagram = forwardRef<HTMLDivElement, ChartsDiagramProps>(
  ({ data }: ChartsDiagramProps, ref) => {
    const [options, setOptions] = useState({
      chart: {
        id: "basic-bar",
        width: "100%",
        height: "100%",
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: [],
      },
      dataLabels: {
        enabled: false,
      },
    });

    const [series, setSeries] = useState([
      {
        name: "series-1",
        data: [],
      },
    ]);

    useEffect(() => {
      if (data) {
        setOptions({
          ...options,
          xaxis: {
            categories: data.map((item) => item.createdDate),
          },
        });
        setSeries([
          {
            name: "series-1",
            data: data.map((item) => item.quantity),
          },
        ]);
      }
    }, [data]);

    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart options={options} series={series} type="area" height="300" />
          </div>
        </div>
      </div>
    );
  }
);
