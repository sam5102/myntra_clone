import React from 'react'

const DisplayOrder = (props) => {

   const renderTable = ({orderData}) => {
        if (orderData) {
            return orderData.map((item) => {
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.product}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>Rs. {item.cost}</td>
                        <td>{item.date}</td>
                        <td>{item.status}</td>
                        <td>{item.bank_name}</td>
                    </tr>
                )
            })
        }
    }

  return (
    <div className="container" style={{marginTop: 120}}>
        <h3 style={{textAlign: 'center', marginBottom: 50}}>My Orders</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>OrderId</th>
                    <th>Product Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Cost</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Bank Name</th>
                </tr>
            </thead>
            <tbody>
                {renderTable(props)}
            </tbody>
        </table>
    </div>
  )
}

export default DisplayOrder