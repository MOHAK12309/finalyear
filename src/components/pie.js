
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import "../styles/dash-one.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CountUp from "react-countup";




ChartJS.register(ArcElement, Tooltip, Legend);


export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export function Golchart() {
    const[data,setData]=useState([])
    const handleUnique = async () => {
        try {
          const res = await axios.get(
            "https://metacommercesocketserver.onrender.com/api/v1/allInfo"
          );
          setData([res.data]);
        } catch (error) {}
      };
   
  return (
    
  <div  style={{width:"50%",margin:"auto"}}> 
     {data.length !== 0 ? (
            data.map((item) => {
              return (
                <div>
                      <Doughnut data={ {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }} />;
                  <h1>
                    <CountUp
                      start={0}
                      end={item.response[0].totalVisitors.value}
                      duration={0.5}
                      separator=","
                    />
                  </h1>

                  <br></br>
                </div>
              );
            })
          ) : (
            <div>
            </div>
          )}
  
</div>
  )
}
