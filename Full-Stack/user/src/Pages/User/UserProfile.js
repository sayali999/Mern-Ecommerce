import React from 'react'
import { useParams } from 'react-router-dom'
import UserSidebar from './UserSidebar';
import UserAccount from './UserAccount';
import UserAddress from './UserAddress';
import UserOrder from './UserOrder';
import UserPayment from './UserPayment';
import Whishlist from '../Whishlist/Whishlist';


const UserProfile = () => {
    const { activepage } = useParams();


    return (
        <section>
            <div className='userprofile container p-5 my-2 '>
                <div className='row'>
                    <div className='col-md-3 py-3 px-2'>
                        <UserSidebar activepage={activepage} />
                    </div>
                    <div className='col-md-9 p-3'>
                        
                        {activepage === 'user-account' && <UserAccount />}
                        {activepage === 'user-address' && <UserAddress />}
                        {activepage === 'user-order' && <UserOrder />}
                        {activepage === 'user-payment' && <UserPayment />}
                        {activepage === 'whishlist' && <Whishlist />}

                        
                       

                    </div>
                </div>




            </div>

        </section>
    )
}

export default UserProfile
