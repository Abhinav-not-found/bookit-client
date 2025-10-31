import BackButton from "@/components/custom-buttons/BackButton"
import TotalCard from "@/components/general/TotalCard"
import { getExperienceDetail } from "@/helper/GetExperience"
import Image from "next/image"
import DateTimeSelector from "../_components/DateTimeSelector"

// make the button disable work
// make button data display from details(dynamic)

type DetailPageProps = {
  params: { id: string }
}

export default async function DetailPage({ params }: DetailPageProps) {
  const resolvedParams = await params

  const details = await getExperienceDetail(resolvedParams.id)
  const quantity = 1
  const subtotal = details.price * quantity
  const taxRate = 0.08
  const taxes = Math.round(subtotal * taxRate)
  const total = subtotal + taxes

  const data = [
    { name: "Starts at", value: `$${details.price}` },
    { name: "Quantity", value: quantity },
    { name: "Subtotal", value: `$${subtotal}` },
    { name: "Taxes", value: `$${taxes}` },
  ]

  return (
    <main className='pt-4 md:pt-8 mb-20'>
      <header className='flex items-center gap-2'>
        <BackButton aria-label='Go back' />
        <h1>Details</h1>
      </header>

      <div className='flex flex-col lg:flex-row gap-10 md:mt-4'>
        <section className='flex-1'>
          <div className='relative w-full h-40 md:h-96 bg-neutral-200 dark:bg-neutral-900 rounded-md md:rounded-xl overflow-hidden'>
            <Image
              src={details.images?.[0] || "/placeholder.jpg"}
              alt={details.title || "Experience"}
              fill
              className='object-cover dark:brightness-90'
              sizes='(max-width: 768px) 100vw, 50vw'
            />
          </div>

          <div className='mt-5'>
            <p className='text-2xl'>{details.title}</p>
            <p className='mt-5 text-muted-foreground'>{details.description}</p>
          </div>
          <DateTimeSelector />
          <div className='mt-5'>
            <p className='font-medium text-lg'>About</p>
            <div className='mt-2 bg-neutral-100 dark:bg-neutral-900 py-2 px-3 rounded'>
              <p className='text-muted-foreground'>
                Scenic routes, trained guides, and safety briefing. Minimum age
                10.
              </p>
            </div>
          </div>
        </section>

        <aside className='lg:w-1/3 h-screen'>
          <TotalCard data={data} label='Confirm' price={total} disabled={false} link={true}  />
        </aside>
      </div>
    </main>
  )
}
