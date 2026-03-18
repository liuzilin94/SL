import { useState } from 'react'

const learnModes = [
  { id: 'practice', name: '手语背词', icon: '📹', desc: 'AI实时识别您的动作' },
  { id: 'review', name: '复习计划', icon: '🧠', desc: '基于艾宾浩斯记忆曲线' },
  { id: 'video', name: '视频教程', icon: '🎬', desc: '观看标准手语示范' },
]

const reviewWords = [
  { word: '今天', status: '需复习', dueDate: '今天' },
  { word: '天气', status: '已掌握', dueDate: '-' },
  { word: '学习', status: '即将复习', dueDate: '明天' },
  { word: '朋友', status: '新词', dueDate: '今天' },
]

export default function Learn() {
  const [activeMode, setActiveMode] = useState('practice')
  const [isPracticing, setIsPracticing] = useState(false)

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* 学习模式选择 */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {learnModes.map(mode => (
          <button
            key={mode.id}
            onClick={() => setActiveMode(mode.id)}
            className={`bg-white rounded-xl p-4 text-center shadow-sm ${
              activeMode === mode.id ? 'ring-2 ring-primary' : ''
            }`}
          >
            <div className="text-2xl mb-1">{mode.icon}</div>
            <div className="font-medium text-sm">{mode.name}</div>
            <div className="text-xs text-gray-500">{mode.desc}</div>
          </button>
        ))}
      </div>

      {/* 手语背词模式 */}
      {activeMode === 'practice' && !isPracticing && (
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="font-bold text-lg mb-4">手语背词</h3>
          <div className="text-center py-8">
            <div className="text-6xl mb-4">📹</div>
            <p className="text-gray-600 mb-4">打开摄像头对着文字打手语</p>
            <p className="text-sm text-gray-500 mb-6">AI将实时识别并反馈您的动作正确与否</p>
            <button
              onClick={() => setIsPracticing(true)}
              className="bg-primary text-white px-8 py-3 rounded-xl font-medium"
            >
              开始练习
            </button>
          </div>
        </div>
      )}

      {/* 练习中界面 */}
      {activeMode === 'practice' && isPracticing && (
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <span className="font-medium">正在练习</span>
            <button
              onClick={() => setIsPracticing(false)}
              className="text-gray-500"
            >
              退出
            </button>
          </div>

          {/* 摄像头区域 */}
          <div className="aspect-video bg-gray-900 rounded-xl relative mb-4">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-4xl mb-2">📹</div>
                <div className="text-sm">摄像头区域</div>
              </div>
            </div>
            {/* 标准动作对比 */}
            <div className="absolute bottom-4 left-4 bg-white/90 rounded-lg p-2">
              <div className="text-xs text-gray-500">标准动作</div>
              <div className="text-sm font-medium">你好</div>
            </div>
          </div>

          {/* 当前词条 */}
          <div className="text-center mb-4">
            <div className="text-3xl font-bold text-gray-800 mb-2">你好</div>
            <div className="text-gray-500">请对着摄像头打出这个手势</div>
          </div>

          {/* 识别结果 */}
          <div className="bg-gray-50 rounded-xl p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">识别结果</span>
              <span className="text-green-500 font-medium">✓ 正确</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">相似度</span>
              <span className="text-primary font-medium">85%</span>
            </div>
          </div>

          {/* 操作按钮 */}
          <div className="flex gap-3">
            <button className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-medium">
              重新开始
            </button>
            <button className="flex-1 bg-primary text-white py-3 rounded-xl font-medium">
              下一个
            </button>
          </div>
        </div>
      )}

      {/* 复习计划 */}
      {activeMode === 'review' && (
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h3 className="font-bold mb-3">今日复习</h3>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-primary">4</div>
                <div className="text-xs text-gray-500">待复习词数</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-500">12</div>
                <div className="text-xs text-gray-500">已掌握</div>
              </div>
              <button className="bg-primary text-white px-6 py-2 rounded-lg text-sm">
                开始复习
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h3 className="font-bold mb-3">复习词条</h3>
            <div className="space-y-2">
              {reviewWords.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">{item.word}</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      item.status === '已掌握' ? 'bg-green-100 text-green-700' :
                      item.status === '需复习' ? 'bg-red-100 text-red-700' :
                      item.status === '即将复习' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {item.status}
                    </span>
                    <span className="text-xs text-gray-400">{item.dueDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 视频教程 */}
      {activeMode === 'video' && (
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="font-bold mb-4">视频教程</h3>
          <div className="grid gap-4">
            <div className="flex gap-4 p-3 bg-gray-50 rounded-xl">
              <div className="w-24 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-2xl">▶</span>
              </div>
              <div className="flex-1">
                <div className="font-medium">基础手语入门</div>
                <div className="text-xs text-gray-500">共15集 · 已学习3集</div>
              </div>
            </div>
            <div className="flex gap-4 p-3 bg-gray-50 rounded-xl">
              <div className="w-24 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-2xl">▶</span>
              </div>
              <div className="flex-1">
                <div className="font-medium">日常交流词汇</div>
                <div className="text-xs text-gray-500">共20集 · 未开始</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
