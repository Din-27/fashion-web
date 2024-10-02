import React from 'react'
import { Footer } from '..'

export default function FooterNavWrapper({ children }) {
    return (
        <>
            {children}
            <Footer />
        </>
    )
}
