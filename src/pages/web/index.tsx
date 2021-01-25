import { View, WebView } from '@tarojs/components'
import React from 'react'
import { useRouter } from '@tarojs/taro'

export default () => {
  const { params } = useRouter()
  return <WebView src={decodeURIComponent(params.url)} />
}
