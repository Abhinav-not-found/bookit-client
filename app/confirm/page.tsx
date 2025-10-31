import { Button } from "@/components/ui/button"
import Image from "next/image"
import CircleCheckImage from "@/public/svg/circle-check.svg"
import Link from "next/link"

const ConfirmPage = () => {
  return (
    <main className='w-full min-h-[90vh] flex justify-center'>
      <section className='mt-20 text-center'>
        <div className='flex justify-center'>
          <Image
            src={CircleCheckImage}
            alt='Booking confirmed icon'
            className='size-20'
          />
        </div>
        <h1 className='text-3xl mt-6'>Booking Confirmed</h1>
        <p className='mt-2 text-muted-foreground'>Ref Id:HUF56&SO</p>
        <Link href={"/"}>
          <Button className='mt-8 rounded bg-neutral-200/80 text-neutral-500 dark:text-black hover:bg-neutral-200/80'>
            Back to Home
          </Button>
        </Link>
      </section>
    </main>
  )
}

export default ConfirmPage
