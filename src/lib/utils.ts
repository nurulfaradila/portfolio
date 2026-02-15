export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}
