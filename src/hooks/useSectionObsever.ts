import { observeSection } from "@/utils/sectionObserver";
import { useEffect, useContext } from "react";
import { PageContext, PageContextProps } from "@/contexts/PageContext";

export function useSectionObserver(sectionId:React.RefObject<HTMLElement>){
    const { setCurrentSectionId } =  useContext(PageContext) as PageContextProps;

    useEffect(() => {
        const observer = observeSection({ targetElement: sectionId.current, callback: setCurrentSectionId });

        return () => {
          observer.disconnect();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
}