if (window.location.hostname === `http://${host}/auth/sign-in?source=extension`) {
    const token = localStorage.getItem('authToken');
    if (token) {
      chrome.runtime.sendMessage({ 
        action: "authenticated", 
        token 
      });
      console.log(token);
      window.close();
    }
  }