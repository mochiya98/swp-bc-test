const listenMsg = (lc, pc) => lc.addEventListener("message", (e) => pc.postMessage(e.data));
onconnect = (e) => {
    const port = e.ports[0];
    const id = Math.random().toString(36).slice(2);
    port.postMessage({ id });
    listenMsg(port, port);
    port.start();
};