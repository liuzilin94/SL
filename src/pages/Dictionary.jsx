import { useState } from 'react'

const words = [
  { id: 1, word: '你好', pinyin: 'nǐ hǎo', category: '问候', description: '双手拇指竖起，其余四指握拳，上下点动两次。' },
  { id: 2, word: '谢谢', pinyin: 'xiè xie', category: '感谢', description: '双手拇指竖起，左右摆动几下。' },
  { id: 3, word: '再见', pinyin: 'zài jiàn', category: '告别', description: '一手竖掌，掌心向外，左右摆动。' },
  { id: 4, word: '对不起', pinyin: 'duì bu qǐ', category: '道歉', description: '一手小指指向胸部，然后竖掌前后晃动两下。' },
  { id: 5, word: '请', pinyin: 'qǐng', category: '礼貌', description: '一手竖掌，掌心向内，弯曲两下。' },
  { id: 6, word: '帮助', pinyin: 'bāng zhù', category: '动词', description: '双手掌心向上，往上抬一下。' },
  { id: 7, word: '朋友', pinyin: 'péng you', category: '名词', description: '双手拇指竖起，其他四指握拳，碰两下。' },
  { id: 8, word: '爱', pinyin: 'ài', category: '情感', description: '双手拇指交叉放在胸口。' },
]

const categories = ['全部', '问候', '感谢', '告别', '道歉', '礼貌', '动词', '名词', '情感']

export default function Dictionary() {
  const [activeCategory, setActiveCategory] = useState('全部')
  const [selectedWord, setSelectedWord] = useState(null)

  const filteredWords = activeCategory === '全部' 
    ? words 
    : words.filter(w => w.category === activeCategory)

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* 搜索框 */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="搜索词条..."
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary"
        />
      </div>

      {/* 分类筛选 */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-4">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
              activeCategory === cat
                ? 'bg-primary text-white'
                : 'bg-white text-gray-600 border border-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 词条列表 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {filteredWords.map(word => (
          <button
            key={word.id}
            onClick={() => setSelectedWord(word)}
            className="bg-white rounded-xl p-4 text-left shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="font-bold text-lg text-gray-800">{word.word}</div>
            <div className="text-xs text-gray-500">{word.pinyin}</div>
            <div className="text-xs text-primary mt-1">{word.category}</div>
          </button>
        ))}
      </div>

      {/* 词条详情弹窗 */}
      {selectedWord && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedWord(null)}>
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold">{selectedWord.word}</h2>
                  <p className="text-gray-500">{selectedWord.pinyin}</p>
                </div>
                <button
                  onClick={() => setSelectedWord(null)}
                  className="text-gray-400 text-2xl"
                >
                  ×
                </button>
              </div>

              {/* 视频占位区 */}
              <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                <div className="text-center text-gray-400">
                  <div className="text-4xl mb-2">📹</div>
                  <div className="text-sm">视频示范区域</div>
                </div>
              </div>

              <div className="mb-4">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                  {selectedWord.category}
                </span>
              </div>

              <div className="mb-4">
                <h3 className="font-medium text-gray-800 mb-2">手势说明</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{selectedWord.description}</p>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-primary text-white py-3 rounded-xl font-medium">
                  开始练习
                </button>
                <button className="px-4 py-3 border border-gray-200 rounded-xl">
                  ❤️
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
