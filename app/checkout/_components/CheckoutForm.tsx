"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"
import { useState } from "react"

const CheckoutForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [code, setCode] = useState("")
  const [loading, setLoading] = useState(false)

  const handleApplyPromo = async () => {
    setLoading(true)
    try {
      const res = await fetch("https://bookit-server-vysj.onrender.com/promo/validate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      })
      const result = await res.json()
      console.log(result)
      if (result.valid) {
        alert(`Promo applied: ${result.discount}% off`)
      } else {
        alert("Invalid or expired promo code")
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form>
      <div className='flex flex-col md:flex-row gap-6'>
        <div className='md:w-1/2'>
          <label htmlFor='fullname' className='text-muted-foreground'>
            Full name
          </label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Your name'
            className='mt-1 bg-neutral-200 py-5'
            id='fullname'
            name='fullname'
          />
        </div>
        <div className='md:w-1/2'>
          <label htmlFor='email' className='text-muted-foreground'>
            Email
          </label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Your email'
            className='mt-1 bg-neutral-200 py-5'
            id='email'
            name='email'
          />
        </div>
      </div>
      <div className='mt-4 flex gap-6 items-center'>
        <Input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder='Promo code'
          className='mt-1 bg-neutral-200 py-5'
        />
        <Button
          onClick={handleApplyPromo}
          type='button'
          className='bg-black dark:bg-neutral-300 text-white dark:text-black py-5 hover:bg-black/60'
        >
          {loading ? (
            <>
              <Spinner />
              <p>Loading</p>
            </>
          ) : (
            "Apply"
          )}
        </Button>
      </div>
      <div className='mt-4 flex items-center gap-2'>
        <input type='checkbox' id='agree' name='agree' />
        <label
          htmlFor='agree'
          className='text-muted-foreground text-xs md:text-sm'
        >
          I agree to the terms and safety policy
        </label>
      </div>
    </form>
  )
}

export default CheckoutForm
