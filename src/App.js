import './App.css';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts'

const pdata = [
  {
    name: 'python',
    student: 13,
    fees: 10
  },
  {
    name: 'django',
    student: 18,
    fees: 13
  },
  {
    name: 'c++',
    student: 23,
    fees: 30
  },
  {
    name: 'java',
    student: 80,
    fees: 20
  },
  {
    name: 'php',
    student: 23,
    fees: 20
  },
  {
    name: 'React',
    student: 20,
    fees: 10
  },
  {
    name: 'Mern',
    student: 16,
    fees: 25
  },
];

function App() {
  return (
    <>
      <h1 className='chart-heading'>
        Line chart
      </h1 >

      <ResponsiveContainer width="100%" aspect={3}>

        <LineChart data={pdata} width={500} height={300} margin={{
          top
            : 5, right: 500, left: 20, bottom: 5
        }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey='name' interval={'preserveStartEnd'} tickFormatter={(value) => value + " Programming"} />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: 'yellow' }} cursor={{ stroke: 'red', strokeWidth: 2 }} />
          <Legend />
          <Line type="monotone" dataKey="student" stroke='red' activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="fees" stroke='green' activeDot={{ r: 8 }} />

        </LineChart>

      </ResponsiveContainer >


    </>
  );
}

export default App;
