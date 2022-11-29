import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Chart } from "react-google-charts";
import { Content, Percent, PupilsBox } from "../Pupils/style";
import { Container, Hero, Left, Right, Wrapper } from "./style";

import ImgOY from "../../components/assest/images/carbon_moon.svg"
import ImgSound from "../../components/assest/images/Group.svg"


import Images1 from "../../components/assest/images/gropum (1).png";
import Images2 from "../../components/assest/images/gropum (2).png";
import Images3 from "../../components/assest/images/gropum (3).png";
import { AddBox, NAV } from "../../components/Students/style.js";


const Dashboard = () => {
  const data = [
    ["Element", "Density", { role: "style" }],
    ["Copper", 8.94, "#b87333"], // RGB value
    ["Silver", 10.49, "silver"], // English color name
    ["Gold", 19.3, "gold"],
    ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
  ];

  const [series] = useState([44, 65, ]);
  const [options] = useState({
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "32px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "Total",
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 249;
            },
          },
        },
      },
    },
    labels: ["Apples", "Oranges", "Bananas", "Berries"],
  });

  return (
    <div>
      <Container>

      <div>
        <PupilsBox auto>
          <Content>
            <img src={Images3} alt="" />
            <div>
              <span className="description">Hamma o’quvchilar</span>
              <h2 className="text">$198k</h2>
              <Percent>37.8% Oylik</Percent>
            </div>
          </Content>
          <Content>
            <img src={Images2} alt="" />
            <div>
              <span className="description">Ketgan O’quvchilar</span>
              <h2 className="text">$2.4k</h2>
              <Percent>2% Oylik</Percent>
            </div>
          </Content>
          <Content>
            <img src={Images1} alt="" />
            <div>
              <span className="description">Bitirgan o’quvchilar</span>
              <h2 className="text">$89k</h2>
              <Percent>1% oylik</Percent>
            </div>
          </Content>
        </PupilsBox>
      </div>
      <Wrapper>
        <Left>
          <h1>Yillik Statistika</h1>
          <Chart
            chartType="ColumnChart"
            width="100%"
            height="400px"
            data={data}
          />
        </Left>
        <Right>
          <h1 className="title">O’quvchilar</h1>
          <p className="description">Guruhdagi o’quchilar guruhi </p>
          <ReactApexChart
            options={options}
            series={series}
            type="radialBar"
            height={350}
          />
        </Right>
      </Wrapper>
      </Container>
    </div>
  );
};

export default Dashboard;
