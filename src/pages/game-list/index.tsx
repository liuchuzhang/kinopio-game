import React from 'react'
import { View } from '@tarojs/components'
import { AtLoadMore, AtCard } from 'taro-ui'
import Taro, { useReachBottom } from '@tarojs/taro'
import useList from '../../hooks/useList'
import gameList from './list.json'

import 'taro-ui/dist/style/components/card.scss'
import 'taro-ui/dist/style/components/load-more.scss'
import 'taro-ui/dist/style/components/activity-indicator.scss'
import 'taro-ui/dist/style/components/button.scss'
import './index.scss'

export default () => {
  const { list, hasLoadMore, loading, loadMore } = useList<{
    image: string
    name: string
    url: string
  }>(gameList)

  useReachBottom(loadMore)

  return (
    <View className="game-list">
      {list.map((game) => (
        <View className="item">
          <AtCard
            title={game.name}
            thumb={game.image}
            onClick={() =>
              Taro.navigateTo({
                url: `/pages/web/index?url=${encodeURIComponent(game.url)}`
              })
            }
          >
            {game.url}
          </AtCard>
        </View>
      ))}
      <AtLoadMore
        onClick={loadMore}
        status={loading ? 'loading' : hasLoadMore ? 'more' : 'noMore'}
        noMoreText="没有了 ( =•ω•= )"
      >
        <View className="more">查看更多</View>
      </AtLoadMore>
    </View>
  )
}
