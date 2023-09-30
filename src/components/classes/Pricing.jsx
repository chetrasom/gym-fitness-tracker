import { pricingPlan } from "../../utils/staticData"

const Pricing = () => {
    return (
        <section className='bg-bl4'>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:max-w-md mx-auto lg:max-w-none">
                    {pricingPlan.map((plan) => {
                        return (
                            <div key={plan.id} className="border border-bl3 py-12 px-6 text-center rounded-sm 
                            text-white -skew-y-6 group hover:bg-white hover:text-bl1 transition-all duration-300 ease-in-out">
                                <div className="skew-y-6">
                                    <h4 className="text-2xl font-semibold">{plan.title}</h4>
                                    <h1 className="text-6xl text-primary py-4">$ {plan.price}</h1>
                                    <h5 className="uppercase text-customGray font-semibold mb-6 group-hover:text-bl">
                                        single class
                                    </h5>
                                    <ul className="text-customGray text-[15px] space-y-3 group-hover:text-bl mb-8">
                                        <li>{plan.text1}</li>
                                        <li>{plan.text2}</li>
                                        <li>{plan.text3}</li>
                                        <li>{plan.text4}</li>
                                        <li>{plan.text5}</li>
                                        <li>{plan.text6}</li>
                                    </ul>
                                    <button 
                                        type="button" 
                                        className="bg-bl2 px-16 py-3 rounded-sm text-[15px] font-medium uppercase tracking-wider group-hover:bg-primary group-hover:text-white">
                                        enroll now
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Pricing
