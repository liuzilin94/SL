const stats = [
  { label: '已掌握词数', value: '156', icon: '📚' },
  { label: '连续学习', value: '12天', icon: '🔥' },
  { label: '今日学习', value: '5词', icon: '📖' },
  { label: '学习时长', value: '30h', icon: '⏱️' },
]

const achievements = [
  { name: '初次学习', icon: '🌟', earned: true },
  { name: '连续7天', icon: '🔥', earned: true },
  { name: '掌握50词', icon: '📚', earned: true },
  { name: '分享达人', icon: '📤', earned: false },
  { name: '社区之星', icon: '⭐', earned: false },
  { name: '手语大师', icon: '👑', earned: false },
]

const menuItems = [
  { name: '我的收藏', icon: '❤️', path: '' },
  { name: '生词本', icon: '📝', path: '' },
  { name: '学习历史', icon: '📜', path: '' },
  { name: '我的上传', icon: '📤', path: '' },
  { name: '消息通知', icon: '🔔', path: '' },
  { name: '设置', icon: '⚙️', path: '' },
]

export default function Profile() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* 用户信息 */}
      <div className="bg-white rounded-xl p-6 shadow-sm mb-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl">
            U
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">用户昵称</span>
              <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">Lv.5</span>
            </div>
            <div className="text-sm text-gray-500">学习时长：30小时</div>
          </div>
          <button className="text-gray-400">✏️</button>
        </div>

        {/* 学习数据 */}
        <div className="grid grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-xl mb-1">{stat.icon}</div>
              <div className="font-bold text-gray-800">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 成就徽章 */}
      <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
        <h3 className="font-bold mb-3">🎖️ 成就徽章</h3>
        <div className="grid grid-cols-6 gap-2">
          {achievements.map((item, i) => (
            <div
              key={i}
              className={`text-center p-2 rounded-lg ${
                item.earned ? 'bg-primary/10' : 'bg-gray-50'
              }`}
            >
              <div className={`text-2xl ${item.earned ? '' : 'opacity-30'}`}>
                {item.icon}
              </div>
              <div className={`text-xs mt-1 ${item.earned ? 'text-gray-700' : 'text-gray-400'}`}>
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 功能菜单 */}
      <div className="bg-white rounded-xl shadow-sm">
        {menuItems.map((item, i) => (
          <div
            key={i}
            className={`flex items-center justify-between p-4 ${
              i < menuItems.length - 1 ? 'border-b border-gray-100' : ''
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </div>
            <span className="text-gray-400">›</span>
          </div>
        ))}
      </div>
    </div>
  )
}
