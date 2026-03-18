import { useState } from 'react'

const tabs = ['关注', '推荐', '最新']

const posts = [
  {
    id: 1,
    user: { name: '小王同学', avatar: '👤', level: 'Lv.5' },
    time: '3分钟前',
    content: '今日学习打卡！已掌握50个词汇，继续加油💪',
    likes: 28,
    comments: 5,
    images: ['📹'],
  },
  {
    id: 2,
    user: { name: '手语达人', avatar: '👤', level: 'Lv.8' },
    time: '1小时前',
    content: '分享一个新学到的手语手势——"爱"❤️ 双手拇指交叉放在胸口，代表爱意',
    likes: 56,
    comments: 12,
    images: ['🖐️'],
  },
  {
    id: 3,
    user: { name: '静静学手语', avatar: '👤', level: 'Lv.3' },
    time: '2小时前',
    content: '有没有一起学习手语的小伙伴？可以互相监督~',
    likes: 15,
    comments: 8,
    images: [],
  },
]

const rankList = [
  { rank: 1, name: '手语大神', points: 1250, badge: '🏆' },
  { rank: 2, name: '小王同学', points: 980, badge: '🥈' },
  { rank: 3, name: '爱手语', points: 856, badge: '🥉' },
  { rank: 4, name: '学习使我快乐', points: 720, badge: '' },
  { rank: 5, name: '手语小白', points: 650, badge: '' },
]

const challenges = [
  { title: '每日挑战', desc: '用"你好"拍照打卡', progress: '3/7天', color: 'bg-blue-500' },
  { title: '周末挑战', desc: '学会5个新词汇', progress: '2/5', color: 'bg-purple-500' },
]

export default function Community() {
  const [activeTab, setActiveTab] = useState('推荐')

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* 标签切换 */}
      <div className="flex gap-4 mb-4 border-b border-gray-200">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 px-2 text-sm font-medium ${
              activeTab === tab
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-500'
            }`}
          >
            {tab}
          </button>
        ))}
        <button className="ml-auto text-primary text-sm">➕ 发布</button>
      </div>

      <div className="md:flex gap-6">
        {/* 动态列表 */}
        <div className="flex-1 space-y-4">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  {post.user.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{post.user.name}</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                      {post.user.level}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">{post.time}</div>
                </div>
              </div>

              <p className="text-gray-700 mb-3">{post.content}</p>

              {post.images.length > 0 && (
                <div className="flex gap-2 mb-3">
                  {post.images.map((img, i) => (
                    <div key={i} className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                      {img}
                    </div>
                  ))}
                </div>
              )}

              <div className="flex gap-6 text-gray-500 text-sm">
                <button className="flex items-center gap-1">
                  <span>👍</span> {post.likes}
                </button>
                <button className="flex items-center gap-1">
                  <span>💬</span> {post.comments}
                </button>
                <button className="flex items-center gap-1">
                  <span>📤</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 右侧边栏 - PC端显示 */}
        <div className="hidden md:block w-72 space-y-4">
          {/* 排行榜 */}
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h3 className="font-bold mb-3">🏆 手语榜单</h3>
            <div className="space-y-2">
              {rankList.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50">
                  <span className={`w-6 text-center font-bold ${
                    item.rank === 1 ? 'text-yellow-500' :
                    item.rank === 2 ? 'text-gray-400' :
                    item.rank === 3 ? 'text-orange-400' : 'text-gray-500'
                  }`}>
                    {item.badge || item.rank}
                  </span>
                  <span className="flex-1 font-medium text-sm">{item.name}</span>
                  <span className="text-xs text-gray-400">{item.points}分</span>
                </div>
              ))}
            </div>
          </div>

          {/* 挑战任务 */}
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h3 className="font-bold mb-3">🎯 挑战任务</h3>
            <div className="space-y-3">
              {challenges.map((challenge, i) => (
                <div key={i} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-medium text-sm">{challenge.title}</span>
                  </div>
                  <div className="text-xs text-gray-500 mb-2">{challenge.desc}</div>
                  <div className="text-xs text-primary">{challenge.progress}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
