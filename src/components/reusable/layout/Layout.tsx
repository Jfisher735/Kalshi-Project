import React, { type JSX } from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { layoutPropsInterface } from '@utils/interfaces';

const Layout: React.FC<layoutPropsInterface> = ({ children }): JSX.Element => {
    const location = useLocation();

    const navigationItems = [
        { name: 'Markets', path: '/', icon: '📊' },
        { name: 'Portfolio', path: '/portfolio', icon: '💼' },
        { name: 'AI Assistant', path: '/ai-assistant', icon: '🤖' },
        { name: 'Watchlist', path: '/watchlist', icon: '⭐' },
        { name: 'Settings', path: '/settings', icon: '⚙️' },
        { name: 'Help', path: '/help', icon: '❓' }
    ];

    return (
        <div className="flex h-screen w-full overflow-hidden lg:flex-row flex-col" style={{ backgroundColor: '#050811' }}>
            {/* Sidebar */}
            <aside className="lg:w-1/6 lg:min-w-52 lg:max-w-64 w-full lg:h-auto h-16 text-white lg:p-4 p-2 transition-all duration-300" style={{ borderRight: '1px solid #292C35' }}>
                {/* Logo */}
                <div className="flex items-center mb-8 lg:mb-12">
                    <div className="w-8 h-8 bg-white rounded flex items-center justify-center mr-3">
                        <span className="text-black font-bold">+</span>
                    </div>
                    <div className="lg:block hidden">
                        <h1 className="text-lg font-bold text-white">Predication Market</h1>
                        <p className="text-sm font-bold text-white">Analytics</p>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="space-y-2 lg:block hidden">
                    {navigationItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                                    isActive 
                                        ? 'text-white' 
                                        : 'text-white hover:bg-gray-700'
                                }`}
                                style={isActive ? {
                                    background: 'linear-gradient(92deg, #3B3F4B 0.74%, #111625 98.57%)'
                                } : {}}
                            >
                                <span className="mr-3 text-lg">{item.icon}</span>
                                <span className="font-bold">{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile Navigation */}
                <nav className="flex lg:hidden space-x-4 overflow-x-auto">
                    {navigationItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`flex flex-col items-center px-3 py-2 rounded-lg transition-all duration-200 whitespace-nowrap ${
                                    isActive 
                                        ? 'text-white' 
                                        : 'text-white hover:bg-gray-700'
                                }`}
                                style={isActive ? {
                                    background: 'linear-gradient(92deg, #3B3F4B 0.74%, #111625 98.57%)'
                                } : {}}
                            >
                                <span className="text-lg mb-1">{item.icon}</span>
                                <span className="text-xs font-bold">{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Sign Out */}
                <div className="mt-auto lg:block hidden">
                    <button className="flex items-center w-full px-4 py-3 text-white hover:bg-gray-700 rounded-lg transition-all duration-200">
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span className="font-bold">Sign Out</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="lg:w-5/6 w-full lg:flex-1 flex-1 flex flex-col transition-all duration-300" style={{ backgroundColor: '#050811' }}>
                {/* Header */}
                <header className="px-6 py-4 flex-shrink-0" style={{ backgroundColor: '#050811', borderBottom: '1px solid #292C35' }}>
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-white">Dashboard</h1>
                            <p className="text-gray-400">Let's Do Some Workout Today......</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            {/* Notification Bell */}
                            <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.5 19.5L19.5 4.5M15 17l-5-5m5 5l-5-5" />
                                </svg>
                            </button>
                            
                            {/* User Profile */}
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                    <span className="text-white font-semibold">SJ</span>
                                </div>
                                <div>
                                    <p className="text-white font-medium">Sarah Johnson</p>
                                    <p className="text-green-400 text-sm">• Active</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <div className="flex-1 overflow-y-auto">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default Layout;