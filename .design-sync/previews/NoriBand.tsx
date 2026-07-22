import { NoriBand } from "musubi-ui";

export function Footer() {
  return (
    <NoriBand as="footer" variant="footer">
      © Musubi — connect, compose, simplify, evolve.
    </NoriBand>
  );
}

export function Code() {
  return (
    <NoriBand variant="code">
      <pre style={{ margin: 0 }}>npm install musubi-ui</pre>
    </NoriBand>
  );
}
