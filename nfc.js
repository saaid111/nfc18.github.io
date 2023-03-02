let count = 0;
async function readTag() {

    if ("NDEFReader" in window) {
      const ndef = new NDEFReader();

      try {
        await ndef.scan();
        ndef.onreading = event => {
          const decoder = new TextDecoder();
          for (const record of event.message.records) {
            
            

            if (decoder.decode(record.data) === "Apple.com") {
                if(count < 6){
                const circle = document.querySelectorAll(".circle"); // 
                circle[count].style.backgroundColor = "yellow";
                count++
                break; 
            }
              }
            
          }
        }
      } catch(error) {
        consoleLog(error);
      }
    } else {
      consoleLog("Web NFC is not supported.");
      
    }
  }
  
  async function writeTag() {
    if ("NDEFReader" in window) {
      const ndef = new NDEFReader();
      try {
        await ndef.write("What Web Can Do Today");
        consoleLog("NDEF message written!");
      } catch(error) {
        consoleLog(error);
      }
    } else {
      consoleLog("Web NFC is not supported.");
    }
  }
  
  function consoleLog(data) {
    var logElement = document.getElementById('log');
    logElement.innerHTML += data + '\n';

  }

 