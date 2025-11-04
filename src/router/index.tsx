import { createBrowserRouter } from 'react-router-dom';
import Layout from '@components/reusable/layout/Layout';
import Markets from '@pages/Markets';
import Portfolio from '@pages/Portfolio';
import AIAssistant from '@pages/AIAssistant';
import Watchlist from '@pages/Watchlist';
import Settings from '@pages/Settings';
import Help from '@pages/Help';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout><Markets /></Layout>,
    },
    {
        path: '/portfolio',
        element: <Layout><Portfolio /></Layout>,
    },
    {
        path: '/ai-assistant',
        element: <Layout><AIAssistant /></Layout>,
    },
    {
        path: '/watchlist',
        element: <Layout><Watchlist /></Layout>,
    },
    {
        path: '/settings',
        element: <Layout><Settings /></Layout>,
    },
    {
        path: '/help',
        element: <Layout><Help /></Layout>,
    },
    {
        path: '*',
        element: (
            <Layout>
                <div className="p-6 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">404</h1>
                    <p className="text-gray-400 text-lg">Page not found</p>
                </div>
            </Layout>
        ),
    },
]);
