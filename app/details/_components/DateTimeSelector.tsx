"use client"
import { useState } from "react"

export default function DateTimeSelector() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const dates = ["Oct 22", "Oct 23", "Oct 24"]
  const times = ["07:00 am", "10:00 am", "03:00 pm"]

  return (
    <>
      <div className='mt-5'>
        <p className='font-medium text-lg'>Choose date</p>
        <div className='mt-2 flex gap-4'>
          {dates.map((d) => (
            <button
              key={d}
              onClick={() => setSelectedDate(d)}
              className={`py-1 px-3 rounded cursor-pointer border ${
                selectedDate === d
                  ? "bg-primary text-black dark:text-black border-transparent"
                  : "bg-transparent text-muted-foreground dark:border-neutral-700"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      <div className='mt-5'>
        <p className='font-medium text-lg'>Choose time</p>
        <div className='mt-2 flex gap-4'>
          {times.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedTime(t)}
              className={`py-1 px-3 rounded cursor-pointer border ${
                selectedTime === t
                  ? "bg-primary text-black dark:text-black border-transparent"
                  : "bg-transparent text-muted-foreground dark:border-neutral-700"
              }`}
            >
              {t} <span className='text-red-600 text-sm'>4 left</span>
            </button>
          ))}
        </div>
        <p className='text-xs mt-2 text-muted-foreground'>
          All times are in IST(GMT + 5:30)
        </p>
      </div>
    </>
  )
}
