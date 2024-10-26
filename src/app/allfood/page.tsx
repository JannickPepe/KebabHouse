import PagiBurger from '@/components/PagiBurger'
import PagiPizza from '@/components/PagiPizza'
import React from 'react'

const AllFood = () => {
    return (
        <main className="px-4 pt-32 pb-16 md:pt-40 md:pb-16 lg:pt-40 lg:pb-28 mx-auto lg:max-w-full lg:mx-0 bg-zinc-200 dark:bg-slate-900 space-y-4 md:space-y-10">
            
            {/* PIZZA */}
            <section>
                <PagiPizza />
            </section>

            {/* BURGER */}
            <section>
                <PagiBurger />
            </section>

            {/* PITABREAD */}
            <section>

            </section>

            {/* DURUM */}
            <section>

            </section>

            {/* MENUS */}
            <section>

            </section>

        </main>
    )
}

export default AllFood
