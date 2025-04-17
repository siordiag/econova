import { ProgressBar } from 'react-bootstrap';

export default function Planet() {
  const progress = 0;

  return (
    <div style={{ padding: '3rem', fontFamily: 'SpaceMono', color: 'var(--brand-primary)' }}>
      <h1>Your Planet </h1>
      <p>Planet revival progress:</p>
      <ProgressBar now={progress} label={`${progress}%`} variant="danger" />
    </div>
  );
}