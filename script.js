const S = [
  {
    t: "4.1 الأساسيات",
    q: [
      [
        "Correct data type for motor speed in RPM (e.g., 1500)?",
        "float~int~char~bool",
        1,
      ],
      [
        "Which operator calculates the remainder of a division in C++?",
        "*~/~%~-",
        2,
      ],
      [
        "How do you declare and initialize a variable in one line?",
        "int x; x = 5;~int x = 5;~x = 5;~int x(5);",
        1,
      ],
      ["Result of (10 + 5 * 2) in C++?", "20~30~15~10", 0],
      ["Which operator checks if two values are equal?", "=~==~!=~>", 1],
      [
        "What does the ++ operator do?",
        "Subtracts 1~Adds 1~Multiplies by 2~Divides by 2",
        1,
      ],
      ["Output of cout << (5 > 3 && 2 < 4);?", "0~1~true~false", 1],
      [
        "Which data type is used for true/false values?",
        "int~float~bool~char",
        2,
      ],
      ["Result of cout << (10 % 3);?", "3~1~0~2", 1],
      ["Which operator has the highest precedence?", "||~&&~()~==", 2],
      [
        "What does x += 5; do?",
        "Sets x to 5~Adds 5 to x~Subtracts 5 from x~Multiplies x by 5",
        1,
      ],
      ["Output of cout << (3 != 3);?", "true~false~0~1", 2],
      [
        "Which logical operator checks if at least one condition is true?",
        "&&~||~!~==",
        1,
      ],
      [
        "Data type suitable for a temperature value (e.g., 25.5°C)?",
        "int~char~float~bool",
        2,
      ],
      ["Output?\nint x = 5;\nx *= 2;\ncout << x;", "5~10~7~2", 1],
      [
        "What does the ! operator do?",
        "Combines conditions~Reverses a boolean value~Checks equality~Increments a value",
        1,
      ],
    ],
  },
  {
    t: "4.5 الحلقات",
    q: [
      [
        "Which loop is ideal when you know the exact number of repetitions, such as blinking an LED 5 times?",
        "while loop~do-while loop~for loop~nested loop",
        2,
      ],
      [
        "Why are loops important for continuous monitoring in control systems?",
        "They stop execution~They allow repeated sensor checks without rewriting code~They handle only one data point~They create errors",
        1,
      ],
      [
        "A for loop is most suitable when…",
        "The number of repetitions is unknown~You know exactly how many times to repeat~For menus only~For input validation always",
        1,
      ],
      [
        "A while loop continues as long as…",
        "A false condition~A true condition~A fixed number of times~Without checking",
        1,
      ],
      [
        "Key feature of the do-while loop?",
        "Checks condition before execution~Executes at least once before checking~Never executes~Same as for loop",
        1,
      ],
      [
        "What does the break statement do in a loop?",
        "Skips to next iteration~Exits the loop immediately~Restarts the loop~Ignores condition",
        1,
      ],
      [
        "What does the continue statement do?",
        "Exits the loop~Skips rest of current iteration~Stops program~Repeats condition",
        1,
      ],
      [
        "To avoid infinite loops, what should be included?",
        "No condition~Safety limit like max iterations~Complex calculations~Nested loops always",
        1,
      ],
      [
        "In control systems, why are loops important for processing multiple data points?",
        "To create delays only~To repeat calculations without rewriting code~To display menus only~To validate inputs once",
        1,
      ],
    ],
  },
  {
    t: "4.10 الدوال",
    q: [
      [
        "Main purpose of using functions in C++?",
        "Avoid repeating code and make programs easier to read~Increase program execution speed~Reduce memory usage~Make variables global",
        0,
      ],
      [
        "Correct syntax for a function that takes no parameters and returns nothing?",
        "int functionName(){}~void functionName(){}~functionName(){}~return functionName(){}",
        1,
      ],
      [
        "In checkTemperature(25.5), what is 25.5?",
        "A parameter~An argument~A return value~A variable declaration",
        1,
      ],
      [
        "Keyword used to send a value back from a function?",
        "send~return~give~output",
        1,
      ],
      [
        "In float celsiusToFahrenheit(float celsius), what does the float before the function name indicate?",
        "The parameter type~The return type~The function name~The variable type",
        1,
      ],
      [
        "void displayMotorInfo(int speed, float voltage, char status) — how many parameters?",
        "1~2~3~4",
        2,
      ],
      [
        'Output?\nvoid displayMessage() {\n  cout << "Hello World" << endl;\n}\nint main() {\n  displayMessage();\n  displayMessage();\n  return 0;\n}',
        "Hello World (printed once)~Hello World (printed twice)~Nothing will be printed~Compilation error",
        1,
      ],
      [
        "Which is a correctly written function prototype?",
        "float calculateControl(float, float, float);~float calculateControl(float, float, float)~calculateControl(float, float, float);~cvoid calculateControl(float, float, float) {}",
        0,
      ],
      [
        "Scope of a local variable declared inside a function?",
        "Anywhere in the program~Only within that function~In the main function only~In all functions of the same file",
        1,
      ],
      [
        "Value of result?\nfloat scaleReading(int raw_value) {\n  return raw_value / 1023.0 * 100.0;\n}\nint main() { float result = scaleReading(512); }",
        "Approximately 25.0~Approximately 50.0~512.0~100.0",
        1,
      ],
      [
        "Good name for a function that checks if motor temperature is within safe limits?",
        "check()~temp()~isMotorTemperatureSafe()~function1()",
        2,
      ],
      [
        "What is wrong with this function?\nint calculateSum(int a, int b) {\n  int sum = a + b;\n  // Missing something here\n}",
        "Parameter names are incorrect~Missing return statement~Wrong function name~Too many parameters",
        1,
      ],
      [
        'Which function follows the "single responsibility" principle?',
        "Reads sensor data, processes it, and sends an alarm~Only reads temperature from a sensor~Controls motors, checks safety, and logs data~Performs all system operations",
        1,
      ],
      [
        "Difference between global and local variable?",
        "Global: accessible from any function; local: only within their function~Local variables are faster than global~Global variables use less memory~There is no difference",
        0,
      ],
      [
        "What happens to system_errors?\nint system_errors = 0;\nvoid reportError() {\n  system_errors++;\n}",
        "It will be incremented by 1~It will remain 0~Compilation error will occur~It will be reset to 0",
        0,
      ],
      [
        "What should a function return to indicate success or failure?",
        "An integer (0 for success, non-zero for failure)~A boolean (true for success, false for failure)~A float value~Nothing (void)",
        1,
      ],
      [
        "What does this function calculate?\nfloat calculateControl(float setpoint, float current_value, float gain)\n{\n  float error = setpoint - current_value;\n  float output = error * gain;\n  return output;\n}",
        "The system error~The proportional control output~The current sensor value~The setpoint value",
        1,
      ],
    ],
  },
  {
    t: "IoT: المفاهيم",
    q: [
      [
        "Which is an IoT application in mechatronics and control systems?",
        "Smart factories with connected machines~Standalone desktop publishing~Offline video editing~Social media advertising",
        0,
      ],
      [
        "Which IoT application identifies equipment problems before they cause a failure?",
        "Predictive maintenance systems~Manual shift reports~Offline data logging~Remote desktop sharing",
        0,
      ],
      [
        "How many components are listed in a typical IoT control system architecture?",
        "Three~Five~Four~Six",
        1,
      ],
      [
        "Role of the sensors/actuators in an IoT architecture?",
        "Store data and provide remote access~Connect the system to the internet~Collect data and perform actions~Display a mobile app or web dashboard",
        2,
      ],
      [
        "Role of the microcontroller in an IoT architecture?",
        "Processes data and controls devices~Only collects raw data~Provides the web dashboard~Stores all data in the cloud",
        0,
      ],
      [
        "Which is NOT given as a way for the communication module to connect to the internet?",
        "WiFi~Ethernet~Cellular~Infrared",
        3,
      ],
      [
        "What does the cloud server do in an IoT system?",
        "Reads physical sensors~Drives actuators directly~Processes data on the machine itself~Stores data and provides remote access",
        3,
      ],
      [
        "What can serve as the user interface of an IoT control system?",
        "A mobile app or web dashboard~A WiFi module~A microcontroller board~A pressure sensor",
        0,
      ],
      [
        "Purpose of the C++ examples in Section 5.4?",
        "They control real hardware directly~They connect to real cloud servers~They simulate IoT communication using simple C++ code~They replace the microcontroller",
        2,
      ],
    ],
  },
  {
    t: "كود 1: SensorData",
    c: `struct SensorData {
 int device_id; float temperature; float pressure; int timestamp;
};
void displayData(SensorData data) {
 cout << "=== IoT Data Packet ===" << endl;
 cout << "Device ID: " << data.device_id << endl;
 cout << "Temperature: " << data.temperature << " C" << endl;
 cout << "Pressure: " << data.pressure << " bar" << endl;
 cout << "Timestamp: " << data.timestamp << endl;
}
int main() {
 SensorData packet;
 packet.device_id = 101; packet.temperature = 25.5;
 packet.pressure = 3.2; packet.timestamp = 1634567890;
 cout << "Preparing to send data to cloud..." << endl;
 displayData(packet);
 cout << "Data sent successfully!" << endl;
}`,
    q: [
      [
        "Main purpose of the structure SensorData?",
        "To define a function that displays sensor readings~To group related sensor information into one user-defined data type~To calculate temperature and pressure automatically~To send sensor readings directly to the cloud",
        1,
      ],
      [
        "What value is assigned to packet.device_id before displayData() is called?",
        "100~101~102~0",
        1,
      ],
      [
        "What does the parameter in void displayData(SensorData data) indicate?",
        "The function returns a SensorData object~The function receives a SensorData object as an argument~The function creates a new structure type~The function returns an integer",
        1,
      ],
      [
        "Which output line is produced for the pressure reading?",
        "Pressure: 25.5 bar~Pressure: 3.2 C~Pressure: 3.2 bar~Pressure: 101 bar",
        2,
      ],
      [
        "In packet.temperature = 25.5;, what is the purpose of the dot (.) operator?",
        "It performs multiplication~It accesses a member of a structure object~It declares a floating-point variable~It calls the displayData() function",
        1,
      ],
    ],
  },
  {
    t: "كود 2: Status",
    c: `void sendStatus(int device_id, bool online, float battery) {
 cout << "=== IoT Status Update ===" << endl;
 cout << "Device: " << device_id << endl;
 cout << "Status: " << (online ? "ONLINE" : "OFFLINE") << endl;
 cout << "Battery: " << battery << "%" << endl;
 cout << "Sending to cloud server..." << endl;
 cout << "Status update sent!" << endl;
}
bool checkConnection() {
 cout << "Checking internet connection..." << endl;
 cout << "Connection: OK" << endl;
 return true;
}
int main() {
 int motor_controller = 201; bool device_online = true; float battery_level = 87.5;
 if (checkConnection()) {
  sendStatus(motor_controller, device_online, battery_level);
 } else {
  cout << "Connection failed - storing data locally" << endl;
 }
}`,
    q: [
      [
        "First line printed to the console?",
        "=== IoT Status Update ===~Checking internet connection...~Device: 201~Connection: OK",
        1,
      ],
      [
        'Exact value printed on the "Status:" line?',
        "Status: true~Status: 1~Status: ONLINE~Status: OFFLINE",
        2,
      ],
      [
        "What does checkConnection() return, and how does it affect execution flow?",
        'Returns false and prints "Connection failed - storing data locally"~Returns true and triggers the execution of sendStatus(...)~Returns no value because its type is void~Throws a runtime error',
        1,
      ],
      ["Return type of sendStatus?", "int~bool~float~void", 3],
      [
        "Complete correct console output in order?",
        "Checking internet connection...\nConnection: OK\n=== IoT Status Update ===\nDevice: 201\nStatus: ONLINE\nBattery: 87.5%\nSending to cloud server...\nStatus update sent!~=== IoT Status Update ===\nDevice: 201\n… (sendStatus output only)~Connection failed - storing data locally~Checking internet connection...\nConnection: OK\nConnection failed - storing data locally",
        0,
      ],
    ],
  },
  {
    t: "كود 3: HTTP",
    c: `void sendHTTPRequest(string method, string endpoint, string data) {
 cout << "=== HTTP Request ===" << endl;
 cout << "Method: " << method << endl;
 cout << "Endpoint: " << endpoint << endl;
 cout << "Data: " << data << endl;
 cout << "Request sent to server" << endl;
}
void receiveHTTPResponse(int status_code, string response) {
 cout << "=== HTTP Response ===" << endl;
 cout << "Status: " << status_code << endl;
 if (status_code == 200) cout << "Success: " << response << endl;
 else cout << "Error: " << response << endl;
}
int main() {
 string sensor_data = "temp=25.5&pressure=3.2";
 sendHTTPRequest("POST", "/api/sensors", sensor_data);
 receiveHTTPResponse(200, "Data received successfully");
 sendHTTPRequest("GET", "/api/controls", "");
 receiveHTTPResponse(200, "motor_speed=75");
}`,
    q: [
      [
        "Console output of the first call to sendHTTPRequest in main()?",
        "=== HTTP Request ===\nMethod: GET\nEndpoint: /api/sensors\nData: temp=25.5&pressure=3.2\nRequest sent to server~=== HTTP Request ===\nMethod: POST\nEndpoint: /api/sensors\nData: temp=25.5&pressure=3.2\nRequest sent to server~=== HTTP Response ===\nStatus: 200\nSuccess: Data received successfully~Method: POST, Endpoint: /api/sensors",
        1,
      ],
      [
        'Which prefix is printed before the response string in receiveHTTPResponse(200, "Data received successfully")?',
        "Error:~Status:~Success:~Response:",
        2,
      ],
      [
        "What happens if status_code 404 is passed instead of 200?",
        'It prints "Success: " followed by the response message~It prints "Error: " followed by the response message~The program terminates with a runtime error~Nothing is printed',
        1,
      ],
      [
        'How many times is "=== HTTP Request ===" printed?',
        "1 time~2 times~4 times~0 times",
        1,
      ],
      [
        "In the second sendHTTPRequest call, what is passed as data?",
        '"temp=25.5&pressure=3.2"~"motor_speed=75"~An empty string ("")~NULL',
        2,
      ],
    ],
  },
  {
    t: "كود 4: IoTMessage",
    c: `struct IoTMessage { string topic; string message; int priority; };
void publishMessage(IoTMessage msg) {
 cout << "=== Publishing Message ===" << endl;
 cout << "Topic: " << msg.topic << endl;
 cout << "Message: " << msg.message << endl;
 cout << "Priority: " << msg.priority << endl;
 cout << "Published to IoT broker" << endl;
}
void subscribeToTopic(string topic) {
 cout << "Subscribed to topic: " << topic << endl;
 cout << "Waiting for messages..." << endl;
}
int main() {
 IoTMessage alert;
 alert.topic = "factory/motor/alerts";
 alert.message = "Motor temperature high: 85C";
 alert.priority = 2;
 publishMessage(alert);
 subscribeToTopic("factory/motor/commands");
}`,
    q: [
      [
        "Primary role of the IoTMessage struct?",
        "To establish an active socket connection to a cloud broker~To group related message attributes (topic, message, priority) into a single user-defined type~To automatically execute functions whenever a priority level changes~To encrypt sensor data before transmitting it",
        1,
      ],
      [
        'Exact text printed for the "Topic:" line in publishMessage(alert)?',
        "Topic: factory/motor/commands~Topic: factory/motor/alerts~Topic: Motor temperature high: 85C~Topic: alert",
        1,
      ],
      [
        "Correct sequential order of output headers generated by main()?",
        '"Subscribed to topic: ..." then "=== Publishing Message ==="~"=== Publishing Message ===" then "Subscribed to topic: ..."~"Waiting for messages..." then "Published to IoT broker"~"=== Publishing Message ===" then "Published to IoT broker" only',
        1,
      ],
      [
        "How is the struct passed into publishMessage?",
        "By reference (IoTMessage&)~By pointer (IoTMessage*)~By value (IoTMessage)~By constant reference (const IoTMessage&)",
        2,
      ],
      [
        "Which string is passed to subscribeToTopic() in main()?",
        '"factory/motor/alerts"~"Motor temperature high: 85C"~"factory/motor/commands"~"Waiting for messages..."',
        2,
      ],
    ],
  },
  {
    t: "كود 5: readSensor",
    c: `struct IoTSensorReading { int sensor_id; float value; string units; string location; };
IoTSensorReading readSensor(int id, string location) {
 IoTSensorReading reading;
 reading.sensor_id = id; reading.location = location;
 if (id == 1) { reading.value = 25.3; reading.units = "Celsius"; }
 else if (id == 2) { reading.value = 3.8; reading.units = "bar"; }
 return reading;
}
void prepareForTransmission(IoTSensorReading reading) {
 cout << "Preparing IoT data:" << endl;
 cout << "Sensor " << reading.sensor_id << " at " << reading.location << endl;
 cout << "Value: " << reading.value << " " << reading.units << endl;
 cout << "Ready for transmission" << endl;
}
int main() {
 cout << "IoT Data Collection System" << endl;
 IoTSensorReading temp = readSensor(1, "Motor_Room");
 IoTSensorReading pressure = readSensor(2, "Hydraulic_System");
 prepareForTransmission(temp);
 prepareForTransmission(pressure);
 cout << "All data prepared for cloud upload" << endl;
}`,
    q: [
      [
        'Values of value and units in temp after readSensor(1, "Motor_Room")?',
        'value = 3.8, units = "bar"~value = 25.3, units = "Celsius"~value = 0.0, units = ""~value = 1.0, units = "Motor_Room"',
        1,
      ],
      ["Return type of readSensor?", "void~int~IoTSensorReading~float", 2],
      [
        "Exact text of the second output line inside prepareForTransmission(pressure)?",
        "Sensor 1 at Motor_Room~Sensor 2 at Hydraulic_System~Value: 3.8 bar~Preparing IoT data:",
        1,
      ],
      [
        'If readSensor(3, "Warehouse") is called, what are reading.value and reading.units?',
        '25.3 and "Celsius"~3.8 and "bar"~Uninitialized / default values because id == 3 matches no if condition~Compilation error',
        2,
      ],
      [
        "Final console line printed before main() returns 0?",
        "Ready for transmission~All data prepared for cloud upload~IoT Data Collection System~Value: 3.8 bar",
        1,
      ],
    ],
  },
  {
    t: "كود 6: Command",
    c: `struct ControlCommand { string device; string action; float value; string source; };
void executeCommand(ControlCommand cmd) {
 cout << "=== Executing IoT Command ===" << endl;
 cout << "Device: " << cmd.device << endl;
 cout << "Action: " << cmd.action << endl;
 cout << "Value: " << cmd.value << endl;
 cout << "Source: " << cmd.source << endl;
 if (cmd.action == "SET_SPEED") cout << "Motor speed set to " << cmd.value << "%" << endl;
 else if (cmd.action == "START") cout << "Starting " << cmd.device << endl;
 else if (cmd.action == "STOP") cout << "Stopping " << cmd.device << endl;
 cout << "Command executed successfully" << endl;
}
int main() {
 ControlCommand remote_cmd;
 remote_cmd.device = "Motor_01"; remote_cmd.action = "SET_SPEED";
 remote_cmd.value = 75.0; remote_cmd.source = "Mobile_App";
 cout << "Received command from IoT cloud..." << endl;
 executeCommand(remote_cmd);
}`,
    q: [
      [
        "Which branch of the conditional logic in executeCommand is executed?",
        'if (cmd.action == "SET_SPEED")~else if (cmd.action == "START")~else if (cmd.action == "STOP")~None of the branches execute',
        0,
      ],
      [
        "Exact output generated by the conditional block for SET_SPEED?",
        "Starting Motor_01~Stopping Motor_01~Motor speed set to 75%~Command executed successfully",
        2,
      ],
      [
        "Value of remote_cmd.source in main()?",
        '"Motor_01"~"SET_SPEED"~"Mobile_App"~"IoT cloud"',
        2,
      ],
      [
        'What is printed immediately after "=== Executing IoT Command ==="?',
        "Received command from IoT cloud...~Device: Motor_01~Action: SET_SPEED~Value: 75",
        1,
      ],
      [
        'If action were "RESET", what is printed between the parameter listing and "Command executed successfully"?',
        "Motor speed set to 0%~Starting Motor_01~Stopping Motor_01~No additional line, because no if branch matches",
        3,
      ],
    ],
  },
  {
    t: "كود 7: Auth",
    c: `struct DeviceCredentials { string device_id; string api_key; int access_level; };
bool authenticateDevice(DeviceCredentials cred) {
 cout << "Authenticating device..." << endl;
 cout << "Device ID: " << cred.device_id << endl;
 cout << "API Key: " << cred.api_key.substr(0, 6) << "..." << endl;
 if (cred.api_key.length() > 10 && cred.access_level > 0) {
  cout << "Authentication: SUCCESS" << endl; return true;
 } else {
  cout << "Authentication: FAILED" << endl; return false;
 }
}
int main() {
 DeviceCredentials device;
 device.device_id = "MOTOR_CTRL_001";
 device.api_key = "abc123xyz789secure";
 device.access_level = 2;
 if (authenticateDevice(device)) cout << "Device authorized for IoT communication" << endl;
 else cout << "Access denied - check credentials" << endl;
}`,
    q: [
      [
        'Output of cred.api_key.substr(0, 6) when api_key = "abc123xyz789secure"?',
        "abc123~abc123xyz789secure~xyz789~secure",
        0,
      ],
      [
        "Which two conditions must be satisfied for authenticateDevice to return true?",
        'device_id length > 10 and access_level == 2~api_key length > 10 AND access_level > 0~api_key starts with "abc" OR access_level > 0~api_key length == 6 and access_level > 1',
        1,
      ],
      [
        "Result of if (authenticateDevice(device)) in main()?",
        'false, printing "Access denied - check credentials"~true, printing "Device authorized for IoT communication"~Throws a runtime out-of-range exception~Causes an infinite loop',
        1,
      ],
      [
        "What would authenticateDevice return if access_level were 0?",
        "true~false~1~void",
        1,
      ],
      [
        "Exact text printed for the API Key display line?",
        "API Key: abc123xyz789secure...~API Key: abc123...~API Key: MOTOR_CTRL_001...~API Key: ...",
        1,
      ],
    ],
  },
];
const $ = (s) => document.querySelector(s),
  L = "ABCD",
  e = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
let st = { a: {}, c: [0, 0], r: 0 };
try {
  Object.assign(st, JSON.parse(localStorage.getItem("qb2") || "{}"));
} catch (x) {}
if (!st.t)
  st.t = matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light";
function sv() {
  try {
    localStorage.setItem("qb2", JSON.stringify(st));
  } catch (x) {}
}
function ap() {
  document.documentElement.dataset.theme = st.t;
  $("#tb").textContent = st.t == "dark" ? "☀️ وضع مضيء" : "🌙 وضع داكن";
}
function th() {
  st.t = st.t == "dark" ? "light" : "dark";
  ap();
  sv();
}
function go(s, i) {
  st.c = [s, i];
  st.r = 0;
  st.m = 0;
  sv();
  R();
  scrollTo(0, 0);
}
function cur() {
  return st.m ? st.o[st.p] : st.c;
}
function rn(f) {
  const T = S.reduce((n, s) => n + s.q.length, 0);
  if (f || !st.o || st.o.length != T) {
    const o = [];
    S.forEach((s, i) => s.q.forEach((_, j) => o.push([i, j])));
    for (let i = o.length - 1; i > 0; i--) {
      const j = (Math.random() * (i + 1)) | 0;
      [o[i], o[j]] = [o[j], o[i]];
    }
    st.o = o;
    st.p = 0;
  }
  st.m = 1;
  st.r = 0;
  sv();
  R();
  scrollTo(0, 0);
}
function pk(i) {
  st.a[cur().join("-")] = i;
  sv();
  R();
}
function nv(d) {
  if (st.m) {
    st.p += d;
    if (st.p < 0) st.p = 0;
    if (st.p >= st.o.length) {
      st.m = 0;
      st.r = 1;
    }
    sv();
    R();
    scrollTo(0, 0);
    return;
  }
  let [s, i] = st.c;
  i += d;
  if (i < 0) {
    s--;
    if (s < 0) {
      s = 0;
      i = 0;
    } else i = S[s].q.length - 1;
  } else if (i >= S[s].q.length) {
    s++;
    if (s >= S.length) {
      st.r = 1;
      sv();
      return R();
    }
    i = 0;
  }
  go(s, i);
}
function R() {
  const T = S.reduce((n, s) => n + s.q.length, 0);
  let an = 0,
    ok = 0;
  const sec = S.map((s, si) => {
    let d = 0,
      k = 0;
    s.q.forEach((q, qi) => {
      const v = st.a[si + "-" + qi];
      if (v != null) {
        d++;
        if (v == q[2]) k++;
      }
    });
    an += d;
    ok += k;
    return [d, k];
  });
  $("#st").innerHTML =
    `<b>التقدم:</b> ${an}/${T} &nbsp;•&nbsp; <b>الدرجة:</b> ${ok}/${T}`;
  $("#bar").style.width = (an / T) * 100 + "%";
  $("#ch").innerHTML =
    S.map(
      (s, i) =>
        `<button class="chip${!st.r && !st.m && st.c[0] == i ? " on" : ""}" onclick="go(${i},0)">${s.t} <small>${sec[i][0]}/${s.q.length}</small></button>`,
    ).join("") +
    `<button class="chip${st.m && !st.r ? " on" : ""}" onclick="rn()">🔀 عشوائي (كل الأسئلة)</button><button class="chip${st.r ? " on" : ""}" onclick="st.r=1;sv();R()">🏁 النتيجة</button>`;
  const m = $("#m");
  if (st.r) {
    m.innerHTML =
      `<h2 style="margin-top:0">النتيجة النهائية</h2><div class="big">${ok} / ${T}</div><p>${Math.round((ok / T) * 100)}٪ — تم حل ${an} من ${T} سؤال</p>` +
      S.map(
        (s, i) =>
          `<div class="row"><span>${s.t}</span><span>${sec[i][1]} / ${s.q.length}</span></div>`,
      ).join("") +
      `<div class="nav"><button class="nb" onclick="st.a={};go(0,0)">🔄 إعادة من البداية</button></div>`;
    return;
  }
  const [si, qi] = cur(),
    s = S[si],
    q = s.q[qi],
    v = st.a[si + "-" + qi],
    o = q[1].split("~");
  m.innerHTML =
    `<div class="mu">${st.m ? `🔀 عشوائي — سؤال ${st.p + 1} من ${st.o.length} (${s.t})` : `${s.t} — سؤال ${qi + 1} من ${s.q.length}`}</div>` +
    (s.c ? `<pre class="en code">${e(s.c)}</pre>` : "") +
    `<div class="en q">${e(q[0])}</div>` +
    o
      .map(
        (x, i) =>
          `<button class="op en${v != null ? (i == q[2] ? " ok" : i == v ? " no" : "") : ""}" ${v != null ? "disabled" : ""} onclick="pk(${i})"><b>${L[i]}.</b> ${e(x)}</button>`,
      )
      .join("") +
    (v != null
      ? `<div class="fb ${v == q[2] ? "g" : "b"}">${v == q[2] ? "✓ إجابة صحيحة" : "✗ إجابة خاطئة — الصحيحة: " + L[q[2]]}</div>`
      : "") +
    `<div class="nav"><button class="nb" onclick="nv(-1)">→ السابق</button>${st.m ? '<button class="chip" onclick="rn(1)">🔀 خلط جديد</button>' : ""}<button class="nb" onclick="nv(1)">التالي ←</button></div>`;
}
ap();
R();
