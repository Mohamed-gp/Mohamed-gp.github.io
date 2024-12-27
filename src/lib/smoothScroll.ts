export function smoothScroll(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
  
  