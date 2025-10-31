import BackButton from "@/components/custom-buttons/BackButton"
import TotalCard from "@/components/general/TotalCard"
import CheckoutForm from "./_components/CheckoutForm"
import { totalCardData as data } from "@/lib/DummyData.js"

const CheckoutPage = () => {
  return (
    <main className='pt-4 md:pt-8 mb-20'>
      <header className='flex items-center gap-2'>
        <BackButton aria-label='Go back' />
        <h1>Checkout</h1>
      </header>
      
      <section className='flex flex-col lg:flex-row gap-5 md:gap-10 mt-2 md:mt-4'>
        <div className='flex-1 h-fit bg-neutral-100 dark:bg-neutral-800/50 rounded-xl p-6'>
          <CheckoutForm />
        </div>
        <div className='w-full lg:w-1/3 self-start'>
          <TotalCard
            data={data}
            label='Pay and Confirm'
            aria-label='pay and confirm'
            price={20}
            disabled
            link={false}
          />
        </div>
      </section>
    </main>
  )
}

export default CheckoutPage
