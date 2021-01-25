import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { speeds, delays, colors } from './constant'

import './index.scss'

const tips: string[] = '奇诺比奥欢迎大家来玩，玩累了可以直接睡'.split('')

export default function() {
  const seeList = () => {
    Taro.navigateTo({
      url: '/pages/game-list/index'
    })
  }

  return (
    <View className="index">
      <Text className="tip">
        {tips.map((text) => <Text className="text" key={text}>{text}</Text>)}
      </Text>
      <View className="kinopio">
        <Image className="kinopio1" src={require('../../static/images/1.png')}></Image>
        <Image className="kinopio2" src={require('../../static/images/2.png')}></Image>
      </View>
      <View className="tree">
        {new Array(50).fill(null).map((_, index) => (
          <View
            style={{
              backgroundColor: colors[(colors.length + 1) % index],
              WebkitAnimation: `flash calc(${speeds[index]} * 1s) calc(${delays[index]} * 1s) infinite steps(4), appear 0.5s calc(${index} * 0.05s) both`,
              animation: `flash calc(${speeds[index]} * 1s) calc(${delays[index]} * 1s) infinite steps(4), appear 0.5s calc(${index} * 0.05s) both`,
              left: `50%`,
              transform: `translate(-50%, 50%) rotateY(calc(${1440 -
                index * 28.8} * 1deg)) translate3d(0, 0, calc(${12.5 - index * 0.25} * 10px))`,
              bottom: `calc(${index * 2} * 1%)`
            }}
            className="tree__light"
            key={index}
          />
        ))}
      </View>
      <View className="btn" onClick={seeList}>
        查看游戏列表
      </View>
    </View>
  )
}
