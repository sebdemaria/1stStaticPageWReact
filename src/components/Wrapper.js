import React from 'react'
import { MainSection } from './MainSection'
import { NosotrosSection } from './NosotrosSection'
import { HistorySection } from './HistorySection'
import { TechnologiesSection } from './TechnologiesSection'
import { GithubSection } from './GithubSection'

import '../styles/Wrapper.css'

export const Wrapper = () => {
    return (
        <div className="wrapper">
            <MainSection />
            <NosotrosSection />
            <HistorySection />
            <TechnologiesSection />
            <GithubSection />
            <div className="push"></div>
        </div>
    )
}
