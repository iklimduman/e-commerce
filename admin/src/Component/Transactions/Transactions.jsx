import React from "react";
import "./Transactions.css";
import "../TeamMember/TeamMember.css";

import { latestTransactions } from "../../dummyData";

const Button = ({type}) => {
    return (
        <button className={"statusButton " + type}>{type}</button>
    )
}

const Transaction = () => {
    return (
        <div className="transaction">
            <table className="transaction-table">
                <tr className="transaction-tr">
                    <th className="transaction-th">
                        Customer
                    </th>
                    <th className="transaction-th">
                        Date
                    </th>
                    <th className="transaction-th">
                        Amount
                    </th>
                    <th className="transaction-th">
                        Status
                    </th>
                </tr>
                {latestTransactions.map((transaction) => {
                    return (
                        <tr className="transaction-tr-border">
                            <td className="user-td">
                                <img src={transaction.img} className="user-img"/>
                                <span>{transaction.customer}</span>
                            </td>
                            <td className="date-td">
                                {transaction.date}
                            </td>
                            <td className="amount-td">
                                {transaction.amount}
                            </td>
                            <td className="status-td">
                                <Button type={transaction.status}/>
                            </td>
                        </tr>
                    )
                })}

            </table>
        </div>
    )
}

const Transactions = () => {
    return (
        <div className="transaction-wrapper">
            <span className="title">Latest Transactions</span>
            <Transaction />
        </div>
    )
}

export default Transactions;