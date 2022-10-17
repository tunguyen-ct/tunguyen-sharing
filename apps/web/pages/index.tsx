import { Button } from "@tunguyenct/ui";
import { sum } from "@tunguyenct/sum";

export default function Web() {
  return (
    <div>
      <h1>Web {sum(1, 4)}</h1>
      <Button />
    </div>
  );
}
