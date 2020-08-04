import React, {useEffect} from 'react';
import {useLocation, Link} from '@reach/router';
import SubHeader from '../common/SubHeader';
import TeamDetail from './TeamDetail';
import Ids from '../common/Ids';

const Team = ({pathname}) => {

    const location = useLocation();
    
    useEffect(() => {
        pathname(location.pathname);
    }, []);


    return(
        <div >
            <SubHeader>
                <div className="sub-header__link">
                    <Link className="link team-link" to="/team"> <p>IT team</p> </Link>
                </div>
                <div className="sub-header__link">
                    <Link className="link team-link" to="/team"> <p>Finance team</p> </Link>
                </div>
                <div className="sub-header__link">
                    <Link className="link team-link" to="/team"> <p>People team</p> </Link>
                </div>
            </SubHeader>
            <TeamDetail />
            <Ids />
        </div>
    )
}

export default Team;