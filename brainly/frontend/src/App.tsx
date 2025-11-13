import "./App.css";
import { Button } from "./components/Button";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <>
      <div>
        <Button
          variant="primary"
          text="Share Brain"
          startIcon={<ShareIcon size="md" />}
        />
        <Button
          variant="secondary"
          text="Add Content"
          startIcon={<PlusIcon size="md" />}
        />
      </div>
    </>
  );
}

export default App;
