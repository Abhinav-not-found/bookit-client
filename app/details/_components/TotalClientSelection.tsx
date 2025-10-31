// _components/TotalClientSection.tsx
"use client"

import { useState } from "react"
import DateTimeSelector from "./DateTimeSelector"
import TotalCard from "@/components/general/TotalCard"

type Item = {
  name: string
  value: string | number
}

export default function TotalClientSection({
  data,
  total,
}: {
  data: Item[]
  total: number
}) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const isDisabled = !(selectedDate && selectedTime)

  return (
    <div className='mt-5'>
      <DateTimeSelector
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
      />
      <aside className='lg:w-1/3 mt-6'>
        <TotalCard data={data} label='Confirm' price={total} disabled={isDisabled} />
      </aside>
    </div>
  )
}
