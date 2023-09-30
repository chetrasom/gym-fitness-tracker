import { ourTeam } from '../utils/staticData';
import BreadCrumb from '../components/breadcrumb/BreadCrumb';
import TeamCard from '../components/about/TeamCard';

const OurTeamPage = () => {
    return (
        <>
            <BreadCrumb title='our team' />
            <section className='bg-bl4'>
                <div className="container">
                    {/* Heading */}
                    <div className="flex justify-between items-center">
                        <div>
                            <span className="text-primary font-medium tracking-widest uppercase">our team</span>
                            <h3 className="text-white text-3xl mt-2 mb-10">TRAIN WITH EXPERTS</h3>
                        </div>
                        <button 
                            type="button"
                            className="border-2 border-primary rounded-sm p-3 px-4 text-white text-lg 
                            capitalize hover:bg-primary transition-all ease-in-out duration-150"
                        >
                            appointment
                        </button>
                    </div>

                    {/* Team */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {ourTeam.map((item) => {
                            return <TeamCard key={item.id} item={item} />
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurTeamPage
