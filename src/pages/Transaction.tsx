import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import axios from 'axios'
import { TransactionDetail } from '../contants/Transaction'
import { currencyFormat, datetimeFormat } from '../common/Helper'

const Transaction = () => {
    const columns = ['Thu', 'Chi', 'Khác', 'Nội dung', 'Ghi chú', 'Địa điểm', 'Ngày']
    const baseAPIUrl = 'https://5f7fe845d6aabe00166f0bc7.mockapi.io/Transaction'
    const [transactionData, setTransactionData] = useState<TransactionDetail[]>()

    useEffect(() => {
        axios.get(baseAPIUrl).then((res) => {
            setTransactionData(res.data as TransactionDetail[])
            console.log(transactionData)
        })
    }, [])
    return (
        <Container>
            <div className="block w-full overflow-x-auto">
                <table className="w-full text-sm text-left text-color-1">
                    <thead className="text-xs text-color-1 uppercase bg-gray-400">
                        <tr>
                            {columns.map((item, index) => {
                                return (
                                    <th key={index} scope="col" className="p-3">{item}</th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {transactionData?.map((item, index) => {
                            return (
                                <tr key={index} className="bg-white border-b hover:bg-gray-100">
                                    <td className="py-4 px-3">{currencyFormat(item.Income)}</td>
                                    <td className="py-4 px-3">{currencyFormat(item.Spending)}</td>
                                    <td className="py-4 px-3">{item.TransactionInfo}</td>
                                    <td className="py-4 px-3">{item.Categories}</td>
                                    <td className="py-4 px-3">{item.Note}</td>
                                    <td className="py-4 px-3">{item.Place}</td>
                                    <td className="py-4 px-3">{datetimeFormat(parseInt(item.Date))}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </Container>
    )
}

export default Transaction