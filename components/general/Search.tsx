"use client"

import { useState, useEffect } from "react"
import Fuse from "fuse.js"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import useSearchStore from "@/store/SearchStore"
import useExperienceStore from "@/store/ExperienceStore"
import { Search } from "lucide-react"

const SearchComponent = () => {
  const { setSearch } = useSearchStore()
  const { titles } = useExperienceStore()
  const [localSearch, setLocalSearch] = useState("")
  const [suggestion, setSuggestion] = useState("")

  const fuse = new Fuse(titles, { threshold: 0.3 })

  const handleSearch = () => {
    setSearch(localSearch)
  }

  useEffect(() => {
    if (localSearch.trim() === "") {
      setSearch("")
      setSuggestion("")
    }
  }, [localSearch, setSearch])

  useEffect(() => {
    if (localSearch.trim() === "") return
    const result = fuse.search(localSearch)[0]
    if (result) {
      setSuggestion(result.item)
    } else {
      setSuggestion("")
    }
  }, [localSearch])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch()
    if (e.key === "Tab" && suggestion) {
      e.preventDefault()
      setLocalSearch(suggestion)
    }
  }

  return (
    <div className='relative flex items-center gap-2'>
      <div className='relative w-full'>
        <Input
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder='Search experiences'
          className='bg-neutral-200/60 dark:bg-neutral-800 border-none rounded-md! md:pr-20 w-full placeholder:text-muted-foreground selection:bg-black/50 dark:selection:bg-white/50'
        />
        {suggestion &&
          suggestion.toLowerCase().startsWith(localSearch.toLowerCase()) && (
            <span className='absolute left-3 top-2 text-muted-foreground/50 text-[14px]'>
              {suggestion}
            </span>
          )}
      </div>
      <Button
        size={"default"}
        onClick={handleSearch}
        className='text-black hidden md:block'
      >
        Search
      </Button>
      <Button
        size={"icon-sm"}
        onClick={handleSearch}
        className='text-black block md:hidden pl-2'
      >
        <Search />
      </Button>
    </div>
  )
}

export default SearchComponent
