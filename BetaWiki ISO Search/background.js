chrome.action.onClicked.addListener((tab) => {
  const url = new URL(tab.url);
  if (url.hostname === "betawiki.net") {
    const pathParts = url.pathname.split("/");
    if (pathParts.length >= 3 && pathParts[1] === "wiki") {
      let query = pathParts[2];
      query = query.replace(/_/g, ' ');  // Replace underscores with spaces
      const archiveUrl = `https://archive.org/search?query=${encodeURIComponent(query)}`;
      chrome.tabs.create({ url: archiveUrl });
    } else {
      alert("This page is not a valid BetaWiki page.");
    }
  } else {
    alert("This extension only works on betawiki.net.");
  }
});