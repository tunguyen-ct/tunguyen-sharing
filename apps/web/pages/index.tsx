import { Button } from '@tunguyenct/ui'
import { cong } from '@tunguyenct/sum'
import { greeting } from '@tunguyenct/functions'

export default function Web() {
  return (
    <div>
      <h1>Web {cong(1, 4)}</h1>
      <h1>{greeting("Tu")}</h1>
      <Button />
    </div>
  )
}
