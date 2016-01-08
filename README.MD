# NodeMCU Sing Along 
[NodeMCU](http://nodemcu.com/index_en.html) is an open source hardware project that is equipped with ESP8266 wifi module. I created a simple webpage that has two buttons. When the buttons are pressed, a get request is made to the server created by the NodeMCU device. Depending on which button is pressed, a specific song is played. 

# Navigating Through Various IDE's for NodeMCU
I first went through [Esplorer](http://esp8266.ru/esplorer/), then through [Arduino IDE version 1.6.8](https://www.arduino.cc/), and finally has much success with [platform.io](http://platform.io/) and [CoolTerm](http://freeware.the-meiers.org/). Some issues ecountered with the Arduino IDE was with WiFi connection. WiFi connection was not reliable, even though there were no issues with blinking the onboard LED.   

# Installation - Pre Reqs
These set of instructions are for Mac OSX. The [NodeMCU Github](https://github.com/nodemcu/nodemcu-firmware/wiki) list the necessary software to install. You will also need to download [Mac Port](https://www.macports.org/install.php) if you haven't already. Once you have finished the installation process, you should be able to see this port for the device: 
```shell
$  ls /dev/tty.*
/dev/tty.SLAB_USBtoUARTport 
```
you should flash the firmware to the controller. You should then download [esptool](https://github.com/themadinventor/esptool) and [pySerial](https://github.com/pyserial/pyserial#readme) in a virtual enviornment. From there you can move the [bin file](https://github.com/nodemcu/nodemcu-firmware/releases/tag/0.9.6-dev_20150704) to the same directory as esptool.py.  You would then write in the command line: 
```python
$ python esptool.py -p /dev/tty.SLAB_USBtoUART write_flash 0x00 nodemcu_float_0.9.6-dev_20150704.bin
```
Make sure that you are pressing the flash button the device.  After you have successfully uploaded firmware, you are ready to try it in the Arduino IDE, Esplorer, and/or platform.io with CoolTerm. 
