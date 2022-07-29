import * as React from 'react'
import GlobalHeader from './global-header'
import NavigationBottom from './navigation-bottom'

export default function LayoutRoot({children}) {
  return (
    <main className="flex flex-col w-full min-h-screen bg-white">
        <GlobalHeader/>
        {children}
       <NavigationBottom/>
    </main>
  )
}
