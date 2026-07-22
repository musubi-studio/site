import { Button } from "musubi-ui";

export function Primary() {
  return <Button variant="primary">Create automation</Button>;
}

export function Secondary() {
  return <Button variant="secondary">Cancel</Button>;
}

export function Counter() {
  return <Button variant="counter">Ship to production</Button>;
}

export function Disabled() {
  return (
    <Button variant="primary" disabled>
      Create automation
    </Button>
  );
}

export function Small() {
  return (
    <Button variant="primary" size="sm">
      Add step
    </Button>
  );
}
