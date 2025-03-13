const listenMsg = (lc, pc) => lc.addEventListener("message", (e) => pc.postMessage(e.data));
onconnect = (e) => {
    const port = e.ports[0];
    const id = Math.random().toString(36).slice(2);
    port.postMessage({ id });
    const bc_send = new BroadcastChannel(id + "_s");
    const bc_recv = new BroadcastChannel(id + "_r");
    listenMsg(bc_send, bc_recv);
    listenMsg(port, port);
    port.start();
};