import './Nav.css'
import React from 'react'
import NavItem from './NavItem'

export default props =>
    <aside className='menu-area'>
        <nav className="menu">
            <NavItem path='/' icon='home' name='Home' />
            <NavItem path='/colaboradores' icon='user' name='Colaboradores' />
            <NavItem path='/clientes' icon='id-badge' name='Clientes' />
            <NavItem path='/servicos' icon='wrench' name='Serviços' />
            <NavItem path='/demandas' icon='clipboard' name='Ordem serviços' />
            <NavItem path='/relatorio' icon='list-alt' name='Relatório' />
        </nav>
    </aside>