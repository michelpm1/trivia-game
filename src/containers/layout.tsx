import * as React from 'react';
import DefaultLoading from '../components/defaultLoading/defaultLoading';
import { useSelector } from 'react-redux';
import { ProgressState } from '../redux/types';
import "react-loadingmask/dist/react-loadingmask.css";

interface LayoutProps {
    children: any
}

const Layout = (props: LayoutProps) => {
    const isLoading = useSelector((state: ProgressState) => state.loading)

    return <div>
        {isLoading && <DefaultLoading />}
        {props.children}
    </div>
}

export default Layout
