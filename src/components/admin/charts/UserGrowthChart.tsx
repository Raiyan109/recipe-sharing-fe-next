// 'use client'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

type IData = {
    date: string;
    users: number;
}
const UserGrowthChart = ({ userGrowth }: { userGrowth: IData[] }) => {
    return (
        <div>
            <h2>User Growth Over Time</h2>
            <LineChart width={600} height={300} data={userGrowth}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="users" stroke="#FFA400" activeDot={{ r: 8 }} />
            </LineChart>
        </div>
    )
}

export default UserGrowthChart