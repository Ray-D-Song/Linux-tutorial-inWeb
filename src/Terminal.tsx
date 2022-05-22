import { Terminal } from "xterm";
import "xterm/css/xterm.css";
// eslint-disable-next-line
import { useCallback, useEffect, useRef } from "react";
import { AttachAddon } from "xterm-addon-attach";
import axios from "axios";

const socketURL = "ws://127.0.0.1:4000/socket/";
function WebTerminal() {
  //初始化当前系统环境，返回终端的 pid，标识当前终端的唯一性
  const initSysEnv = async (term: Terminal) =>
    await axios
      .post("http://127.0.0.1:4000/terminal")
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err);
      });

  useEffect(() => {
    var term = new Terminal({
      fontFamily: 'Menlo, Monaco, "Courier New", monospace',
      fontWeight: 400,
      fontSize: 14,
      rows: 38, //行数
      theme: {
        background: "#0d1117",
        foreground: "#c9d1d9"
      }
    });
    //@ts-ignore
    term.open(document.getElementById("terminal"));
    term.focus();
    async function asyncInitSysEnv() {
      const pid = await initSysEnv(term),
      ws = new WebSocket(socketURL + pid),
        attachAddon = new AttachAddon(ws);
      term.loadAddon(attachAddon);
    }
    asyncInitSysEnv();
    return () => {
      //组件卸载，清除 Terminal 实例
      term.dispose();
    };
  }, []);
  return <div id="terminal"></div>;
}

export default WebTerminal;
