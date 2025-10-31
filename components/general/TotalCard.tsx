"use client"
import { useRouter } from "next/navigation"
import { Button } from "../ui/button"

type Item = {
  name: string
  value: string | number
}

type TotalCardProps = {
  data: Item[]
  label: string
  price: number
  disabled: boolean
  link: boolean
}

const TotalCard = ({ label, data, price, disabled, link }: TotalCardProps) => {
  const router = useRouter()
  const handleSubmit = () => {}
  return (
    <div className='w-full h-fit bg-neutral-100 dark:bg-neutral-900 rounded-xl py-4 px-5 space-y-4'>
      {data.length === 0 ? (
        <p className='text-muted-foreground text-sm'>No items available</p>
      ) : (
        <dl className='space-y-2'>
          {data.map((item, index) => (
            <div key={index} className='flex justify-between'>
              <dt className='text-muted-foreground'>{item.name}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      )}
      <div className='pt-4 border-t flex justify-between'>
        <p className='text-xl font-medium'>Total</p>
        <p className='text-xl font-medium'>₹{price}</p>
      </div>
      <Button
        onClick={() => (link ? router.push("/checkout") : handleSubmit)}
        disabled={disabled}
        className={`w-full bg-neutral-300/60  dark:bg-neutral-800 py-6 text-lg text-black/40 dark:text-neutral-200 ${
          disabled ? "hover:bg-primary cursor-none" : "hover:bg-neutral-300/60"
        }`}
        aria-label={`Proceed to ${label}`}
      >
        {label}
      </Button>
    </div>
  )
}

export default TotalCard
