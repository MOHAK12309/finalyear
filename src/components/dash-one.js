import "../styles/dash-one.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
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
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getUserIdFromAuth } from "../Redux/actions/GetSellerIdFromAuthActionCreators";
import Unique from "./unique";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import { useSelector } from "react-redux";
function Dashboard() {
  const id = useSelector((state) => state.get_seller_profile_id.user_id);
  const name= useSelector((state) => state.get_seller_profile_id.name);
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
  useEffect(() => {
    if (!id) {
      navigate("/log", {
        replace: true,
        state: {
          signIn: true,
        },
      });
    } else {
      toast.error("You are not allowed to open this URL");
      navigate("/");
      handleUnique3();
      handleUnique();
      // Assuming fetchData is a function you want to call when 'id' is truthy
    }
  }, [navigate, id]);
  const handleLogout2 = async (e) => {
    e.preventDefault();

    dispatch(getUserIdFromAuth(""));
    toast.success("You logged Out Successfully");
    navigate("/log");
  };
  return (
    <div className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
        <nav>
          <ul>
            <button onClick={handleLogout2} className="logout">
              Logout
            </button>
          </ul>
        </nav>
      </div>
      <div className="content-section">
        <h1>Good afternoon, {name}. </h1>
        <p>Here is what's happening with your projects today:</p>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Total Visitors</h3>
          </div>
          {data.length !== 0 ? (
            data.map((item) => {
              return (
                <div>
                  <h1> {item.response[0].totalVisitors.value}</h1>

                  <br></br>
                </div>
              );
            })
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Unique Visitors</h3>
          </div>

          { data.length !==0?

          data.map((item) => {
            return (
              <div>
                <h1> {item.response[1].totalUniqueVisitors.value}</h1>

                <br></br>
              </div>
            );
          }):<div>Loading...</div>
          }
        </div>
      </div>
      {/* className={`seller-dash-button ${show === "kounselo" ? "active2" : ""}`} */}
      <div className="columns">
        <div className="column">
          <h2 className="totalvistors">Total Visitors</h2>
          <div className="column-content">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ margin: "30px" }}>
                <button
                  className={`chart-btn ${
                    showCharts === "month" ? "active" : ""
                  }`}
                  onClick={() => setShowcharts("month")}
                >
                  {" "}
                  Month
                </button>
              </div>
              <div style={{ margin: "30px" }}>
                <button
                  className={`chart-btn ${
                    showCharts === "day" ? "active" : ""
                  }`}
                  onClick={() => setShowcharts("day")}
                >
                  Day
                </button>
              </div>
              <div style={{ margin: "30px" }}>
                <button
                  className={`chart-btn ${
                    showCharts === "year" ? "active" : ""
                  }`}
                  onClick={() => setShowcharts("year")}
                >
                  Year
                </button>
              </div>
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
                          value="Date (Year-Month)"
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
                        <Label value="Date" offset={0} position="bottom" />
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
                        <Label value="Date" offset={0} position="bottom" />
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
