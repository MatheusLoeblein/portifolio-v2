import { Dispatch, SetStateAction } from 'react';

interface ObserverProps {
    targetElement: HTMLElement | null | undefined;
    callback: Dispatch<SetStateAction<null | string>>;
  }

export const observeSection = ({targetElement, callback}:ObserverProps) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback(entry.target.id);
            console.log(entry.target.id, "%%%%")
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
  
    targetElement && observer.observe(targetElement);
  
    return observer;
  };