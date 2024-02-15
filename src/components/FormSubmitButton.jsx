"use client";

import {experimental_useFormStatus as useFormStatus} from 'react-dom'

export default function FormSubmitButton({children,className,type,...props}){
    const {loading } =useFormStatus();
    return(
        <button {...props} className={`btn btn-primary ${className}`} type={type} disabled={loading}>
            {loading && <span className='loading loading-spinner'></span>}

            {children}
        </button>
    )
}