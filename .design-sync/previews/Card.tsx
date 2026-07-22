import { Card } from "musubi-ui";

export function Default() {
  return (
    <Card>
      Musubi connects the systems your team already runs — no rip-and-replace.
    </Card>
  );
}

export function WithTitle() {
  return (
    <Card title="Data platform">
      A small, composable pipeline your team can operate and extend.
    </Card>
  );
}
