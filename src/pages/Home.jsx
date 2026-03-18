import { Link } from 'react-router-dom'

const features = [
  { name: '标准词典', icon: '📖', path: '/dictionary', desc: '国家通用手语' },
  { name: '方言专区', icon: '🌍', path: '/dictionary', desc: '各地手语差异' },
  { name: '智能学习', icon: '📹', path: '/learn', desc: 'AI实时识别' },
  { name: '记忆曲线', icon: '🧠', path: '/learn', desc: '科学复习' },
]

const dailyTips = [
  { title: '手语问候语', desc: '见面问好用"你好"' },
  { title: '双手拇指语', desc: '双手拇指交替表示数字' },
  { title: '表情的重要性', desc: '手语需要配合表情才能准确表达' },
]

const recentWords = [
  { word: '你好', meaning: '问候语', status: '已掌握' },
  { word: '谢谢', meaning: '感谢', status: '学习中' },
  { word: '再见', meaning: '告别', status: '已掌握' },
  { word: '对不起', meaning: '道歉', status: '未学习' },
]

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* 欢迎横幅 */}
      <div className="bg-gradient-to-r from-primary to-purple-500 rounded-2xl p-6 text-white mb-6">
        <h2 className="text-2xl font-bold mb-2">欢迎来到手语学习平台</h2>
        <p className="opacity-90">用手语传递温暖，让沟通无障碍</p>
        <div className="flex gap-4 mt-4">
          <div className="bg-white/20 rounded-lg px-4 py-2">
            <div className="text-2xl font-bold">156</div>
            <div className="text-xs">已掌握词</div>
          </div>
          <div className="bg-white/20 rounded-lg px-4 py-2">
            <div className="text-2xl font-bold">12</div>
            <div className="text-xs">连续天数</div>
          </div>
          <div className="bg-white/20 rounded-lg px-4 py-2">
            <div className="text-2xl font-bold">30h</div>
            <div className="text-xs">学习时长</div>
          </div>
        </div>
      </div>

      {/* 功能入口 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {features.map(item => (
          <Link
            key={item.name}
            to={item.path}
            className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-3xl mb-2">{item.icon}</div>
            <div className="font-medium text-gray-800">{item.name}</div>
            <div className="text-xs text-gray-500">{item.desc}</div>
          </Link>
        ))}
      </div>

      {/* 每日科普 */}
      <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-3">每日一科普</h3>
        <div className="space-y-2">
          {dailyTips.map((tip, i) => (
            <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-primary">💡</span>
              <div>
                <div className="font-medium text-sm">{tip.title}</div>
                <div className="text-xs text-gray-500">{tip.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 最近学习 */}
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-gray-800">最近学习</h3>
          <Link to="/learn" className="text-sm text-primary">查看全部</Link>
        </div>
        <div className="space-y-2">
          {recentWords.map((item, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium">{item.word}</div>
                <div className="text-xs text-gray-500">{item.meaning}</div>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                item.status === '已掌握' ? 'bg-green-100 text-green-700' :
                item.status === '学习中' ? 'bg-yellow-100 text-yellow-700' :
                'bg-gray-100 text-gray-500'
              }`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
