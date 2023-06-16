"use client"

import { use, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';



const Activity = () => {
  const [chartData, setChartData] = useState(null);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        const newRes = data.products.filter((item) => item.id <= 5);

        const chartData = {
          labels: newRes.map((item) => item.title),
          datasets: [
            {
              label: "Phone vs Price",
              data: newRes.map((elem) => elem.price),
              yAxisID: "y",
              backgroundColor:"#9BDD7C",
              borderColor:"#9BDD7C",
              pointSytle:"circle",
            },
            {
              label: "Phone vs Rating",
              data: newRes.map((elem) => elem.rating),
              yAxisID: "y1",
             backgroundColor:"#E9A0A0",
             borderColor:"#E9A0A0",
             pointSytle:"circle"
            },
          ],
        };

        setChartData(chartData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-80 ">
      {chartData  ? (
        <Line
          style={{ background: "white", borderRadius: "20px",padding:"1.9rem"}}
          data={chartData}
          

          options={{
            scales: {
              y: {
                grid: {
                  display: false, // Remove grid lines for the y-axis
                },
              },
              x: {
                grid: {
                  display: false, // Remove grid lines for the y-axis
                },
              },
            },
           responsive:true,
           
            maintainAspectRatio:false,
            elements: {
              line: {
                tension: 0.4,
              },
            },
            plugins: {
              legend: {
                align: "end",
      
              },
              title: {
                display: true,
                text: "Activities",
                align: "start",
                color:"black",
                font:{
                  size:25,
                  
                }
              },
            },
          }}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Activity;