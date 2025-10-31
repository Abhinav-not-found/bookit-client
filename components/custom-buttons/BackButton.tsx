'use client'
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

const BackButton = () => {
  const router = useRouter()
  return (
    <Button
      onClick={() => router.back()}
      variant={"ghost"}
      className='flex gap-2'
    >
      <ArrowLeft />
    </Button>
  )
}

export default BackButton
