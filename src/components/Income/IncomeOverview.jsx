import React, { useEffect, useMemo, useState } from 'react'
import CustomBarChart from "../Charts/CustomBarChart"
import { LuPlus } from 'react-icons/lu';
import moment from 'moment';

const IncomeOverview = ({ transactions, onAddIncome }) => {

    // const [chartData, setChartData] = useState([]);

    // useEffect(() => {
    //     const result = prepareIncomeBarChartData(transactions);
    //     setChartData(result);

    //     console.log(result)

    //     return () => { };
    // }, [transactions]);

    const chartData = useMemo(() => {
    if (!Array.isArray(transactions)) return [];

    const grouped = transactions.reduce((acc, item) => {
        if (!item?.date || !item?.amount) return acc;

        const monthKey = moment(item.date).format("MMM YYYY");

        acc[monthKey] = (acc[monthKey] || 0) + Number(item.amount);
        return acc;
    }, {});

    return Object.entries(grouped).map(([month, amount]) => ({
        month,
        amount,
    }));
}, [transactions]);


    return (
        <div className="card">
            <div className="flex items-center justify-between">
                <div className="">
                    <h5 className="text-lg">Income Overview</h5>
                    <p className="text-xs text-gray-400 mt-0.5">
                        Track your earnings over time and analyze your income trends.
                    </p>
                </div>

                <button className="add-btn" onClick={onAddIncome}>
                    <LuPlus className='text-lg' />
                    Add Income
                </button>
            </div>

            <div className="mt-10">
                <CustomBarChart data={chartData} xKey='month' yKey='amount' />
            </div>
        </div>
    )
}

export default IncomeOverview