import React, {useEffect} from 'react';
import {useLocation, Link, useParams} from '@reach/router';

import SubHeader from '../common/SubHeader';
import TeamDetail from './TeamDetail';
import Ids from '../common/Ids';

const Team = ({pathname}) => {

    const location = useLocation();

    const locationDepartment = location.pathname.split('/')[2];
    
    useEffect(() => {
        pathname(location.pathname);
    }, [location.pathname])


    const departments = [{id: 1, name: 'IT'}, {id: 2, name: 'Finance'} ];

    const displaySubheaderLink = () => {
        return departments.map(department => {
            return (
                <div className={`sub-header__link ${locationDepartment.toLowerCase() === department.name.toLowerCase() ? 'active' : ''}`} key={department.id}>
                    <Link className={`link team-link `} to={`/team/${department.name.toLowerCase()}`}> <p>{department.name} team</p> </Link>
                </div>
            )
        })
    }

    return(
        <div className="our-team" >
            <SubHeader>
                {displaySubheaderLink()}
            </SubHeader>
            <TeamDetail />
            <Ids />
        </div>
    )
}


export default Team;