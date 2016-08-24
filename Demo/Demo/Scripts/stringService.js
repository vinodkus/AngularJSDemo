﻿/// <reference path="Demo20.js" />
app.factory("stringService1", function ()
{
    return {
        processString: function (input) {
            if (!input) {
                return input;
            }

            var output = "";
            for (var i = 0; i < input.length; i++) {
                if (i > 0 && input[i] == input[i].toUpperCase()) {
                    output = output + " ";
                }
                output = output + input[i];
            }
            return output;
        },
        ConvertUpper: function (input)
        {
            return input.toUpperCase();
        }
    }
})