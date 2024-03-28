import Head from 'next/head';
import React, { useState } from 'react'
import { useRouter } from 'next/router';

function TermsandCond() {


    const router = useRouter();

    function back(){

        return router.back();
    }
   
  return (
    <div className='flex flex-col min-h-screen text-slate-800 crimson bg-slate-100 text-lg  mx-auto p-5 space-y-2 items-center justify-center '>
         <Head>

{/* title */}
<title>Terms and Conditions</title>
{/* meta tags */}
<meta name="description" content=" Welcome to Swiftfund, where your financial goals meet possibility! Get ready to embark on a seamless journey towards your dreams with our hassle-free lending solutions. Whether you're looking to fund your next big project, consolidate debt, or seize a lucrative opportunity, we've got you covered. Explore our range of flexible loan options tailored to fit your needs, backed by competitive rates and expert guidance. Say goodbye to financial barriers and hello to a brighter future with SwiftFund. Start your application today and let's make your aspirations a reality!" />

{/* header links */}
<link rel="icon" href="./static/logo.ico" />
</Head>
        <div className='text-2xl font-semibold'>
        Terms and Conditions: SwiftFund Fast Loans
        </div>
     <p>
     Welcome to SwiftFund Fast Loans. By using our services, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully before accessing or using our services.
<br />
<span className='font-semibold'>Eligibility:</span>

    To apply for a loan with SwiftFund, you must be at least 18 years old.
    You must provide accurate and truthful information during the application process.
    SwiftFund reserves the right to verify your identity and creditworthiness before approving your loan application.
<br />
<span className='font-semibold'>Loan Approval:</span>
    Loan approval is subject to credit assessment and verification of your financial circumstances.
    SwiftFund reserves the right to approve or decline loan applications at its discretion.
    Loan approval may vary based on factors such as income, credit history, and loan amount requested.
    <br />
<span className='font-semibold'>Loan Terms:</span>
    Loan terms, including loan amount, interest rate, and repayment schedule, will be provided to you upon approval.
    It is your responsibility to review and understand the terms of the loan before accepting the offer.
    Any changes to the loan terms must be agreed upon by both parties in writing.
    <br />
<span className='font-semibold'>Fees and Charges:</span>
    SwiftFund may charge fees and interest on loans in accordance with the agreed-upon terms.
    You are responsible for all fees and charges associated with the loan, including but not limited to origination fees, late payment fees, and prepayment penalties.
    Details of applicable fees and charges will be provided to you in the loan agreement.
    <br />
<span className='font-semibold'>Repayment:</span>

    You are required to make timely repayments according to the agreed-upon schedule.
    Failure to repay the loan on time may result in additional fees, penalties, and adverse effects on your credit score.
    If you anticipate difficulty in making repayments, please contact SwiftFund immediately to discuss possible alternatives.
    <br />
<span className='font-semibold'>Privacy and Security:</span>

    SwiftFund is committed to protecting your privacy and safeguarding your personal information.
    Your information will be used solely for the purpose of processing your loan application and will not be shared with third parties without your consent.

    <br />
<span className='font-semibold'>Governing Law:</span>


    These terms and conditions shall be governed by and construed in accordance with the law.
    Any disputes arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the court.
    <br />
<span className='font-semibold'>Changes to Terms:</span>

    SwiftFund reserves the right to modify or update these terms and conditions at any time without prior notice.
    It is your responsibility to regularly review these terms for any changes.

By using SwiftFund Fast Loans, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions. If you do not agree with any part of these terms, please do not use our services.
     </p>
     <diV className="text-3xl font-semibold text-white bg-green-500 rounded rounded-lg p-5 hover:bg-green-600 text-center cursor-pointer my-3" onClick={back} >
    I&apos;m done reading
     </diV>
    </div>
  )
}

export default TermsandCond;