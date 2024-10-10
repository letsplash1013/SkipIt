let isActive = true;

document.getElementById('toggle').addEventListener('click', () => {
  isActive = !isActive;
  chrome.storage.sync.set({isActive}, () => {
    document.getElementById('toggle').innerText = isActive ? 'Disable SkipIt' : 'Enable SkipIt';
  });
});

chrome.storage.sync.get('isActive', (data) => {
  isActive = data.isActive !== undefined ? data.isActive : true;
  document.getElementById('toggle').innerText = isActive ? 'Disable SkipIt' : 'Enable SkipIt';
});
