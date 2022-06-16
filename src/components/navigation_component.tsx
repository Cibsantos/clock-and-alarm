import { Component, FC } from 'react'
import { GlobeAltIcon } from "@heroicons/react/outline"
import { ClockIcon } from "@heroicons/react/outline"
import { Routes, Route, Link, BrowserRouter as Router, } from "react-router-dom"
import ClockComponent from './clock_component'


const NavigationComponent: FC = () => {

    const pages = [
        {
            href: '/',
            label: 'Relógio',
            icon: GlobeAltIcon,
            component: ClockComponent
        },
        {
            href: '/alarm',
            label: 'Alarme',
            icon: ClockIcon,
            component: ClockComponent

        }
    ]

    return (
        <nav className='container mx-auto bg-stone-900 border border-collapse border-stone-900 rounded-md'>
            <ul className='flex flex-row-1 justify-around'>

                {pages.map((page, index) => (
                    <li key={index} className='font-bold text-white items-center font-md'>
                        <page.icon className="h-5 w-5 ml-4"></page.icon>
                        <a href={page.href}>
                            {page.label}
                        </a>
                    </li>
                ))}

            </ul>

        </nav>
    )
}

export default NavigationComponent


