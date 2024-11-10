
import React from 'react'

export default function Page() {

    const handleSubmit = async() => {
        fetch("/api/create-checkout-session",{
            method: "POST"
        }
        )
    }
  return (
    <form onSubmit={handleSubmit} method="POST">
      <button type="submit">Checkout</button>
    </form>
  
  )
}
