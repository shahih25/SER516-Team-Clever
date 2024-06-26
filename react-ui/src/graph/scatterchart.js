import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

const CustomScatterChart = ({ apiData, avg, chartFor, title }) => {
    const CustomToolTip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#FED9ED', padding: '5px', border: '2px solid black', borderRadius: "10px"}}>
                    <b>Date:</b> {payload[0].value}<br/>
                    <b>Days:</b> {payload[1].value}<br/>
                    <b>Task ID:</b> {payload[1].payload.taskRef}<br/>
                    <b>Task Description:</b> {payload[1].payload.taskDesc}<br/>
                </div>
            );
        }
        return null;
    };

    return (
        <div>
            <div>
                <h4 style={{ textAlign: 'center' }}>{title}</h4>
                <ResponsiveContainer height={600}>
                    <ScatterChart
                        margin={{ top: 20, right: 40, bottom: 70, left: 30 }}
                    >
                        <CartesianGrid />
                        <XAxis type="category" dataKey="endDate" name="End Date" label={{
                            value: 'End Date',
                            position: 'insideBottom', offset: -50, style: { fontSize: '20px' }
                        }}
                            tick={{ angle: -45, textAnchor: 'end', fontSize: 12 }} allowDuplicatedCategory={false} />
                        <YAxis type="number" dataKey="timeTaken" name="Time" label={{
                            value: `Days to complete ${chartFor}`,
                            angle: -90, position: 'insideLeft', style: { fontSize: '20px' }
                        }} />
                        <Tooltip content={<CustomToolTip />} />
                        <Scatter name={title} data={apiData} fill="#67729D" />
                        <ReferenceLine y={avg} stroke="#C65BCF" strokeWidth={2}
                            label={{ value: `${avg}`, position: 'left', fontSize: 15, offset: 5, fill: "#C65BCF", fontWeight: "bold" }} />
                    </ScatterChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default CustomScatterChart;
