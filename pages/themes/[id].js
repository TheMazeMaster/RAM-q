import { useRouter } from 'next/router';
import { useState } from 'react';
import { themes } from '../../data/themes';
import { instincts } from '../../data/instincts';
import QuestionCard from '../../components/QuestionCard';
import InstinctSelector from '../../components/InstinctSelector';
import Slider5 from '../../components/Slider5';
import Slider3 from '../../components/Slider3';
import ProgressNav from '../../components/ProgressNav';

export default function ThemePage() {
  const router = useRouter();
  const id = parseInt(router.query.id);
  const theme = themes.find(t => t.id === id);
  const [selectedSub, setSelectedSub] = useState(null);
  const [selectedInstinct, setSelectedInstinct] = useState(null);
  const [sliderValue, setSliderValue] = useState(null);

  if (!theme) return <div>Loading...</div>;

  const handleInstinctClick = (instinct) => {
    setSelectedInstinct(instinct);
  };

  const handleSliderChange = (value) => {
    setSliderValue(value);
    // Save to local state/store later
  };

  const isAB = selectedSub === 'A' || selectedSub === 'B';

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <QuestionCard title={theme.title} questions={theme.questions} onSelect={setSelectedSub} />

      {selectedSub && (
        <>
          <InstinctSelector instincts={instincts} onSelect={handleInstinctClick} />
          {selectedInstinct && (
            isAB ? (
              <Slider5 scale={selectedInstinct.scale} onChange={handleSliderChange} />
            ) : (
              <Slider3 onChange={handleSliderChange} />
            )
          )}
        </>
      )}

      <ProgressNav current={id} total={themes.length} />
    </main>
  );
}
