/**
 * Created by pomy on 10/12/2016.
 */

'use strict';

chrome.runtime.onMessage.addListener(function (message,sender,sendResponse) {
   if(message){
       //create tab to open the repo url
       chrome.tabs.create({
           url: message
       }, function (tab) {

       })
   }
});
