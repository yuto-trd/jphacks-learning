import { sendNotification } from "./actions";
import { SubscribeButton } from "./components";

export default function Home() {
  return (
    <div>
      <form action={sendNotification}>
        <input type="text" name="token" placeholder="Token" />
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="body" placeholder="Body" />
        <button type="submit">Send</button>
      </form>
      <SubscribeButton />
    </div>
  );
}
