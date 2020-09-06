// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.8.0;

contract Inbox {
    string public message;
    
    constructor(string initialMessage) {
        message = initialMessage;
    }
    
    function setMessage(string newMessage) public{
        message = newMessage;
    }
    
}