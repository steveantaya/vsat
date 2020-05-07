{\rtf1\ansi\ansicpg1252\cocoartf1671\cocoasubrtf600
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 four51.app.factory('autoProfileService', function() \{\
\
    var _loginGroups = [\
        \{"GroupName":"AdBuilder","UrlTemplate":"https://www.four51.com/UI/Profile.hcf?id=cc266a6b-eacc-4e3b-a7f9-162f1c9d2f1a&username=<user name>&password=<password>&name1=<first name>&name2=<last name>&email=<email>&dealerid=<dealerid>"\},\
        \{"GroupName":"ViaSat Stationery","UrlTemplate":"https://www.four51.com/UI/Profile.hcf?id=85d70e5c-e82e-44a0-aced-3437b59707f4&username=<user name>&password=<password>&name1=<first name>&name2=<last name>&email=<email>&dealerid=<dealerid>"\}\
    ];\
\
    return \{\
        loginGroups: _loginGroups\
    \};\
\});}