import React from 'react'
import NextNprogress from 'nextjs-progressbar'

const NextJSProgress: React.FC = () => {
  return (
    <NextNprogress
      color="#015C93
      linear-gradient(
        to right,
        #015C93,
        #2D83B6,
        #53A6D8,
        #89CCF7,
        #BEE6FF
      );"
      startPosition={0.3}
      stopDelayMs={200}
      height={4}
      showOnShallow={true}
      options={{ easing: 'ease', speed: 500 }}
    />
  )
}

export default NextJSProgress