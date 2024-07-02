import { useState } from 'react'

import clx from './../functions/clx'
import CodeBlocks from './CodeBlocks'
import styles from './../styles/chat.module.scss'
import PromptAndResponse from './PromptAndResponse'

export default () => {
  const [codeBlocks, setCodeBlocks] = useState([])
  const [codeBlocksActive, setCodeBlocksActive] = useState(false)

  return (
    <div className={clx(styles.wrapper, codeBlocksActive ? styles.codeBlocksActive : '')}>
      <PromptAndResponse
        setCodeBlocks={setCodeBlocks}
        setCodeBlocksActive={setCodeBlocksActive}
      />

      <CodeBlocks
        codeBlocks={codeBlocks}
      />
    </div>
  )
}
