const externalLink = () => {
  const links = [...document.links];
  const CURRENT_URL = document.URL;

  links.forEach((link) => {
    const LINK_URL = link.href;

    if (CURRENT_URL !== LINK_URL) {
      link.setAttribute("target", "_blank");
      link.setAttribute("noopener", "norereffer");
    }
  });
};

export default externalLink;
