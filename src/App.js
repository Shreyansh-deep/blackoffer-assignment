import './App.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import PieChart from './charts/piechart';
import { Data } from './data';

Chart.register(CategoryScale);

function App() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "&quot;#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  })
  console.log(Data)
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <PieChart chartData={chartData} />
    </div>
  );
}

export default App;
