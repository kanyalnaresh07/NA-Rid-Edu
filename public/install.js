let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  showInstallPromotion();
});

function showInstallPromotion() {
  // Create a floating install button if it doesn't exist
  if (!document.getElementById('pwa-install-btn')) {
    const btn = document.createElement('button');
    btn.id = 'pwa-install-btn';
    btn.innerText = 'Install App';
    btn.style.position = 'fixed';
    btn.style.bottom = '20px';
    btn.style.right = '20px';
    btn.style.zIndex = '9999';
    btn.style.padding = '10px 20px';
    btn.style.backgroundColor = '#06b6d4';
    btn.style.color = '#000a14';
    btn.style.border = 'none';
    btn.style.borderRadius = '50px';
    btn.style.fontWeight = 'bold';
    btn.style.boxShadow = '0 4px 6px rgba(0,0,0,0.3)';
    btn.style.cursor = 'pointer';
    
    btn.addEventListener('click', async () => {
      btn.style.display = 'none';
      if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);
        deferredPrompt = null;
      }
    });
    
    document.body.appendChild(btn);
  }
}

window.addEventListener('appinstalled', () => {
  console.log('PWA was installed');
  const btn = document.getElementById('pwa-install-btn');
  if (btn) btn.style.display = 'none';
});
