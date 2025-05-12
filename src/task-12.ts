type Callback = (status: string) => void;

function sendDoneStatus(callback: Callback): void {
    callback("done");
  }

sendDoneStatus((status) => {
  console.log(status);
})