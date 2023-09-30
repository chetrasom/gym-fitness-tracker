import { collections } from "../../utils/staticData"

const Collection = () => {
    return (
        <section className='bg-bl'>
            <div className="container">

                <div className='text-center space-y-4 mb-16'>
                    <span className='text-primary font-medium tracking-widest uppercase'>WHY CHOSE US?</span>
                    <h3 className='text-white text-3xl lg:text-4xl'>PUSH YOUR LIMITS FORWARD</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {collections.map((item) => {
                        return (
                            <div key={item.id} className="text-center">
                                <div className="bg-bl2 w-24 h-24 rounded-full flex items-center justify-center mx-auto">
                                    <img src={item.icon} alt="" className="w-[46px] h-[46px]" />
                                </div>
                                <h3 className="text-white text-xl py-4">{item.title}</h3>
                                <p className="text-customGray text-[15px]">{item.text}</p>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}

export default Collection
