console.log("start");

// declare variable dom
let resultDOM = document.querySelector("#result");
let keyDOM = document.querySelector("#key");
let codeDOM = document.querySelector("#code");
let titleDOM = document.querySelectorAll(".title");

// declare variable value
let result, key, code;

document.addEventListener("keydown", function (e) {
  // Make th etitle visible
  titleDOM.forEach(function (dom) {
    dom.style.visibility = "visible";
  });

  // Set the value for var 'result' according to the key
  if (e.code === "Backspace") {
    result = 8;
  } else if (e.code === "Backspace") {
    result = 8;
  } else if (e.code === "Tab") {
    result = 9;
  } else if (e.code === "Enter") {
    result = 13;
  } else if (e.code === "ShiftLeft") {
    result = 16;
  } else if (e.code === "ShiftRight") {
    result = 16;
  } else if (e.code === "ControlLeft") {
    result = 17;
  } else if (e.code === "ControlRight") {
    result = 17;
  } else if (e.code === "AltLeft") {
    result = 18;
  } else if (e.code === "AltRight") {
    result = 18;
  } else if (e.code === "Pause") {
    result = 19;
  } else if (e.code === "CapsLock") {
    result = 20;
  } else if (e.code === "Escape") {
    result = 27;
  } else if (e.code === "Space") {
    result = 32;
  } else if (e.code === "PageUp") {
    result = 33;
  } else if (e.code === "PageDown") {
    result = 34;
  } else if (e.code === "End") {
    result = 35;
  } else if (e.code === "Home") {
    result = 36;
  } else if (e.code === "ArrowLeft") {
    result = 37;
  } else if (e.code === "ArrowUp") {
    result = 38;
  } else if (e.code === "ArrowRight") {
    result = 39;
  } else if (e.code === "ArrowDown") {
    result = 40;
  } else if (e.code === "PrintScreen") {
    result = 44;
  } else if (e.code === "Insert") {
    result = 45;
  } else if (e.code === "Delete") {
    result = 46;
  } else if (e.code === "Digit0") {
    result = 48;
  } else if (e.code === "Digit1") {
    result = 49;
  } else if (e.code === "Digit2") {
    result = 50;
  } else if (e.code === "Digit3") {
    result = 51;
  } else if (e.code === "Digit4") {
    result = 52;
  } else if (e.code === "Digit5") {
    result = 53;
  } else if (e.code === "Digit6") {
    result = 54;
  } else if (e.code === "Digit7") {
    result = 55;
  } else if (e.code === "Digit8") {
    result = 56;
  } else if (e.code === "Digit9") {
    result = 57;
  } else if (e.code === "KeyA") {
    result = 65;
  } else if (e.code === "KeyB") {
    result = 66;
  } else if (e.code === "KeyC") {
    result = 67;
  } else if (e.code === "KeyD") {
    result = 68;
  } else if (e.code === "KeyE") {
    result = 69;
  } else if (e.code === "KeyF") {
    result = 70;
  } else if (e.code === "KeyG") {
    result = 71;
  } else if (e.code === "KeyH") {
    result = 72;
  } else if (e.code === "KeyI") {
    result = 73;
  } else if (e.code === "KeyJ") {
    result = 74;
  } else if (e.code === "KeyK") {
    result = 75;
  } else if (e.code === "KeyL") {
    result = 76;
  } else if (e.code === "KeyM") {
    result = 77;
  } else if (e.code === "KeyN") {
    result = 78;
  } else if (e.code === "KeyO") {
    result = 79;
  } else if (e.code === "KeyP") {
    result = 80;
  } else if (e.code === "KeyQ") {
    result = 81;
  } else if (e.code === "KeyR") {
    result = 82;
  } else if (e.code === "KeyS") {
    result = 83;
  } else if (e.code === "KeyT") {
    result = 84;
  } else if (e.code === "KeyU") {
    result = 85;
  } else if (e.code === "KeyV") {
    result = 86;
  } else if (e.code === "KeyW") {
    result = 87;
  } else if (e.code === "KeyX") {
    result = 88;
  } else if (e.code === "KeyY") {
    result = 89;
  } else if (e.code === "KeyZ") {
    result = 90;
  } else if (e.code === "MetaLeft") {
    result = 91;
  } else if (e.code === "MetaRight") {
    result = 92;
  } else if (e.code === "ContextMenu") {
    result = 93;
  } else if (e.code === "Numpad0") {
    result = 96;
  } else if (e.code === "Numpad1") {
    result = 97;
  } else if (e.code === "Numpad2") {
    result = 98;
  } else if (e.code === "Numpad3") {
    result = 99;
  } else if (e.code === "Numpad4") {
    result = 100;
  } else if (e.code === "Numpad5") {
    result = 101;
  } else if (e.code === "Numpad6") {
    result = 102;
  } else if (e.code === "Numpad7") {
    result = 103;
  } else if (e.code === "Numpad8") {
    result = 104;
  } else if (e.code === "Numpad9") {
    result = 105;
  } else if (e.code === "NumpadMultiply") {
    result = 106;
  } else if (e.code === "NumpadAdd") {
    result = 107;
  } else if (e.code === "NumpadSubtract") {
    result = 109;
  } else if (e.code === "NumpadDecimal") {
    result = 110;
  } else if (e.code === "NumpadDivide") {
    result = 111;
  } else if (e.code === "F1") {
    result = 112;
  } else if (e.code === "F2") {
    result = 113;
  } else if (e.code === "F3") {
    result = 114;
  } else if (e.code === "F4") {
    result = 115;
  } else if (e.code === "F5") {
    result = 116;
  } else if (e.code === "F6") {
    result = 117;
  } else if (e.code === "F7") {
    result = 118;
  } else if (e.code === "F8") {
    result = 119;
  } else if (e.code === "F9") {
    result = 120;
  } else if (e.code === "F10") {
    result = 121;
  } else if (e.code === "F11") {
    result = 122;
  } else if (e.code === "F12") {
    result = 123;
  } else if (e.code === "NumLock") {
    result = 144;
  } else if (e.code === "ScrollLock") {
    result = 145;
  } else if (e.key === "AudioVolumeMute") {
    result = 173;
  } else if (e.key === "AudioVolumeDown") {
    result = 174;
  } else if (e.key === "AudioVolumeUp") {
    result = 175;
  } else if (e.key === "LaunchMediaPlayer") {
    result = 181;
  } else if (e.key === "LaunchApplication1") {
    result = 182;
  } else if (e.key === "LaunchApplication2") {
    result = 183;
  } else if (e.code === "Semicolon") {
    result = 186;
  } else if (e.code === "Equal") {
    result = 187;
  } else if (e.code === "Comma") {
    result = 188;
  } else if (e.code === "Minus") {
    result = 189;
  } else if (e.code === "Period") {
    result = 190;
  } else if (e.code === "Slash") {
    result = 191;
  } else if (e.code === "Backquote") {
    result = 192;
  } else if (e.code === "BracketLeft") {
    result = 219;
  } else if (e.code === "Backslash") {
    result = 220;
  } else if (e.code === "BracketRight") {
    result = 221;
  } else if (e.code === "Quote") {
    result = 222;
  }

  //Display the new result, key and code based on key pressed
  displayResultKeyCode(e.code, e.key, result);
});

function displayResultKeyCode(ecode, ekey, result) {
  // Set value of variable 'key'
  if (ecode === "Space") {
    key = "(blank space)";
  } else {
    key = ekey;
  }

  // Set value of variable 'code'
  code = ecode;

  // Assign new value of result, key, and code
  resultDOM.innerText = result;
  keyDOM.innerText = key;
  codeDOM.innerText = code;
}
