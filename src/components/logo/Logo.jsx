import { Link } from 'react-router-dom';
import { logo } from '../../utils/staticData';

const Logo = () => {
    return (
        <Link to="/">
            <img src={logo} alt="logo" />
        </Link>
    )
}

export default Logo
