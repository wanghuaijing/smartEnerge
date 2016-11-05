import React from 'react'
import Header from '../../components/Header'
import './HomeLayout.scss'
import '../../styles/core.scss'

export const HomeLayout = ({ children }) => (
  <div className='container text-center'>
    <Header />
    <div className='core-layout__viewport'>
      {children}
    </div>
  </div>
)

HomeLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default HomeLayout
