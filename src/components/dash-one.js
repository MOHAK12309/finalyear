import "../styles/dash-one.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CountUp from "react-countup";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
} from "recharts";
import { Chart as ChartJS } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { TypeAnimation } from "react-type-animation";
import { HashLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getUserIdFromAuth } from "../Redux/actions/GetSellerIdFromAuthActionCreators";
import Unique from "./unique";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";

import ButtonGroup from "@mui/material/ButtonGroup";
import { Golchart } from "./pie";
function Dashboard() {
  const id = useSelector((state) => state.get_seller_profile_id.user_id);
  const name = useSelector((state) => state.get_seller_profile_id.name);
  const [visitors, setVisitors] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);
  const [dailyData, setDailyData] = useState([]);
  const [yearlydata2, setyearlydata] = useState([]);
  const [data, setData] = useState([]);
  const [showCharts, setShowcharts] = useState("month");
  const navigate = useNavigate("");
  const dispatch = useDispatch("");
  const handleUnique3 = async () => {
    try {
      const res = await axios.get(
        "https://metacommercesocketserver.onrender.com/api/v1/visitors"
      );
      setVisitors(res.data.visitors.value);
    } catch (error) {
      console.error(error);
    }
  };
  const handleUnique = async () => {
    try {
      const res = await axios.get(
        "https://metacommercesocketserver.onrender.com/api/v1/allInfo"
      );
      setData([res.data]);
    } catch (error) {}
  };

  const aggregateDataByMonth = (visitors) => {
    const monthlyData = visitors.reduce((data, visitor) => {
      const timestamp = new Date(visitor.timestamp);
      const month = timestamp.getMonth() + 1; // January is 0, so add 1
      const year = timestamp.getFullYear();
      const key = `${year}-${month}`;

      if (data[key]) {
        data[key].count += 1; // Increment the count for the current month
      } else {
        data[key] = {
          date: `${year}-${month}`,
          count: 1, // Initialize the count for the current month
        };
      }

      return data;
    }, {});

    // Convert the aggregated data object into an array
    return Object.values(monthlyData);
  };

  useEffect(() => {
    handleUnique3();
    handleUnique();
  }, []);

  useEffect(() => {
    if (visitors.length > 0) {
      // Aggregate data by month
      const aggregatedData = aggregateDataByMonth(visitors);
      setMonthlyData(aggregatedData);
    }
  }, [visitors]);
  const aggregateDataByDay = (visitors) => {
    const dailyData = visitors.reduce((data, visitor) => {
      const timestamp = new Date(visitor.timestamp);
      const date = timestamp.toISOString().split("T")[0];
      const key = date;

      if (data[key]) {
        data[key].count += 1; // Increment the count for the current day
      } else {
        data[key] = {
          date: date,
          count: 1, // Initialize the count for the current day
        };
      }

      return data;
    }, {});

    // Convert the aggregated data object into an array
    return Object.values(dailyData);
  };
  const aggregateDataByYear = (visitors) => {
    const yearlyData = visitors.reduce((aggData, item) => {
      const timestamp = new Date(item.timestamp);
      const year = timestamp.getFullYear();
      if (aggData[year]) {
        aggData[year].count += 1;
      } else {
        aggData[year] = {
          year: year,
          count: 1,
        };
      }
      return aggData;
    }, {});
    return Object.values(yearlyData);
  };
  useEffect(() => {
    if (visitors.length > 0) {
      // Aggregate data day-wise
      const aggregatedData = aggregateDataByDay(visitors);
      setDailyData(aggregatedData);
    }
  }, [visitors]);
  useEffect(() => {
    if (visitors.length > 0) {
      // Aggregate data day-wise
      const aggregatedData = aggregateDataByYear(visitors);
      setyearlydata(aggregatedData);
    }
  }, [visitors]);
 
  const handleLogout2 = async (e) => {
    e.preventDefault();

    dispatch(getUserIdFromAuth(""));
    toast.success("You logged Out Successfully");
    navigate("/log");
  };
  return (
    <div className="main-container">
      {/* <div className="main-title">
        <h3>DASHBOARD</h3>
        <nav>
          <ul>
            <button onClick={handleLogout2} className="logout">
              Logout
            </button>
          </ul>
        </nav>
      </div> */}
      <div className="content-section">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            `Good afternoon, ${name}`,

            1000,
            // wait 1s before replacing "Mice" with "Hamsters"
          ]}
          className="purple_text"
          wrapper="span"
          speed={30}
          style={{
            fontSize: "2em",
            display: "inline-block",
            color: "#b8bbff",
            fontWeight: "bolder",
          }}
          repeat={Infinity}
        />
        <h1> </h1>
        <p>Here is what's happening with your projects today:</p>
      </div>

      <div className="main-cards">
        <div className="card-one">
          <div className="card-inner">
            <h3 style={{fontSize:"12px"}} className="head">Total Visitors</h3>
            <br></br>
          </div>
          {data.length !== 0 ? (
            data.map((item) => {
              return (
                <div>
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
            <HashLoader color="white" /></div>
          )}
        </div>
        <div className="card-two">
          <div className="card-inner">
            <h3 style={{fontSize:"12px"}} className="head">Unique Visitors</h3>
          </div>

          {data.length !== 0 ? (
            data.map((item) => {
              return (
                <div>
                  <h1>
                    {" "}
                    <CountUp
                      start={0}
                      end={item.response[1].totalUniqueVisitors.value}
                      duration={0.5}
                      separator=","
                    />{" "}
                  </h1>

                  <br></br>
                </div>
              );
            })
          ) : (
            <div><HashLoader color="white" /></div>
          )}
        </div>
        <div className="card-three">
          <div className="card-inner">
            <h3 style={{fontSize:"12px"}} className="head">Avg order value</h3>
          </div>

          {data.length !== 0 ? (
            data.map((item) => {
              return (
                <div>
                  <h1>
                    {" "}
                    <CountUp
                      start={0}
                      end={item.response[4].avgOrderValue.value}
                      duration={0.5}
                      separator=","
                    />
                  </h1>

                  <br></br>
                </div>
              );
            })
          ) : (
            <div><HashLoader color="white" /></div>
          )}
        </div>
        <div className="card-four">
          <div className="card-inner">
            <h3 style={{fontSize:"12px"}} className="head"> cart Abandonment Count</h3>
          </div>

          {data.length !== 0 ? (
            data.map((item) => {
              return (
                <div>
                  <h1>
                    {" "}
                    <CountUp
                      start={0}
                      end={item.response[5].cartAbandonmentCount.value}
                      duration={0.5}
                      separator=","
                    />{" "}
                  </h1>

                  <br></br>
                </div>
              );
            })
          ) : (
            <div><HashLoader color="white" /></div>
          )}
        </div>
        <div className="card-five">
          <div className="card-inner">
            <h3 style={{fontSize:"12px"}} className="head"> Mobile web conversion rate</h3>
          </div>

          {data.length !== 0 ? (
            data.map((item) => {
              return (
                <div>
                  <h1>
                    <CountUp
                      start={0}
                      end={item.response[7].mobileWebConversionRate.value}
                      duration={0.5}
                      separator=","
                    />{" "}
                  </h1>

                  <br></br>
                </div>
              );
            })
          ) : (
            <div><HashLoader color="white" /></div>
          )}
        </div>
        <div className="card-six">
          <div className="card-inner">
            <h3 style={{fontSize:"12px"}} className="head"> life time Order Value</h3>
          </div>

          {data.length !== 0 ? (
            data.map((item) => {
              return (
                <div>
                  <h1>
                    <CountUp
                      start={0}
                      end={item.response[6].lifetimeOrderValue.value}
                      duration={0.5}
                      separator=","
                    />{" "}
                  </h1>

                  <br></br>
                </div>
              );
            })
          ) : (
            <div><HashLoader color="white" /></div>
          )}
        </div>
        <div className="card-seven">
          <div className="card-inner">
            <h3 style={{fontSize:"12px"}} className="head"> conversion rate</h3>
          </div>

          {data.length !== 0 ? (
            data.map((item) => {
              return (
                <div>
                  <h1>
                    {" "}
                    <CountUp
                      start={0}
                      end={item.response[3].conversionRate.value}
                      duration={0.5}
                      separator=","
                    />
                  </h1>

                  <br></br>
                </div>
              );
            })
          ) : (
            <div><HashLoader color="white" /></div>
          )}
        </div>
        <div className="card-eight">
          <div className="card-inner">
            <h3 style={{fontSize:"12px"}} className="head"> average Page Load Time</h3>
          </div>

          {data.length !== 0 ? (
            data.map((item) => {
              return (
                <div>
                  <h1>
                    <CountUp
                      start={0}
                      end={item.response[2].averagePageLoadTime.value}
                      duration={0.5}
                      separator=","
                    />{" "}
                  </h1>

                  <br></br>
                </div>
              );
            })
          ) : (
            <div><HashLoader color="white" /></div>
          )}
        </div>
      </div>
      <Golchart/>
      {/* className={`seller-dash-button ${show === "kounselo" ? "active2" : ""}`} */}
      <div className="columns">
        <div className="column">
          <h2 className="totalvistors">Total Visitors</h2>
          <div className="column-content">
            <div style={{ display: "flex", justifyContent: "center",marginBottom:"30px",marginTop:"20px" }}>
              <ButtonGroup
                variant="outlined"
                aria-label="outlined button group"
              >
                <Button
                  className={`chart-btn ${
                    showCharts === "month" ? "active" : ""
                  }`}
                  onClick={() => setShowcharts("month")}
                >
                  Month
                </Button>
                <Button
                  className={`chart-btn ${
                    showCharts === "day" ? "active" : ""
                  }`}
                  onClick={() => setShowcharts("day")}
                >
                  Day
                </Button>
                <Button
                  className={`chart-btn ${
                    showCharts === "year" ? "active" : ""
                  }`}
                  onClick={() => setShowcharts("year")}
                >
                  Year
                </Button>
              </ButtonGroup>
            </div>
            <div>
              <div></div>
              {showCharts === "month" && (
                <div>
                  {monthlyData.length > 0 && (
                    <LineChart
                      width={1000}
                      height={400}
                      data={monthlyData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date">
                        <Label
                          
                          offset={0}
                          position="bottom"
                        />
                      </XAxis>
                      <YAxis dataKey="count">
                        <Label
                          value="Total Visitors"
                          angle={-90}
                          position="insideLeft"
                        />
                      </YAxis>
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="count"
                        name="Total Visitors"
                        stroke="rgba(75, 192, 192, 1)"
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  )}
                </div>
              )}
              {showCharts === "day" && (
                <div>
                  {dailyData.length > 0 && (
                    <LineChart
                      width={1000}
                      height={400}
                      data={dailyData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date">
                        <Label  offset={0} position="bottom" />
                      </XAxis>
                      <YAxis dataKey="count">
                        <Label
                          value="Total Visitors"
                          angle={-90}
                          position="insideLeft"
                        />
                      </YAxis>
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="count"
                        name="Total Visitors"
                        stroke="rgba(75, 192, 192, 1)"
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  )}
                </div>
              )}
              {showCharts === "year" && (
                <div>
                  {yearlydata2.length > 0 && (
                    <LineChart
                      width={1000}
                      height={400}
                      data={yearlydata2}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date">
                        <Label  offset={0} position="bottom" />
                      </XAxis>
                      <YAxis dataKey="count">
                        <Label
                          value="Total Visitors"
                          angle={-90}
                          position="insideLeft"
                        />
                      </YAxis>
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="count"
                        name="Total Visitors"
                        stroke="rgba(75, 192, 192, 1)"
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Unique />
    </div>
  );
}

export default Dashboard;
