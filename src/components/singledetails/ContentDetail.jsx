import bodyPartImage from '../../assets/icons/body-part.png';
import targetImage from '../../assets/icons/target.png';
import equipmentImage from '../../assets/icons/equipment.png';

const ContentDetail = ({ bodyPart, target, equipment }) => {
    const extraDetail = [
        {
            icon: bodyPartImage,
            name: bodyPart,
        },
        {
            icon: targetImage,
            name: target,
        },
        {
            icon: equipmentImage,
            name: equipment,
        },
    ];

    return (
        <div className="flex flex-col items-start gap-5 md:flex-row lg:flex-col">
            {extraDetail.map((item, index) => {
                return (
                    <div key={index} className="flex items-center gap-x-6">
                        <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center">
                            <img src={item.icon} alt={item.name} />
                        </div>
                        <h3 className="capitalize text-xl py-4">{item.name}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default ContentDetail
