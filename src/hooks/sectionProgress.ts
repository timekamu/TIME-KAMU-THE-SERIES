import {
  useEffect,
  useState,
} from 'react';

// ==========================================
// TIME KAMU — SECTION PROGRESS TRACKER
// ==========================================

export function useSectionProgress(
  sectionIds: string[]
) {
  const [activeSection, setActiveSection] =
    useState<string>(
      sectionIds[0] ?? ''
    );

  const [progress, setProgress] =
    useState<Record<string, number>>({});

  useEffect(() => {
    if (!sectionIds.length) return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(
        (element): element is HTMLElement =>
          element !== null
      );

    if (!elements.length) return;

    const updateProgress = () => {
      const viewportHeight = window.innerHeight;

      const nextProgress: Record<string, number> = {};

      let currentSection = elements[0].id;
      let closestDistance = Infinity;

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();

        const distance = Math.abs(
          rect.top - viewportHeight * 0.35
        );

        if (distance < closestDistance) {
          closestDistance = distance;
          currentSection = element.id;
        }

        const visibleHeight = Math.max(
          0,
          Math.min(rect.bottom, viewportHeight) -
            Math.max(rect.top, 0)
        );

        nextProgress[element.id] =
          Math.min(
            1,
            Math.max(
              0,
              visibleHeight / Math.max(rect.height, 1)
            )
          );
      });

      setActiveSection(currentSection);
      setProgress(nextProgress);
    };

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        updateProgress();
        ticking = false;
      });
    };

    updateProgress();

    window.addEventListener(
      'scroll',
      handleScroll,
      { passive: true }
    );

    window.addEventListener(
      'resize',
      handleScroll
    );

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      );

      window.removeEventListener(
        'resize',
        handleScroll
      );
    };
  }, [sectionIds]);

  return {
    activeSection,
    progress,
  };
}
