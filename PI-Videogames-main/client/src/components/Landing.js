import React from 'react'
import { Card } from './Card'
import { ContactContainer } from './Contactcontainer'
import { Header } from './Header'
import Menu from './Menu'

export const Home = () => {
  return (
    <div>
       <Header />
       <Menu />
      <Card
        className='section'
        img='./Capture1.PNG'
        title='About the Company'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.'
      />

      <Card
        className='section bg-grey'
        img='./Capture3.PNG'
        title='Our Values'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.'
      />

      <Card
        className='section'
        img='./Capture1.PNG'
        title='Our Mission'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.'
      />
      <ContactContainer />
    </div>
  )
}
