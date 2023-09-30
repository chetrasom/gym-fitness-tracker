
const TeamCard = ({ item }) => {
    return (
        <div className='bg-bl1 overflow-hidden rounded-sm'>
            <figure className='w-full h-[212px] md:h-[380px] bg-orange-300'>
                <img src={item.imgUrl} alt={item.name} className='w-full h-full object-cover' />
            </figure>
            <div className='p-3'>
                <h4 className='text-xl text-white font-bold capitalize'>
                    {item.name}
                </h4>
                <span className='text-customGray text-[14px] tracking-wide uppercase font-medium'>gym trainer</span>
                
            </div>
        </div>
    )
}

export default TeamCard
