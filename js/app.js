

if("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js")
        .then((reg) => {
            console.log(`Service worker registered (Scope: ${reg.scope})`);
        })
        .catch((error) => {
            console.log(`Service worker error (${error})`);
        });
    });
} else {
    console.log("Service worker not available");
}