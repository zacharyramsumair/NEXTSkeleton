'use client';

import { signIn } from '@/auth';
import { Button } from './ui/button';
import { useSession } from 'next-auth/react';

// Customer portal link
const customerPortalLink =
// found when doing unsells
    'https://billing.stripe.com/p/login/test_fZe8yA9a36rva9q9AA';

const ButtonCustomerPortal = ({session}:any) => {

    console.log("is useSession being used",session)

    if (session) {
        return (
            <a
                href={
                    customerPortalLink +
                    '?prefilled_email=' +
                    session.user?.email
                }
                className="btn"
            >
                Billing
            </a>
        );
    }

  
};

export default ButtonCustomerPortal;