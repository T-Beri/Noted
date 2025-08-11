import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from "react-router"

export default function NavBar() {
  return (
    <header className='bg-primary/10 border-b border-base-content/10'>
        <div className='mx-auto max-w-6xl p-4 flex items-center justify-between'>
            <h1 className='text-3xl font-bold text-primary font-mono tracking-tighter'>Noted</h1>
            <div className="flex items-center gap-4">
                <Link to={"/create"} className="btn btn-neutral">
                    <FontAwesomeIcon icon="fa-solid fa-plus" className="size-5"></FontAwesomeIcon>
                    <span>New Note</span>
                </Link>
            </div>
        </div>
    </header>
  )
}
