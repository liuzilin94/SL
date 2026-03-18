import { Outlet, NavLink } from 'react-router-dom'

const navItems = [
  { path: '/', label: '首页', icon: '🏠' },
  { path: '/dictionary', label: '词典', icon: '📖' },
  { path: '/learn', label: '学习', icon: '📹' },
  { path: '/community', label: '社区', icon: '💬' },
  { path: '/profile', label: '我的', icon: '👤' },
]

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* PC端顶部导航 */}
      <header className="hidden md:flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200">
        <div className="flex items-center gap-8">
          <h1 className="text-xl font-bold text-primary">手语学习平台</h1>
          <nav className="flex gap-6">
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium ${isActive ? 'text-primary' : 'text-gray-600 hover:text-primary'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="搜索词条..."
            className="px-4 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:border-primary"
          />
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm">
            U
          </div>
        </div>
      </header>

      {/* 移动端顶部 */}
      <header className="md:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
        <h1 className="text-lg font-bold text-primary">手语学习</h1>
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm">
          U
        </div>
      </header>

      {/* 主内容区 */}
      <main className="pb-20 md:pb-0">
        <Outlet />
      </main>

      {/* 移动端底部导航 */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2">
        {navItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 text-xs ${isActive ? 'text-primary' : 'text-gray-500'}`
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
