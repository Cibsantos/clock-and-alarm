import { FC } from 'react'

interface Props {
    title: string
}

const Header: FC<Props> = ({ title }) => {
    return (
        <header className='font-bold text-white text-center text-4xl pt-4'>
            {title}
        </header>
    )
}

export default Header