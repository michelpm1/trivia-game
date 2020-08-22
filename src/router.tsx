import * as React from 'react'
import { useSelector } from 'react-redux'
import { ProgressState } from './redux/types'
import IntroPage from './pages/IntroPage/IntroPage'
const Router = () => {
    const actualState = useSelector((state: ProgressState) => {
        const { status } = state;
        return status.progress
    });

    switch (actualState) {
        // case 'finished':
        //     return <EndPage />

        case 'started':
            return <div>test</div>

        default:
            return <IntroPage />
    }
}

export default Router;
