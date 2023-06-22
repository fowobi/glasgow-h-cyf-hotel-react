import { useEffect, useState } from 'react'

const CustomerProfile = ({ id }) => {
  const [customerData, setCustomerData] = useState(null)

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const response = await fetch(
          `https://cyf-react.glitch.me/customers/${id}`
        )
        const data = await response.json()
        setCustomerData(data)
      } catch (error) {
        console.error('Error fetching customer data:', error)
      }
    }

    fetchCustomerData()
  }, [id])

  if (!customerData) {
    return <div>Loading customer info...</div>
  }

  const { id: customerId, email, vip, phoneNumber } = customerData

  return (
    <div>
      <h2>Customer Profile</h2>
      <ul>
        <li>ID: {customerId}</li>
        <li>Email: {email}</li>
        <li>VIP: {vip ? 'Yes' : 'No'}</li>
        <li>Phone Number: {phoneNumber}</li>
      </ul>
    </div>
  )
}

export default CustomerProfile
