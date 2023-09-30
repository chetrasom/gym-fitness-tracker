import BreadCrumb from "../components/breadcrumb/BreadCrumb"
import Classes from '../components/classes/Classes';
import ClassesBanner from "../components/classes/ClassesBanner";
import Pricing from "../components/classes/Pricing";

const ClassesPage = () => {
    return (
        <div className='bg-orange-100'>
            <BreadCrumb title="classes" />
            <Classes />
            <ClassesBanner />
            <Pricing />
        </div>
    )
}

export default ClassesPage
