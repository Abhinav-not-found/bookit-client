"use client"

import { useEffect, useState, useMemo } from "react"
import Fuse from "fuse.js"
import Card from "@/components/general/Card"
import getExperience from "@/helper/GetExperience"
import useSearchStore from "@/store/SearchStore"
import useExperienceStore from "@/store/ExperienceStore"

type Experience = {
  _id: string
  title: string
  description: string
  location: string
  price: number
  images: string[]
  availableSlots: { date: string; time: string }[]
}

export default function Home() {
  const [data, setData] = useState<Experience[]>([])
  const { search } = useSearchStore()
  const { setTitles } = useExperienceStore()

  useEffect(() => {
    const fetchData = async () => {
      const res = await getExperience()
      setData(res)
      setTitles(res.map((item: any) => item.title))
    }
    fetchData()
  }, [setTitles])

  const fuse = useMemo(() => {
    if (data.length === 0) return null
    return new Fuse(data, {
      keys: ["title", "location", "description"],
      threshold: 0.3,
    })
  }, [data])

  const filteredData =
    !search?.trim()
      ? data
      : fuse
      ? fuse.search(search).map((result) => result.item)
      : data

  return (
    <main className="w-full pt-10 grid grid-cols-1 md:grid-cols-4 auto-rows-max gap-x-8 gap-y-10">
      {filteredData.map((item) => (
        <Card key={item._id} data={item} />
      ))}
    </main>
  )
}
