import React from 'react';
// import AboutUsFooter from '@/components/AboutUsFooter';
// import AboutUsPage from '@/components/AboutUsPage';
import ErrorToast from '@/components/ErrorToast';

export default function Page() { 
    return(
        <div>
            {/* <AboutUsPage /> */}
        <ErrorToast errorMessage="This is a test error message." />
        </div>
    )
}