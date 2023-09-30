import banner from '../../assets/images/banner-bg.jpg';

const ClassesBanner = () => {
    return (
        <div 
            style={{ backgroundImage: `url(${banner})` }}
            className='min-h-[350px] lg:h-[500px] bg-no-repeat bg-center bg-cover flex items-center justify-center'
        >
            <div className='text-white text-center max-w-2xl'>
                <span className='text-primary text-xl capitalize'>join us now</span>
                <h3 className='text-3xl lg:text-5xl capitalize mt-2 mb-6'>
                    EXERCISE UNTIL THE BODY OBEYS.
                </h3>
                <p className='text-gray-300 mb-8 px-4'>
                    Integer placerat vitae metus posuere tincidunt. Nullam suscipit ante ac 
                    aliquet viverra vestibulum ante ipsum primis.
                </p>
                <button type='button' className='border-2 border-primary py-3 px-4 capitalize rounded-sm hover:bg-primary transition-all duration-150 ease-in-out'>
                    get discount
                </button>
            </div>
        </div>
    )
}

export default ClassesBanner
