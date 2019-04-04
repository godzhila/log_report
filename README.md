# log_report

This is the coding exercise for iHerb Support Engineer II position.  

Below is part of a log file, which is logging individual download requests over some period of time. Write a tool or program to generate a report of the total number of bytes downloaded per customer. Given that the log could have thousands of entries, rather than manually going through the log file, you need to write script/code to generate the report.

Please write this in the scripting language that you feel most comfortable with. Let us know what type of language you are using (perl, java, powershell, bash, javascript, c#, etc.) and upload your final script to github/ bitbucket

Notes: The report should list each unique customer in the log file and the total number of bytes that the customer has downloaded. The same customer may perform multiple downloads and therefore appear on multiple lines of the log file; you should add the bytes in those entries together to figure out the total number of bytes that the customer has downloaded.

01-01-2012 01:13:36 Blah blah : blah CustomerId:1234 downloaded Blah Size:5432 bytes Carrier:Company-A
01-01-2012 01:13:45 Blah blah : blah CustomerId:41444 downloaded Blah Size:38655 bytes Carrier:Company-S
01-01-2012 01:13:47 Blah blah : blah CustomerId:12334 downloaded Blah Size:25632 bytes Carrier:Company-A
01-01-2012 01:13:50 Blah blah : blah CustomerId:41444 downloaded Blah Size:7213 bytes Carrier:Company-S
01-01-2012 01:13:58 Blah blah : blah CustomerId:553155 downloaded Blah Size:70100 bytes Carrier:Company-V

