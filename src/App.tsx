import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "SDNIPCOPLC",
    uv: 4000,
    pv: 2400,
    it: 1000,
    amt: 1400,
  },
  {
    name: "SDNIPCOPLC",
    uv: 3000,
    pv: 1398,
    it: 1500,
    amt: 2210,
  },
  {
    name: "SDNIPCOPLC",
    uv: 2000,
    pv: 4000,
    it: 1000,
    amt: 2290,
  },
  {
    name: "SDNIPCOPLC",
    uv: 2780,
    pv: 3908,
    it: 2500,
    amt: 2000,
  },
  {
    name: "SDNIPCOPLC",
    uv: 1800,
    pv: 4800,
    it: 1000,
    amt: 2181,
  },
  {
    name: "SDNIPCOPLC",
    uv: 2390,
    pv: 3800,
    it: 3000,
    amt: 2500,
  },
  {
    name: "SDNIPCOPLC",
    uv: 3490,
    pv: 4300,
    it: 3900,
    amt: 2100,
  },
];

const renderCustomizedLabel = (props) => {
  const { x, y, width, height, value, amount } = props;
  console.log(props)
  const radius = 10;
  const totalAmt = data.reduce((accumulator, currentValue) => accumulator + currentValue.amt, 0);
  const percentageChange = ((value - 2500) / 2500) * 100;

  return (
    <g>
      <text
        x={x + width / 2}
        y={y - radius}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="middle"
        style={{ fontSize: "11px"}}
      >
        {percentageChange.toFixed(1)}%
      </text>
    </g>
  );
};

const renderOpenClodeLabel = (props: CustomLabelProps) => {
  const {
 x, y, width, value
} = props;
  const radius = 10;

  return (
    <g>
      <text
        x={x + width / 2}
        y={y - radius}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="middle"
        style={{ fontSize: '11px' }}
        className="hidden md:block"
      >
        {value}
      </text>
    </g>
  );
};

export const App = () => {
  return (
    <div style={{ width: "800px", height: "400px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={1000}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 50,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="pv" fill="#252063" minPointSize={5} barSize={50} radius={[10, 10, 0, 0]}>
          <LabelList dataKey="pv" content={(props) => renderOpenClodeLabel({ ...props, dataKey: 'pv', amount: props.amt})} />
          </Bar>
          <Bar dataKey="uv" fill="#AC7C3D" minPointSize={10} barSize={50} radius={[10, 10, 0, 0]}>
            <LabelList dataKey="uv" content={renderOpenClodeLabel} />
          </Bar>
          <Bar dataKey="it" fill="#22C493" minPointSize={10} barSize={50} radius={[10, 10, 0, 0]}>
            <LabelList dataKey="it" content={renderCustomizedLabel} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default App;
