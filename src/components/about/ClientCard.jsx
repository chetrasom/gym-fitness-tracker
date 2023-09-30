import { BsStarFill } from 'react-icons/bs';

const ClientCard = ({ item }) => {
    return (
        <div className='text-white'>
            <figure className='w-44 h-44 rounded-full overflow-hidden mx-auto'>
                <img src={item.imgUrl} alt={item.name} className='object-cover w-full h-full' />
            </figure>
            <p className='max-w-xl mx-auto text-[15px] text-customGray pt-5 pb-4'>{item.text}</p>
            <h3 className='capitalize text-primary tracking-wider mb-3'>{item.name}</h3>
            <div className='flex items-center justify-center gap-x-1 text-[#ffbf00]'>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
            </div>
        </div>
    )
}

export default ClientCard
