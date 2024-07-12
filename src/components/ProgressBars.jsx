import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressBars({porcentaje}) {
  return <ProgressBar animated variant='warning' now={porcentaje} />;
}

export default ProgressBars;