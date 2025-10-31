"use client"
import { useRouter } from "next/navigation"
import { Button } from "../ui/button"
import Image from "next/image"

type DataProp = {
  _id: string
  title: string
  description: string
  location: string
  price: number
  images: string[]
  availableSlots: { date: string; time: string }[]
}

const Card = ({ data }: { data: DataProp }) => {
  const router = useRouter()
  return (
    <div
      onClick={(e) => {
        e.stopPropagation()
        router.push(`/details/${data._id}`)
      }}
      role='button'
      tabIndex={0}
      className='w-full max-w-sm h-80 bg-neutral-100 dark:bg-neutral-900/90 rounded-xl cursor-pointer'
    >
      <div className='relative w-full h-1/2 border-b rounded-t-xl overflow-hidden'>
        <Image
          src={data.images?.[0] || "/placeholder.jpg"}
          alt={data.title || "Experience"}
          fill
          sizes='(max-width: 768px) 100vw, 25vw'
          className='object-cover dark:brightness-90'
          priority={false}
        />
      </div>
      <div className='w-full h-1/2 py-4 px-5 flex flex-col justify-between'>
        <div>
          <div className='flex justify-between'>
            <p className='text-lg font-medium'>{data?.title || "Kayaking"}</p>
            <p className='text-sm bg-stone-200 dark:bg-stone-700/80 px-2 py-1 rounded-sm'>
              {data?.location || "Udupi"}
            </p>
          </div>
          <div className='mt-1 w-full'>
            <p className='text-sm text-muted-foreground '>{data.description}</p>
          </div>
        </div>

        <div className='mt-1 flex justify-between'>
          <div className='flex items-center gap-2'>
            <p className='text-sm'>From</p>
            <p className='text-lg font-medium'>₹{data.price}</p>
          </div>
          <Button
            size='sm'
            className='text-black'
            onClick={(e) => {
              e.stopPropagation()
              router.push(`/details/${data._id}`)
            }}
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Card
