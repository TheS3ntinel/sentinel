/*
@licstart  The following is the entire license notice for the JavaScript code in this page.
------------------------------------------------------------------------
    inject(.html) allows the insertion of any HTML document into any
    HTML document for ease of maintenance. Copyright (C) 2021
    ClandestineOne

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
------------------------------------------------------------------------
    @licend  The above is the entire license notice for the JavaScript code in this page.
*/

function inject_html() {
 var z, i, elmnt, file, xhttp;
 z = document.getElementsByTagName("*");
 for (i = 0; i < z.length; i++) {
   elmnt = z[i];
   file = elmnt.getAttribute("inject_html");
   if (file) {
     xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function() {
       if (this.readyState == 4) {
         if (this.status == 200) {elmnt.innerHTML = this.responseText;}
         if (this.status == 404) {elmnt.innerHTML = "Mission Failed, We'll Get 'Em Next Time [Error inject_html failed to locate content]";}
         elmnt.removeAttribute("inject_html");
         inject_html();
       }
     }
     xhttp.open("GET", file, true);
     xhttp.send();
     return;
   }
 }
}
